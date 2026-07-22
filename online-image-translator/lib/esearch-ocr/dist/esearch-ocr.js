var Qt = Object.defineProperty;
var Zt = (t, n, o) => n in t ? Qt(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[n] = o;
var kt = (t, n, o) => Zt(t, typeof n != "symbol" ? n + "" : n, o);
let jt = (t, n) => {
  if (typeof OffscreenCanvas < "u")
    return new OffscreenCanvas(t, n);
  const o = document.createElement("canvas");
  return o.width = t, o.height = n, o;
};
function it(t, n) {
  return jt(t, n);
}
function Jt(t) {
  jt = t;
}
function Lt(t) {
  return t > 0 ? Math.floor(t) : Math.ceil(t);
}
function nt(t, n, o) {
  return Math.max(n, Math.min(t, o));
}
function Nt(t, n, o, s, l = "high") {
  return tn(t, n, o, s, l).getImageData(0, 0, n, o);
}
function tn(t, n, o, s, l = "high") {
  const c = K(t), u = it(n, o).getContext("2d");
  return u.imageSmoothingEnabled = l !== !1, l && (u.imageSmoothingQuality = l), s === "fill" ? u.scale(Math.min(n / t.width, 1), Math.min(o / t.height, 1)) : u.scale(n / t.width, o / t.height), u.drawImage(c, 0, 0), u;
}
function K(t, n, o) {
  const s = it(n || t.width, o || t.height);
  return s.getContext("2d").putImageData(t, 0, 0), s;
}
function _t(t, n, o) {
  const s = t.data, l = [], c = [], i = [];
  let u = 0, x = 0;
  for (let f = 0; f < s.length; f += 4)
    i[x] || (i[x] = []), c[x] || (c[x] = []), l[x] || (l[x] = []), l[x][u] = (s[f] / 255 - n[0]) / o[0], c[x][u] = (s[f + 1] / 255 - n[1]) / o[1], i[x][u] = (s[f + 2] / 255 - n[2]) / o[2], u++, u === t.width && (u = 0, x++);
  return [i, c, l];
}
class Gt {
  constructor(n) {
    kt(this, "tl", []);
    kt(this, "name");
    this.name = n;
  }
  l(n) {
    const o = performance.now();
    this.tl.push({ t: n, n: o });
    const s = [];
    for (let c = 1; c < this.tl.length; c++) {
      const i = this.tl[c].n - this.tl[c - 1].n, u = this.tl[c - 1].t, x = s.find((f) => f.n === u);
      x ? (x.c++, x.d += i) : s.push({ d: i, n: u, c: 1 });
    }
    const l = [];
    for (const c of s) {
      const i = c.c > 1 ? `${c.n}x${c.c}` : c.n;
      l.push(`${i} ${c.d}`);
    }
    l.push(this.tl.at(-1).t), console.log(`${this.name} ${s.map((c) => c.d).reduce((c, i) => c + i, 0)}ms: `, l.join(" "));
  }
}
async function nn(t, n, o, s, l, c) {
  const { transposedData: i, image: u } = en(t, l, c), f = (await on(i, u, n, o))[0].data, a = f.reduce((b, p) => Math.max(b, p)), h = f.findIndex((b) => b === a);
  return s[h];
}
function en(t, n, o) {
  const s = Nt(t, n, o);
  return { transposedData: _t(s, [0.485, 0.456, 0.406], [0.229, 0.224, 0.225]), image: s };
}
async function on(t, n, o, s) {
  const l = t.flat(Number.POSITIVE_INFINITY), c = Float32Array.from(l), i = new o.Tensor("float32", c, [1, 3, n.height, n.width]), u = {};
  u[s.inputNames[0]] = i;
  const x = await s.run(u);
  return Object.values(x);
}
function sn(t) {
  if (t.length === 0) throw new Error("Empty contour");
  const n = cn([...t]);
  let o = Number.POSITIVE_INFINITY;
  const s = {
    center: { x: 0, y: 0 },
    size: { width: 0, height: 0 },
    angle: 0
  };
  for (let l = 0; l < n.length; l++) {
    const c = n[l], i = n[(l + 1) % n.length], u = { x: i.x - c.x, y: i.y - c.y }, x = Math.hypot(u.x, u.y), [f, a] = [u.x / x, u.y / x];
    let h = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, p = Number.POSITIVE_INFINITY, y = Number.NEGATIVE_INFINITY;
    for (const w of n) {
      const M = (w.x - c.x) * f + (w.y - c.y) * a;
      h = Math.min(h, M), b = Math.max(b, M);
      const I = -(w.x - c.x) * a + (w.y - c.y) * f;
      p = Math.min(p, I), y = Math.max(y, I);
    }
    const m = (b - h) * (y - p);
    if (m < o) {
      o = m;
      const w = (h + b) / 2, M = (p + y) / 2;
      s.center = {
        x: c.x + f * w - a * M,
        y: c.y + a * w + f * M
      }, s.size = {
        width: b - h,
        height: y - p
      }, s.angle = Math.atan2(a, f) * (180 / Math.PI);
    }
  }
  return s.size.width < s.size.height && ([s.size.width, s.size.height] = [s.size.height, s.size.width], s.angle += 90), s.angle = (s.angle % 180 + 180) % 180, s;
}
function cn(t) {
  t.sort((s, l) => s.x - l.x || s.y - l.y);
  const n = [];
  for (const s of t) {
    for (; n.length >= 2 && Vt(n[n.length - 2], n[n.length - 1], s) <= 0; )
      n.pop();
    n.push(s);
  }
  const o = [];
  for (let s = t.length - 1; s >= 0; s--) {
    const l = t[s];
    for (; o.length >= 2 && Vt(o[o.length - 2], o[o.length - 1], l) <= 0; )
      o.pop();
    o.push(l);
  }
  return n.slice(0, -1).concat(o.slice(0, -1));
}
function Vt(t, n, o) {
  return (n.x - t.x) * (o.y - t.y) - (n.y - t.y) * (o.x - t.x);
}
function rn(t, n, o = "CHAIN_APPROX_SIMPLE") {
  const s = t.length, l = s > 0 ? t[0].length : 0, c = Array.from({ length: s }, () => new Array(l).fill(!1));
  for (let i = 0; i < s; i++)
    for (let u = 0; u < l; u++)
      if (t[i][u] !== 0 && !c[i][u] && Ht(t, u, i)) {
        const x = an(t, c, u, i, o === "CHAIN_APPROX_SIMPLE");
        n.push(x);
      }
}
function Ht(t, n, o) {
  return t[o][n] !== 0 && (o > 0 && t[o - 1][n] === 0 || o < t.length - 1 && t[o + 1][n] === 0 || n > 0 && t[o][n - 1] === 0 || n < t[0].length - 1 && t[o][n + 1] === 0);
}
function an(t, n, o, s, l) {
  const c = [];
  let i = { x: o, y: s }, u = { x: o - 1, y: s };
  const x = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
  function a(m) {
    return m.x + m.y * t[0].length;
  }
  function h(m) {
    const w = Math.floor(m / t[0].length);
    return { x: m % t[0].length, y: w };
  }
  function b(m, w) {
    const M = a(m), I = a(w), N = Ct(w.x - m.x, w.y - m.y), B = Ct(m.x - w.x, m.y - w.y), D = x.get(M) ?? [], _ = x.get(I) ?? [];
    x.set(M, [...D, N]), x.set(I, [..._, B]);
  }
  function p(m) {
    const w = a(i);
    u = i, i = { x: i.x + gt[m].dx, y: i.y + gt[m].dy }, b(u, i);
    const I = (f.get(w) ?? []).filter((N) => N !== m);
    I.length > 0 ? f.set(w, I) : f.delete(w);
  }
  x.set(a(i), [Ct(-1, 0)]);
  let y = 0;
  do {
    c.push(i), n[i.y][i.x] = !0;
    const m = ln(t, x, i);
    if (m.length === 0) {
      if (f.size === 0)
        break;
      const [w, M] = Array.from(f.entries()).at(0), I = M[0];
      i = h(w), p(I);
    }
    if (m.length >= 1) {
      const w = a(i);
      f.set(w, m);
      const M = m[0];
      p(M);
    }
    y++;
  } while (y < 1e9);
  return l ? un(c) : c;
}
const gt = [
  { dx: 1, dy: 0 },
  // Right
  { dx: 1, dy: -1 },
  // Top-Right
  { dx: 0, dy: -1 },
  // Top
  { dx: -1, dy: -1 },
  // Top-Left
  { dx: -1, dy: 0 },
  // Left
  { dx: -1, dy: 1 },
  // Bottom-Left
  { dx: 0, dy: 1 },
  // Bottom
  { dx: 1, dy: 1 }
  // Bottom-Right
];
function ln(t, n, o) {
  function s(i) {
    return i.x + i.y * t[0].length;
  }
  const l = n.get(s(o)) ?? [], c = [];
  for (const [i, { dx: u, dy: x }] of gt.entries()) {
    if (l.includes(i)) continue;
    const f = o.x + u, a = o.y + x;
    f >= 0 && f < t[0].length && a >= 0 && a < t.length && Ht(t, f, a) && c.push(i);
  }
  return c;
}
function Ct(t, n) {
  const o = gt.findIndex(({ dx: s, dy: l }) => t === s && n === l);
  return o === -1 ? 0 : o;
}
function un(t) {
  if (t.length < 3) return [...t];
  const n = [t[0]];
  for (let o = 1; o < t.length - 1; o++) {
    const s = n[n.length - 1], l = t[o], c = t[o + 1];
    hn(s, l, c) || n.push(l);
  }
  return n.push(t[t.length - 1]), n;
}
function hn(t, n, o) {
  return (n.x - t.x) * (o.y - n.y) === (n.y - t.y) * (o.x - n.x);
}
const $ = new Gt("t"), q = new Gt("af_det");
let V = !1, Bt = !1, G = null;
function rt(t, n) {
  var s;
  const o = document.createElement("canvas");
  o.width = t.width, o.height = t.height, o.getContext("2d").drawImage(t, 0, 0), n && (o.id = n);
  try {
    (s = document == null ? void 0 : document.body) == null || s.append(o);
  } catch {
  }
}
let bt = (t, n, o) => new ImageData(t, n, o);
function A(...t) {
  Bt && console.log(...t);
}
function fn(...t) {
  Bt && console.log(t.map((n) => `%c${n}`).join(""), ...t.map((n) => `color: ${n}`));
}
async function Fn(t) {
  dn(t);
  const n = {
    det: "det" in t ? t.det : {
      input: t.detPath,
      ratio: t.detRatio,
      det_db_thresh: t.det_db_thresh,
      det_db_box_thresh: t.det_db_box_thresh,
      det_db_unclip_ratio: t.det_db_unclip_ratio,
      erode_size: t.erode_size,
      on: async (s) => {
        t.onDet && t.onDet(s), t.onProgress && t.onProgress("det", 1, 1);
      }
    },
    rec: "rec" in t ? t.rec : {
      input: t.recPath,
      decodeDic: t.dic,
      imgh: t.imgh,
      on: async (s, l, c) => {
        t.onRec && t.onRec(s, {
          text: l.map((i) => i[0].t).join(""),
          mean: l.map((i) => i[0].mean).reduce((i, u) => i + u, 0) / l.length
        }), t.onProgress && t.onProgress("rec", c, s + 1);
      }
    },
    docCls: "rec" in t ? t.docCls : t.docClsPath ? {
      input: t.docClsPath
    } : void 0,
    analyzeLayout: "rec" in t ? t.analyzeLayout : {
      columnsTip: t.columnsTip,
      docDirs: t.docDirs
    },
    ...t
  }, o = await xn(n);
  return G = o, o;
}
function dn(t) {
  V = !!t.dev, Bt = V || !!t.log, V || ($.l = () => {
  }, q.l = () => {
  }), t.canvas && Jt(t.canvas), t.imageData && (bt = t.imageData);
}
async function Ft(t) {
  let n;
  if (typeof window > "u") {
    const o = t;
    if (!o.data || !o.width || !o.height) throw new Error("invalid image data");
    return o;
  }
  if (typeof t == "string" ? (n = new Image(), n.src = t, await new Promise((o) => {
    n.onload = o;
  })) : (t instanceof ImageData, n = t), n instanceof HTMLImageElement) {
    const s = it(n.naturalWidth, n.naturalHeight).getContext("2d");
    if (!s) throw new Error("canvas context is null");
    s.drawImage(n, 0, 0), n = s.getImageData(0, 0, n.naturalWidth, n.naturalHeight);
  }
  if (n instanceof HTMLCanvasElement) {
    const o = n.getContext("2d");
    if (!o) throw new Error("canvas context is null");
    n = o.getImageData(0, 0, n.width, n.height);
  }
  return n;
}
function vt() {
  try {
    it(1, 1), bt(new Uint8ClampedArray(4), 1, 1);
  } catch (t) {
    throw console.log("nodejs need set canvas, please use setOCREnv to set canvas and imageData"), t;
  }
}
async function Yn(t) {
  if (!G) throw new Error("need init");
  return G.ocr(t);
}
async function jn(t) {
  if (!G) throw new Error("need init");
  return G.det(t);
}
async function Gn(t) {
  if (!G) throw new Error("need init");
  return G.rec(t);
}
async function Hn(t) {
  if (!G) throw new Error("need init");
  return G.recognize(t);
}
async function xn(t) {
  vt();
  const n = {
    ort: t.ort,
    ortOption: t.ortOption
  }, o = t.docCls ? await mn({ ...t.docCls, ...n }) : void 0, s = await gn({ ...t.det, ...n }), l = await yn({ ...t.rec, ...n }), c = async (i) => {
    const u = await Ft(i);
    return l.rec(bn(u));
  };
  return {
    ocr: async (i) => {
      let u = await Ft(i), x = 0;
      o && (x = await o.docCls(u), A("dir", x), u = Wt(u, 360 - x));
      const f = await s.det(u), a = await l.rec(f), h = On(a, t.analyzeLayout);
      return A(a, h), $.l("end"), { src: a, ...h, docDir: x };
    },
    det: s.det,
    rec: l.rec,
    recRaw: l.rawRec,
    recognize: c
  };
}
function Dt(t, n, o) {
  return typeof n == "string" || n instanceof ArrayBuffer || n instanceof SharedArrayBuffer, t.InferenceSession.create(n, o);
}
async function mn(t) {
  const n = await Dt(t.ort, t.input, t.ortOption);
  return { docCls: async (s) => nn(s, t.ort, n, [0, 90, 180, 270], 224, 224) };
}
async function gn(t) {
  vt();
  let n = 1;
  const o = await Dt(t.ort, t.input, t.ortOption);
  t.ratio !== void 0 && (n = t.ratio);
  const s = t.det_db_thresh ?? 0.3, l = t.det_db_box_thresh ?? 0, c = t.det_db_unclip_ratio ?? 2, i = t.erode_size ?? 1;
  async function u(x) {
    var M;
    const f = x;
    if (V) {
      const I = K(f);
      rt(I);
    }
    $.l("pre_det");
    const { data: a, width: h, height: b } = wn(f, n), { transposedData: p, image: y } = a;
    $.l("det");
    const m = await pn(p, y, o, t.ort);
    $.l("aft_det");
    const w = Mn(
      { data: m.data, width: m.dims[3], height: m.dims[2] },
      h,
      b,
      f,
      s,
      l,
      c,
      i
    );
    return (M = t == null ? void 0 : t.on) == null || M.call(t, w), w;
  }
  return { det: u };
}
function bn(t) {
  const n = t;
  return [
    {
      box: [
        [0, 0],
        [n.width, 0],
        [n.width, n.height],
        [0, n.height]
      ],
      img: n,
      style: { bg: [255, 255, 255], text: [0, 0, 0] }
    }
  ];
}
async function yn(t) {
  var u;
  vt();
  let n = 48;
  const o = await Dt(t.ort, t.input, t.ortOption), s = t.decodeDic.split(/\r\n|\r|\n/) || [];
  s.at(-1) === "" ? s[s.length - 1] = " " : s.push(" "), t.imgh && (n = t.imgh);
  const l = ((u = t.optimize) == null ? void 0 : u.space) === void 0 ? !0 : t.optimize.space;
  async function c(x, f) {
    var y, m, w;
    const a = [];
    $.l("bf_rec");
    const h = zn(x, n), b = (f == null ? void 0 : f.topK) || ((y = t.multiChar) == null ? void 0 : y.topK) || 2, p = (f == null ? void 0 : f.threshold) || ((m = t.multiChar) == null ? void 0 : m.threshold) || 1e-5;
    for (const [M, I] of h.entries()) {
      const { b: N, imgH: B, imgW: D } = I, _ = await In(N, B, D, o, t.ort), F = An(_, s, { topK: b, threshold: p })[0];
      a.push({
        text: F,
        box: x[M].box,
        style: x[M].style
      }), (w = t == null ? void 0 : t.on) == null || w.call(t, M, F, x.length);
    }
    return $.l("rec_end"), a;
  }
  async function i(x) {
    const f = [], a = await c(x, { topK: 2, threshold: 1e-5 });
    for (const h of a) {
      const b = h.text.map((m) => l && m[0].t === "" && m[1].t === " " && m[1].mean > 1e-3 ? m[1] : m[0]), p = b.map((m) => m.t).join("").trim(), y = b.map((m) => m.mean).reduce((m, w) => m + w, 0) / b.length;
      y < 0.5 || f.push({
        text: p,
        mean: y,
        box: h.box,
        style: h.style
      });
    }
    return f;
  }
  return { rec: i, rawRec: c };
}
async function pn(t, n, o, s) {
  const l = Float32Array.from(t.flat(3)), c = new s.Tensor("float32", l, [1, 3, n.height, n.width]), i = {};
  return i[o.inputNames[0]] = c, (await o.run(i))[o.outputNames[0]];
}
async function In(t, n, o, s, l) {
  const c = Float32Array.from(t.flat(3)), i = new l.Tensor("float32", c, [1, 3, n, o]), u = {};
  return u[s.inputNames[0]] = i, (await s.run(u))[s.outputNames[0]];
}
function wn(t, n) {
  const o = Math.max(Math.round(t.height * n / 32) * 32, 32), s = Math.max(Math.round(t.width * n / 32) * 32, 32);
  if (V) {
    const i = K(t);
    rt(i);
  }
  const l = Nt(t, s, o, "fill"), c = _t(l, [0.485, 0.456, 0.406], [0.229, 0.224, 0.225]);
  if (A(l), V) {
    const i = K(l);
    rt(i);
  }
  return { data: { transposedData: c, image: l }, width: s, height: o };
}
function Mn(t, n, o, s, l = 0.3, c = 0.5, i = 2, u = 1) {
  q.l("");
  const x = Math.min(s.width, n), f = Math.min(s.height, o), { data: a, width: h, height: b } = t, p = new Uint8Array(h * b);
  for (let I = 0; I < a.length; I++) {
    const N = a[I] > l ? 255 : 0;
    p[I] = N;
  }
  let y = p;
  for (let I = 0; I < u; I++) {
    const N = y;
    y = new Uint8Array(h * b);
    for (let B = 0; B < b; B++)
      for (let D = 0; D < h; D++) {
        const _ = B * h + D;
        if (N[_] === 0) {
          y[_] = 0;
          continue;
        }
        B > 0 && N[_ - h] === 0 || B < b - 1 && N[_ + h] === 0 ? y[_] = 0 : y[_] = 255;
      }
  }
  if (V) {
    const I = new Uint8ClampedArray(h * b * 4);
    for (let D = 0; D < y.length; D++) {
      const _ = D * 4, F = y[D];
      I[_] = I[_ + 1] = I[_ + 2] = F, I[_ + 3] = 255;
    }
    const N = bt(I, h, b), B = K(N);
    rt(B, "det_ru");
  }
  q.l("edge");
  const m = [], w = [];
  for (let I = 0; I < b; I++)
    w.push(Array.from(y.slice(I * h, I * h + h)));
  const M = [];
  if (rn(w, M), V) {
    const I = document.querySelector("#det_ru").getContext("2d");
    for (const N of M) {
      I.moveTo(N[0].x, N[0].y);
      for (const B of N)
        I.lineTo(B.x, B.y);
      I.strokeStyle = "red", I.closePath(), I.stroke();
    }
  }
  for (let I = 0; I < M.length; I++) {
    q.l("get_box");
    const N = 3, B = M[I], { points: D, sside: _ } = Bn(B);
    if (_ < N) continue;
    const F = Sn(D, i), Y = F.points;
    if (F.sside < N + 2)
      continue;
    const at = s.width / x, z = s.height / f;
    for (let R = 0; R < Y.length; R++)
      Y[R][0] *= at, Y[R][1] *= z;
    q.l("order");
    const j = vn(Y);
    for (const R of j)
      R[0] = nt(Math.round(R[0]), 0, s.width), R[1] = nt(Math.round(R[1]), 0, s.height);
    const lt = Lt(Yt(j[0], j[1])), U = Lt(Yt(j[0], j[3]));
    if (lt <= 3 || U <= 3 || Nn(
      a,
      h,
      b,
      D,
      i
    ) < c) continue;
    Rn(Y, "", "red", "det_ru"), q.l("crop");
    const et = Dn(s, Y);
    q.l("match best");
    const { bg: ut, text: O } = Tn(et), H = En(Y, et, O);
    m.push({ box: H, img: et, style: { bg: ut, text: O } });
  }
  return q.l("e"), A(m), m;
}
function kn(t) {
  let n = -1;
  const o = t.length;
  let s, l = t[o - 1], c = 0;
  for (; ++n < o; )
    s = l, l = t[n], c += s[1] * l[0] - s[0] * l[1];
  return c / 2;
}
function Cn(t) {
  let n = -1;
  const o = t.length;
  let s = t[o - 1], l, c, i = s[0], u = s[1], x = 0;
  for (; ++n < o; )
    l = i, c = u, s = t[n], i = s[0], u = s[1], l -= i, c -= u, x += Math.hypot(l, c);
  return x;
}
function Sn(t, n = 2) {
  const o = Math.abs(kn(t)), s = Cn(t), l = o * n / s, c = [];
  for (const [f, a] of t.entries()) {
    const h = t.at((f - 1) % 4), b = t.at((f + 1) % 4), p = a[0] - h[0], y = a[1] - h[1], m = Math.sqrt(p ** 2 + y ** 2), w = p / m * l, M = y / m * l, I = a[0] - b[0], N = a[1] - b[1], B = Math.sqrt(I ** 2 + N ** 2), D = I / B * l, _ = N / B * l;
    c.push([a[0] + w + D, a[1] + M + _]);
  }
  const i = [c[0][0] - c[1][0], c[0][1] - c[1][1]], u = [c[2][0] - c[1][0], c[2][1] - c[1][1]], x = i[0] * u[1] - i[1] * u[0];
  return { points: c, sside: Math.abs(x) };
}
function Nn(t, n, o, s, l) {
  let c = 1 / 0, i = -1 / 0, u = 1 / 0, x = -1 / 0;
  for (const M of s)
    c = Math.min(c, M[0]), i = Math.max(i, M[0]), u = Math.min(u, M[1]), x = Math.max(x, M[1]);
  const f = (i - c) * (l - 1) * 0.5, a = (x - u) * (l - 1) * 0.5, h = Math.max(0, Math.floor(c - f)), b = Math.min(n - 1, Math.ceil(i + f)), p = Math.max(0, Math.floor(u - a)), y = Math.min(o - 1, Math.ceil(x + a));
  let m = 0;
  const w = (b - h + 1) * (y - p + 1);
  for (let M = p; M <= y; M++)
    for (let I = h; I <= b; I++)
      m += t[M * n + I];
  return w > 0 ? m / w : 0;
}
function _n(t, n, o) {
  const s = n.width, l = n.height, c = o * Math.PI / 180, i = Math.cos(c), u = Math.sin(c), x = t.x, f = t.y, a = s * 0.5, h = l * 0.5, b = [], p = x - a * i + h * u, y = f - a * u - h * i;
  b.push([p, y]);
  const m = x + a * i + h * u, w = f + a * u - h * i;
  b.push([m, w]);
  const M = x + a * i - h * u, I = f + a * u + h * i;
  b.push([M, I]);
  const N = x - a * i - h * u, B = f - a * u + h * i;
  return b.push([N, B]), b;
}
function Bn(t) {
  const o = sn(t), s = Array.from(_n(o.center, o.size, o.angle)).sort(
    (a, h) => a[0] - h[0]
  );
  let l = 0, c = 1, i = 2, u = 3;
  s[1][1] > s[0][1] ? (l = 0, u = 1) : (l = 1, u = 0), s[3][1] > s[2][1] ? (c = 2, i = 3) : (c = 3, i = 2);
  const x = [s[l], s[c], s[i], s[u]], f = Math.min(o.size.height, o.size.width);
  return { points: x, sside: f };
}
function Yt(t, n) {
  return Math.sqrt((t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2);
}
function vn(t) {
  const n = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
  ], o = t.map((c) => c[0] + c[1]);
  n[0] = t[o.indexOf(Math.min(...o))], n[2] = t[o.indexOf(Math.max(...o))];
  const s = t.filter((c) => c !== n[0] && c !== n[2]), l = s[1].map((c, i) => c - s[0][i]);
  return n[1] = s[l.indexOf(Math.min(...l))], n[3] = s[l.indexOf(Math.max(...l))], n;
}
function Dn(t, n) {
  const [o, s, l, c] = n.map((_) => ({ x: _[0], y: _[1] })), i = Math.sqrt((s.x - o.x) ** 2 + (s.y - o.y) ** 2), u = Math.sqrt((c.x - o.x) ** 2 + (c.y - o.y) ** 2), x = s.x - o.x, f = s.y - o.y, a = c.x - o.x, h = c.y - o.y, b = x * h - a * f;
  if (b === 0) throw new Error("点共线，无法形成矩形");
  const p = i * h / b, y = -a * i / b, m = -u * f / b, w = x * u / b, M = -p * o.x - y * o.y, I = -m * o.x - w * o.y, N = K(t), B = it(Math.ceil(i), Math.ceil(u)), D = B.getContext("2d");
  return D.setTransform(p, m, y, w, M, I), D.drawImage(N, 0, 0), D.resetTransform(), D.getImageData(0, 0, B.width, B.height);
}
function Tn(t) {
  var x, f;
  const n = /* @__PURE__ */ new Map(), o = t.data;
  for (let a = 0; a < o.length; a += 4) {
    if (a / 4 % t.width > t.height * 4) continue;
    const b = o[a], p = o[a + 1], y = o[a + 2], m = [b, p, y].join(",");
    n.set(m, (n.get(m) || 0) + 1);
  }
  const s = Pn(n, 20).map((a) => ({
    el: a.el.split(",").map(Number),
    count: a.count
  })), l = ((x = s.at(0)) == null ? void 0 : x.el) || [255, 255, 255], c = ((f = s.at(1)) == null ? void 0 : f.el) || [0, 0, 0];
  let i = c;
  const u = 100;
  if (xt(c, l) < u) {
    const a = s.slice(1).filter((h) => xt(h.el, l) > 50);
    a.length > 0 && (i = [0, 1, 2].map(
      (h) => Math.round(qt(a.map((b) => [b.el[h], b.count])))
    )), (a.length === 0 || xt(i, l) < u) && (i = l.map((h) => 255 - h)), fn(`rgb(${i.join(",")})`);
  }
  return {
    bg: l,
    text: i,
    textEdge: c
  };
}
function xt(t, n) {
  const o = t, s = n;
  return Math.sqrt((o[0] - s[0]) ** 2 + (o[1] - s[1]) ** 2 + (o[2] - s[2]) ** 2);
}
function Pn(t, n = 1) {
  let o = [];
  return t.forEach((s, l) => {
    o.length === 0 ? o.push({ el: l, count: s }) : (o.length < n ? o.push({ el: l, count: s }) : o.find((c) => c.count <= s) && o.push({ el: l, count: s }), o.sort((c, i) => i.count - c.count), o.length > n && (o = o.slice(0, n)));
  }), o;
}
function En(t, n, o) {
  let s = 0, l = n.height, c = 0, i = n.width;
  function u(p) {
    return xt(p, o) < 200;
  }
  t: for (let p = s; p < n.height; p++)
    for (let y = 0; y < n.width; y++) {
      const m = dt(n, y, p);
      if (u(m)) {
        s = p;
        break t;
      }
    }
  t: for (let p = l - 1; p >= 0; p--)
    for (let y = 0; y < n.width; y++) {
      const m = dt(n, y, p);
      if (u(m)) {
        l = p;
        break t;
      }
    }
  t: for (let p = c; p < n.width; p++)
    for (let y = s; y <= l; y++) {
      const m = dt(n, p, y);
      if (u(m)) {
        c = p;
        break t;
      }
    }
  t: for (let p = i - 1; p >= 0; p--)
    for (let y = s; y <= l; y++) {
      const m = dt(n, p, y);
      if (u(m)) {
        i = p;
        break t;
      }
    }
  const x = nt(s - 1, 0, 4), f = nt(n.height - l - 1, 0, 4), a = nt(c - 1, 0, 4), h = nt(n.width - i - 1, 0, 4);
  return [
    [t[0][0] + a, t[0][1] + x],
    [t[1][0] - h, t[1][1] + x],
    [t[2][0] - h, t[2][1] - f],
    [t[3][0] + a, t[3][1] - f]
  ];
}
function dt(t, n, o) {
  const s = (o * t.width + n) * 4;
  return Array.from(t.data.slice(s, s + 4));
}
function zn(t, n) {
  const o = [];
  function s(l) {
    const c = Math.floor(n * (l.width / l.height)), i = Nt(l, c, n, void 0, !1);
    return V && rt(K(i, c, n)), { data: i, w: c, h: n };
  }
  for (const l of t) {
    let c = l.img;
    c.width < c.height && (c = Wt(c, -90));
    const i = s(c);
    o.push({ b: _t(i.data, [0.5, 0.5, 0.5], [0.5, 0.5, 0.5]), imgH: i.h, imgW: i.w });
  }
  return A(o), o;
}
function An(t, n, o) {
  const s = t.dims[2], l = [];
  let c = t.dims[0] - 1;
  const i = o.topK, u = o.threshold;
  function x(a) {
    return n.at(a - 1) ?? "";
  }
  for (let a = 0; a < t.data.length; a += s * t.dims[1]) {
    const h = [];
    for (let b = a; b < a + s * t.dims[1]; b += s) {
      const p = t.data.slice(b, b + s), y = [];
      for (let m = 0; m < p.length; m++) {
        const w = p[m];
        if (!(w < u)) {
          if (!(y.length === i && w <= y.at(-1).v)) {
            const M = y.findIndex((I) => I.v > w);
            M === -1 ? y.unshift({ t: m, v: w }) : y.splice(M + 1, 0, { t: m, v: w });
          }
          y.length > i && y.pop();
        }
      }
      h.push(y);
    }
    l[c] = f(h), c--;
  }
  function f(a) {
    const h = [];
    for (let b = 0; b < a.length; b++)
      a[b][0].t !== 0 && (b > 0 && a[b - 1][0].t === a[b][0].t || h.push(a[b].map((p) => ({ t: x(p.t), mean: p.v }))));
    return h;
  }
  return l;
}
function On(t, n) {
  var Ot;
  A(t);
  const o = (n == null ? void 0 : n.docDirs) ?? [
    { block: "tb", inline: "lr" },
    { block: "rl", inline: "tb" }
  ], s = { block: "tb", inline: "lr" }, l = {
    inline: [1, 0],
    block: [0, 1]
  }, c = {
    inline: [1, 0],
    block: [0, 1]
  };
  if (t.length === 0)
    return {
      columns: [],
      parragraphs: [],
      readingDir: s,
      angle: { reading: { inline: 0, block: 90 }, angle: 0 }
    };
  const i = [
    {
      box: [
        [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
        [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
        [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]
      ],
      type: "none"
    }
  ], u = 0;
  function x(e) {
    const r = a.center(e);
    for (let d = i.length - 1; d >= 0; d--) {
      const k = i[d].box;
      if (r[0] >= k[0][0] && r[0] <= k[1][0] && r[1] >= k[0][1] && r[1] <= k[3][1])
        return d;
    }
    return u;
  }
  const f = {
    center: (e, r) => [(e[0] + r[0]) / 2, (e[1] + r[1]) / 2],
    disByV: (e, r, d) => Math.abs(d === "block" ? h.dotMup(e, c.block) - h.dotMup(r, c.block) : h.dotMup(e, c.inline) - h.dotMup(r, c.inline)),
    compare: (e, r, d) => d === "block" ? h.dotMup(e, c.block) - h.dotMup(r, c.block) : h.dotMup(e, c.inline) - h.dotMup(r, c.inline),
    toInline: (e) => h.dotMup(e, c.inline),
    toBlock: (e) => h.dotMup(e, c.block)
  }, a = {
    inlineStart: (e) => f.center(e[0], e[3]),
    inlineEnd: (e) => f.center(e[1], e[2]),
    blockStart: (e) => f.center(e[0], e[1]),
    blockEnd: (e) => f.center(e[2], e[3]),
    inlineSize: (e) => e[1][0] - e[0][0],
    blockSize: (e) => e[3][1] - e[0][1],
    inlineStartDis: (e, r) => f.disByV(e[0], r[0], "inline"),
    inlineEndDis: (e, r) => f.disByV(e[1], r[1], "inline"),
    blockGap: (e, r) => f.disByV(e[0], r[3], "block"),
    inlineCenter: (e) => (e[2][0] + e[0][0]) / 2,
    blockCenter: (e) => (e[2][1] + e[0][1]) / 2,
    inlineStartCenter: (e) => a.inlineStart(e),
    center: (e) => f.center(e[0], e[2])
  }, h = {
    fromPonts: (e, r) => [e[0] - r[0], e[1] - r[1]],
    dotMup: (e, r) => e[0] * r[0] + e[1] * r[1],
    numMup: (e, r) => [e[0] * r, e[1] * r],
    add: (e, r) => [e[0] + r[0], e[1] + r[1]]
  };
  function b(e) {
    let r = 0, d = 0;
    const g = [];
    for (const [k, C] of e.entries()) {
      const S = C > 180 ? C - 180 : C, T = S - 180, E = k === 0 ? S : Math.abs(T - r) < Math.abs(S - r) ? T : S;
      g.push(E), r = (r * d + E) / (d + 1), d++;
    }
    return { av: r, l: g };
  }
  function p(e, r) {
    return Math.abs(e - r) < 45 || Math.abs(e - (r - 180)) < 45 || Math.abs(e - 180 - r) < 45;
  }
  function y(e) {
    e.sort((d, g) => d - g);
    const r = Math.floor(e.length / 2);
    return e.length % 2 === 0 ? (e[r - 1] + e[r]) / 2 : e[r];
  }
  function m(e) {
    return e === "lr" || e === "rl" ? "x" : "y";
  }
  function w(e, r) {
    let d = Number.POSITIVE_INFINITY, g = -1;
    for (let k = 0; k < e.length; k++) {
      const C = r(e[k]);
      C < d && (d = C, g = k);
    }
    return e[g];
  }
  const M = {
    lr: [1, 0],
    rl: [-1, 0],
    tb: [0, 1],
    bt: [0, -1]
  };
  function I(e, r) {
    const d = M[e.inline], g = M[e.block], k = M[r.inline], C = M[r.block], S = [h.dotMup(k, d), h.dotMup(k, g)], T = [h.dotMup(C, d), h.dotMup(C, g)];
    return (E) => [h.dotMup(E, S), h.dotMup(E, T)];
  }
  function N(e, r) {
    const d = I(e, r);
    return {
      b: (g) => {
        for (const k of g) {
          const [C, S] = d(k);
          k[0] = C, k[1] = S;
        }
      },
      p: d
    };
  }
  function B(e) {
    return (r) => {
      const d = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ];
      for (let g = 0; g < e.length; g++)
        d[g] = r[e[g]];
      return d;
    };
  }
  function D(e, r) {
    return Math.sqrt((e[0] - r[0]) ** 2 + (e[1] - r[1]) ** 2);
  }
  function _(e) {
    const r = e.flatMap((P) => P.map((v) => v)), d = Math.min(...r.map((P) => h.dotMup(P, c.inline))), g = Math.max(...r.map((P) => h.dotMup(P, c.inline))), k = Math.min(...r.map((P) => h.dotMup(P, c.block))), C = Math.max(...r.map((P) => h.dotMup(P, c.block))), S = h.add(h.numMup(c.inline, d), h.numMup(c.block, k)), T = h.numMup(c.inline, g - d), E = h.numMup(c.block, C - k);
    return [S, h.add(S, T), h.add(h.add(S, T), E), h.add(S, E)];
  }
  function F(e) {
    let r = null, d = Number.POSITIVE_INFINITY;
    for (const E in W) {
      const P = W[E].src.at(-1);
      if (!P) continue;
      const v = D(e.box[0], P.box[0]);
      v < d && (r = Number(E), d = v);
    }
    if (r === null) {
      W.push({ src: [e] });
      return;
    }
    const g = W[r].src.at(-1), k = a.inlineSize(e.box), C = a.inlineSize(g.box), S = Math.min(k, C), T = a.blockSize(e.box);
    if (
      // 左右至少有一边是相近的，中心距离要相近
      // 行之间也不要离太远
      !((a.inlineStartDis(e.box, g.box) < 3 * T || a.inlineEndDis(e.box, g.box) < 3 * T || f.disByV(a.center(e.box), a.center(g.box), "inline") < S * 0.4) && a.blockGap(e.box, g.box) < T * 1.1)
    ) {
      W.push({ src: [e] });
      return;
    }
    W[r].src.push(e);
  }
  function Y(e) {
    var k, C;
    const r = new RegExp("\\p{Ideographic}", "u"), d = /[。，！？；：“”‘’《》、【】（）…—]/, g = {
      box: _(e.map((S) => S.box)),
      text: "",
      mean: qt(e.map((S) => [S.mean, S.text.length])),
      style: e[0].style
    };
    for (const S of e) {
      const T = g.text.at(-1);
      T && (!T.match(r) && !T.match(d) || !((k = S.text.at(0)) != null && k.match(r)) && !((C = S.text.at(0)) != null && C.match(d))) && (g.text += " "), g.text += S.text;
    }
    return g;
  }
  function at(e) {
    e.sort((r, d) => {
      const g = r.src.at(0) ? a.blockSize(r.src.at(0).box) : 2;
      return f.disByV(a.blockStart(r.outerBox), a.blockStart(d.outerBox), "block") < g ? f.compare(a.inlineStart(r.outerBox), a.inlineStart(d.outerBox), "inline") : f.compare(a.blockStart(r.outerBox), a.blockStart(d.outerBox), "block");
    });
  }
  if (n != null && n.columnsTip)
    for (const e of n.columnsTip) i.push(structuredClone(e));
  const z = {
    inline: 0,
    block: 90
  }, j = t.map((e) => {
    const r = e.box, d = r[1][0] - r[0][0], g = r[3][1] - r[0][1];
    let k = { x: 0, y: 0 };
    if (d < g) {
      const S = h.fromPonts(f.center(r[2], r[3]), f.center(r[0], r[1]));
      k = { x: S[0], y: S[1] };
    } else {
      const S = h.fromPonts(f.center(r[1], r[2]), f.center(r[0], r[3]));
      k = { x: S[0], y: S[1] };
    }
    return mt(Math.atan2(k.y, k.x) * (180 / Math.PI));
  }), lt = b(j), U = j.filter((e) => p(e, lt.av)), yt = y(U), et = y(U.map((e) => Math.abs(e - yt))), ut = U.filter((e) => Math.abs((e - yt) / (et * 1.4826)) < 2), O = mt(b(ut).av);
  A("dir0", j, lt, U, ut, O);
  const H = mt(O + 90), R = p(O, 0) ? "x" : "y", Xt = p(H, 90) ? "y" : "x", pt = o.find((e) => R === m(e.inline) && Xt === m(e.block)) ?? o.at(0);
  pt && (s.block = pt.block, s.inline = pt.inline);
  const Tt = {
    lr: 0,
    rl: 180,
    tb: 90,
    bt: 270
  };
  z.inline = w(
    [O, O - 360, O - 180, O + 180],
    (e) => Math.abs(e - Tt[s.inline])
  ), z.block = w(
    [H, H - 360, H - 180, H + 180],
    (e) => Math.abs(e - Tt[s.block])
  ), l.inline = [Math.cos(z.inline * (Math.PI / 180)), Math.sin(z.inline * (Math.PI / 180))], l.block = [Math.cos(z.block * (Math.PI / 180)), Math.sin(z.block * (Math.PI / 180))], A("dir", s, z, l, O, H);
  const Pt = [
    [s.inline[0], s.block[0]],
    [s.inline[1], s.block[0]],
    [s.inline[1], s.block[1]],
    [s.inline[0], s.block[1]]
  ].map(
    ([e, r]) => ({
      lt: 0,
      rt: 1,
      rb: 2,
      lb: 3
    })[e === "l" || e === "r" ? e + r : r + e]
  ), ht = N({ inline: "lr", block: "tb" }, s), Et = B(Pt), $t = t.map((e) => {
    const r = Et(e.box);
    return ht.b(r), {
      ...e,
      box: r
    };
  });
  for (const e of i)
    e.box = Et(e.box), ht.b(e.box);
  c.inline = ht.p(l.inline), c.block = ht.p(l.block), A("相对坐标系", c);
  const Kt = $t.sort((e, r) => f.compare(a.blockStart(e.box), a.blockStart(r.box), "block")), Q = [];
  for (const e of Kt) {
    const r = x(e.box), d = (Ot = Q.at(-1)) == null ? void 0 : Ot.line.at(-1);
    if (!d) {
      Q.push({ line: [{ src: e, colId: r }] });
      continue;
    }
    const g = a.center(e.box), k = a.center(d.src.box);
    if (f.disByV(g, k, "block") < 0.5 * a.blockSize(e.box)) {
      const C = Q.at(-1);
      C ? C.line.push({ src: e, colId: r }) : Q.push({ line: [{ src: e, colId: r }] });
    } else
      Q.push({ line: [{ src: e, colId: r }] });
  }
  const ft = [];
  for (const e of Q) {
    if (e.line.length === 1) {
      ft.push({ src: e.line[0].src, colId: e.line[0].colId });
      continue;
    }
    const r = St(e.line.map((g) => a.blockSize(g.src.box)));
    e.line.sort((g, k) => f.compare(a.inlineStart(g.src.box), a.inlineStart(k.src.box), "inline"));
    let d = e.line.at(0);
    for (const g of e.line.slice(1)) {
      const k = a.inlineEnd(d.src.box), C = a.inlineStart(g.src.box);
      i[g.colId].type === "table" || g.colId !== d.colId || f.toInline(C) - f.toInline(k) > r ? (ft.push({ ...d }), d = g) : (d.src.text += g.src.text, d.src.mean = (d.src.mean + g.src.mean) / 2, d.src.box = _([d.src.box, g.src.box]));
    }
    ft.push({ ...d });
  }
  const W = [], It = [], ot = [];
  for (const e of ft)
    if (e.colId === u)
      It.push(e);
    else {
      const r = ot.find((d) => d.colId === e.colId);
      r ? r.src.push(e.src) : ot.push({ src: [e.src], type: i[e.colId].type, colId: e.colId });
    }
  It.sort((e, r) => f.compare(a.blockStart(e.src.box), a.blockStart(r.src.box), "block"));
  for (const e of It)
    F(e.src);
  const st = [];
  for (const [e, r] of W.entries()) {
    const d = r.src, g = _(d.map((T) => T.box)), k = a.blockCenter(g), C = a.inlineSize(g);
    if (e === 0) {
      st.push({ smallCol: [{ src: d, outerBox: g, x: k, w: C }] });
      continue;
    }
    const S = st.find((T) => {
      const E = T.smallCol.at(-1), P = a.blockSize(d.at(0).box);
      return a.inlineStartDis(E.outerBox, g) < 3 * P && a.inlineEndDis(E.outerBox, g) < 3 * P && a.blockGap(g, E.outerBox) < P * 2.1;
    });
    S ? S.smallCol.push({ src: d, outerBox: g, x: k, w: C }) : st.push({ smallCol: [{ src: d, outerBox: g, x: k, w: C }] });
  }
  for (const e of st)
    e.smallCol.sort((r, d) => f.compare(a.blockStart(r.outerBox), a.blockStart(d.outerBox), "block"));
  for (const e of ot)
    e.src.sort((r, d) => f.compare(a.blockStart(r.box), a.blockStart(d.box), "block"));
  const wt = [];
  for (const e of st) {
    const r = _(e.smallCol.map((g) => g.outerBox)), d = e.smallCol.flatMap((g) => g.src);
    wt.push({ src: d, outerBox: r, type: "none" });
  }
  at(wt);
  const ct = [];
  for (const e of wt) {
    const r = ct.at(-1);
    if (!r) {
      ct.push(e);
      continue;
    }
    if (r.type !== "none") {
      ct.push(e);
      continue;
    }
    const d = r.outerBox, g = a.blockSize(e.src[0].box);
    r.src.length === 1 && a.inlineStartDis(d, e.outerBox) < 3 * g || // 标题
    e.src.length === 1 && a.inlineStartDis(d, e.outerBox) < 3 * g || // 末尾
    a.inlineStartDis(d, e.outerBox) < 3 * g && a.inlineEndDis(d, e.outerBox) < 3 * g ? (r.src.push(...e.src), r.outerBox = _(r.src.map((k) => k.box))) : ct.push(e);
  }
  let Mt = !1;
  const X = [];
  for (const e of ct) {
    const r = X.at(-1), d = { ...e, reCal: !1 };
    if (!r) {
      X.push(d);
      continue;
    }
    const g = a.blockSize(d.src.at(0).box);
    f.compare(a.blockEnd(d.outerBox), a.blockEnd(r.outerBox), "block") < 0 && (a.inlineStartDis(r.outerBox, d.outerBox) < 3 * g || a.inlineEndDis(r.outerBox, d.outerBox) < 3 * g) ? (r.src.push(...d.src), r.reCal = !0, Mt = !0) : X.push(d);
  }
  for (const e of X)
    e.reCal && (e.src.sort((r, d) => f.compare(a.blockStart(r.box), a.blockStart(d.box), "block")), e.outerBox = _(e.src.map((r) => r.box)));
  ot.length && (Mt = !0);
  for (const e of ot) {
    const r = _(e.src.map((g) => g.box)), d = e.src;
    X.push({ src: d, outerBox: r, type: e.type, reCal: !1 });
  }
  Mt && at(X);
  const zt = N(s, { inline: "lr", block: "tb" }), At = X.map((e) => {
    const r = e.src, d = [];
    if (e.type === "auto" || e.type === "none") {
      const C = {};
      for (let v = 1; v < r.length; v++) {
        const L = r[v - 1].box, J = r[v].box, tt = f.disByV(a.center(J), a.center(L), "block");
        C[tt] || (C[tt] = 0), C[tt]++;
      }
      const S = St(r.map((v) => a.blockSize(v.box))), T = [[]];
      for (const v of Object.keys(C).map((L) => Number(L)).sort()) {
        const L = T.at(-1), J = L.at(-1);
        J !== void 0 ? Math.abs(J - v) < S * 0.5 ? L.push(v) : T.push([]) : L.push(v);
      }
      const E = T.map((v) => St(v)).sort((v, L) => v - L).at(0) || 0;
      A("d", C, T, E), d.push([r[0]]);
      let P = r[0];
      for (let v = 1; v < r.length; v++) {
        const L = h.add(
          h.add(a.inlineStartCenter(P.box), h.numMup(c.block, E)),
          h.numMup(c.inline, -a.inlineStartDis(P.box, e.outerBox))
        ), J = a.inlineStartCenter(r[v].box), tt = a.blockSize(r[v].box);
        if (a.inlineEndDis(P.box, e.outerBox) > 2 * tt || D(L, J) > tt * 0.5)
          d.push([r[v]]);
        else {
          const Rt = d.at(-1);
          Rt ? Rt.push(r[v]) : d.push([r[v]]);
        }
        P = r[v];
      }
    } else (e.type === "table" || e.type === "raw" || e.type === "raw-blank") && d.push(r);
    for (const C of r) zt.b(C.box);
    zt.b(e.outerBox);
    const g = [];
    for (const [C, S] of Pt.entries())
      g[S] = C;
    const k = B(g);
    for (const C of r)
      C.box = k(C.box);
    return e.outerBox = k(e.outerBox), A(d), {
      src: r,
      outerBox: e.outerBox,
      parragraphs: d.map((C) => ({ src: C, parse: Y(C) }))
    };
  }), Ut = At.flatMap((e) => e.parragraphs.map((r) => r.parse));
  let Z = 0;
  return s.inline === "lr" && (Z = z.inline), s.inline === "rl" && (Z = z.inline - 180), s.block === "lr" && (Z = z.block), s.block === "rl" && (Z = z.block - 180), A("angle", Z), {
    columns: At,
    parragraphs: Ut,
    readingDir: s,
    angle: { reading: z, angle: Z }
  };
}
function St(t) {
  return t.reduce((n, o) => n + o, 0) / t.length;
}
function qt(t) {
  const n = t.map((s) => s[1]).reduce((s, l) => s + l, 0);
  let o = 0;
  for (const s of t)
    o += s[0] * s[1] / n;
  return o;
}
function mt(t) {
  return (t % 360 + 360) % 360;
}
function Wt(t, n) {
  const o = mt(n);
  if (o === 0) return t;
  if (![90, 180, 270].includes(o)) throw new Error("只支持90度的旋转");
  const s = new Uint8ClampedArray(t.height * t.width * 4);
  for (let i = 0; i < t.height; i++)
    for (let u = 0; u < t.width; u++) {
      const x = i * t.width + u, f = o === 90 ? u * t.height + (t.height - i - 1) : o === 180 ? t.width - u - 1 + (t.height - i - 1) * t.width : (t.width - u - 1) * t.height + i;
      s.set(t.data.slice(x * 4, x * 4 + 4), f * 4);
    }
  const l = o === 90 || o === 270 ? t.height : t.width, c = o === 90 || o === 270 ? t.width : t.height;
  return bt(s, l, c);
}
function Rn(t, n = "", o, s, l) {
  if (!V) return;
  const i = document.querySelector(`#${s}`).getContext("2d");
  i.beginPath(), i.strokeStyle = o, i.moveTo(t[0][0], t[0][1]), i.lineTo(t[1][0], t[1][1]), i.lineTo(t[2][0], t[2][1]), i.lineTo(t[3][0], t[3][1]), i.lineTo(t[0][0], t[0][1]), i.stroke(), i.strokeStyle = "black", i.strokeText(n, t[0][0], t[0][1]);
}
export {
  On as analyzeLayout,
  jn as det,
  Fn as init,
  gn as initDet,
  mn as initDocDirCls,
  yn as initRec,
  Ft as loadImg,
  Yn as ocr,
  Gn as rec,
  Hn as recognize,
  Wt as rotateImg,
  dn as setOCREnv,
  bn as warpDet
};
