---
date: 2026-09-21 20:10:00+08:00
layout: post
title: "Improving the Availability of the ImageTrans Remote Translation Service"
categories: blog
tags: imagetrans
---

ImageTrans can connect to a remote server over WebSocket to provide image translation as a service. There are two ends in this setup:

- The server ([ImageTrans_wsServer](https://github.com/xulihang/ImageTrans_wsServer)) runs on a VPS, receiving and dispatching translation requests
- The client (ImageTrans) runs on a mac mini m4 at home, doing the actual OCR, text detection, translation and typesetting

The architecture itself is simple, but keeping it running reliably means dealing with a fair number of availability problems. Here's a record of the improvements made so far and the pitfalls found along the way.

## Dispatching on the server

The most basic problem is dispatching across multiple clients. The server keeps a connection pool, and each client reports its own `displayName` on connect via `set_name_and_password`; the server dispatches based on that.

Dispatching prefers idle instances. If the requested instance is busy, another idle one picks up the work. Each instance has its own busy flag, with `ConcurrentHashMap`'s `putIfAbsent` providing atomicity so two requests can't grab the same instance at once.

There's also a failure cooldown: after an instance fails repeatedly, it stops receiving work for a while. And timeout redispatch — if an instance doesn't respond within 3 seconds, or hasn't finished within 60 seconds, the request is redispatched to another instance.

## Process isolation on the client

On the client side, two things were done:

The first is **starting a separate process**. Translation jobs run in their own process, so memory leaks don't accumulate in the main one. This is controlled by the `useIndependentProcessForServer` preference and kicks in during `ExecuteWorkFlow`.

The second is **periodically restarting itself**. The client has a `RestartTimer`, defaulting to an 8-hour interval, which relaunches itself when it fires. In theory this clears out accumulated state.

## Problems found

The mechanisms above look reasonably complete, but some problems showed up in actual operation.

One major problem is that the client receives an image, starts processing it, and then mysteriously hangs, leaving that instance unavailable from then on.

## Workarounds

Since `RestartTimer` can't be relied on once things hang, the fix bypasses it and works from outside the process. A scheduled task on the host system `pkill`s the client process and restarts it every 24 hours.

Scheduled killing has an obvious flaw: **24 hours is a fixed period, not "restart when stuck"**. If the hang happens 10 minutes after a restart, you wait another 23 hours and 50 minutes.

So a watchdog can be added on top: watch the clients connected via the server's list port, and if a connected client's name is no longer there, restart that process.
