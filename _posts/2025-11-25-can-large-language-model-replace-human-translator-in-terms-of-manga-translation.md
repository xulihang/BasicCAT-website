---
date: 2025-11-25 21:20:50+08:00
layout: post
title: Can Large Language Model Replace Human Translator in Manga Translation?
categories: blog
tags: imagetrans
---

<style>
.post-content table {
  width: auto;
}
</style>


Can large language models replace human translators in the field of manga translation? Let’s take the following *Ranma 1/2* manga as an example to compare translations by large language models and human translators. We compared online large language models such as ChatGPT, Claude, and Gemini, offline large language models like Sakura and Qwen, and traditional machine translation engines such as Google, Baidu and Caiyun.

![original](/album/imagetrans-language-learning/Ranma1_012.jpg)


Comparison table (Japanese to Chinese):

| Translator | 1. 破っ!! | 2. あー、 | 3. 調子いい。 | 4. まーたあかねはー。 | 5. んなことばっかやってるからまともにモテないのよ。 | 6. よけーなお世話よ。 | 7. あたしはおねーちゃんと違って男なんか、 | 8. 大っ嫌いなの。 | 9. ふーん、 | 10. じゃーこの話あんたにゃ関係ないか。 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Human (Hongkong) | 嘿！ | 嘘！ | 厉害吧。 | 小茜。 | 这玩意不适合女孩子玩。 | 多谢关心了。 | 我和你不同。 | 我最讨厌男孩子！ | 唔！ | 那这事和你一点关系也没有了…… |
| Human (Bilibili) | 哈！ | 呼！ | 状态不错。 | 小茜你又在练这个。 | 老干这种事，可是交不到男朋友的哦。 | 要你管。 | 我跟姐姐你不一样，我最讨厌的就是。 | 男孩子了！ | 呵呵。 | 那这事就和你没关系了吧。 |
| Human (op) | 哈！ | 呼， | 状态不错。 | 小茜，你又在这里训练… | 总是做这种事，可要找不到对象噢。 | 不用你管。 | 我和姐姐不一样，我最讨厌的 | 就是男生。 | 这样啊… | 那这件事和你就没关系了。 |
| baidu | 打破！！ | 啊 | 状态很好。 | 啊，茜啊。 | 因为只做这样的事，所以不受欢迎。 | 少管闲事。 | 我和姐姐不一样，男人什么的 | 最讨厌了。 | 嗯 | 那么这件事和你没关系吗。 |
| chatgpt-gpt4o | 分裂！！   | 啊—   | 状态不错。   | 又是茜。   | 就是因为老干这些事情，才不会真正受欢迎。   | 不用你多管闲事。   | 我可不像姐姐那样，   | 最讨厌男人了。   | 哦，   | 那这件事就跟你没关系了。 |
| claude-4.5-sonnet | 破！！ | 啊— | 感觉不错。 | 茜又来了— | 就是因为老做这种事才没人喜欢你。 | 多管闲事。 | 我和姐姐不一样， | 我最讨厌男人了。 | 哦— | 那这件事跟你没关系了。 |
| caiyun | 突破！！ | 啊 —— | 状态不错。 | 又见面了，茜。 | 就是因为总是做这种事，所以才不受欢迎啊。 | 多管闲事啊。 | 我和姐姐不一样，对男人什么的， | 最讨厌了。 | 嗯 —— | 那么，这件事跟你没关系吗？ |
| deepseek-chat-v3.2 | 破っ!! | 啊—— | 状态不错。 | 真是的 小红又这样。 | 你总干这种事所以才不受欢迎啊。 | 多管闲事。 | 我和姐姐不一样 对男人这种生物 | 最——讨厌了。 | 哼—— | 那这事就跟你没关系咯。 |
| gemini-2.5-flash | 打破!! | 啊， | 状态很好。 | 茜又来了。 | 就是因为老做这种事才没人喜欢你。 | 多管闲事。 | 我可不像姐姐，对男人什么的， | 最讨厌了。 | 哦， | 那这件事就和你没关系咯。 |
| google | 打破它！！ | 啊， | 我感觉很好。 | 又是茜。 | 这就是你永远不会真正受欢迎的原因。 | 那不关你的事。 | 与我姐姐不同，我不喜欢男生。 | 我恨它。 | 唔， | 所以这个故事与你无关。 |
| gpt-oss-120b | 破!!   | 啊，   | 状态不错。   | 又是あかね啊——。   | 因为只会干那种事，根本不受人喜欢。   | 真是多管闲事啊。   | 我和姐姐不同，男人这种东西，   | 非常讨厌。   | 哼，   | 那么这件事跟你没关系吧。 |
| gpt-oss-20b | 破了!! | 啊， | 状态很好。 | 又是阿卡ネ啊。 | 因为只做那种事，根本没法正常受欢迎呢。 | 真麻烦的照顾啊。 | 我和姐姐不同，男人之类的， | 非常讨厌。 | 嗯， | 那这事跟你没关系吧。 |
| qwen3-235b | 破了！！ | 啊——， | 状态不错。 | 又在搞那个红呢。 | 净做这种事，难怪一点都吸引不了别人。 | 少管闲事。 | 我和姐姐可不一样，对男人什么的， | 最讨厌了。 | 哦——， | 那这事跟你没关系了。 |
| qwen3-8b | 破了！   | 啊——   | 气势不错。   | 好吧，我又输了。   | 你老是这么说话，怎么能吸引到正常的人呢。   | 你可真是个麻烦人物。   | 我跟那个姐姐不一样，我一点都不喜欢男人，   | 非常讨厌。   | 哦——   | 所以这个故事跟你无关对吧。 |
| sakura-14b | 破！！ | 啊—— | 真是的。 | 又来了。 | 就是成天搞这种事才会没有异性缘哦。 | 真是多管闲事。 | 我和姐姐不一样，最讨厌男生了。 | 大家都一个样。 | 嗯—— | 那这事和你没关系了。 |
| sakura-7b | 破！！ | 啊—— | 遵命。 | 又来了啊。 | 就是因为整天做这种事，所以才不受欢迎。 | 多管闲事。 | 我和姐姐不一样， | 最讨厌男生了。 | 哦—— | 那这件事和你无关。 |


Comparison table (Japanese to English):



| Translator | 1. 破っ!! | 2. あー、 | 3. 調子いい。 | 4. まーたあかねはー。 | 5. んなことばっかやってるからまともにモテないのよ。 | 6. よけーなお世話よ。 | 7. あたしはおねーちゃんと違って男なんか、 | 8. 大っ嫌いなの。 | 9. ふーん、 | 10. じゃーこの話あんたにゃ関係ないか。 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Human (vizmedia) | Hyaah! | Ahh！ | That was nice. | There you go again, Akane. | No wonder the boys all think you're so weird. | So why should I care? | Not everybody thinks the world revolves around boys, Nabiki. | Especially not me. | No? | Then I guess this would't interest you. |
| Human (op) | Yack… | Gasp… | Good. | Akane, you are training again… | It won’t help you with boys. | It is none of your business. | I am different from you… | I hate boys. | If so… | it has nothing to do with you. |
| baidu | Break! | Ah | Good condition. | Akane Akane. | Because I'm doing things like that, I'm really moody. | Good luck! | I'm quite different from a man | I hate you. | HMM | Why don't you have this story? |
| chatgpt-gpt4o | Broke!! | Ah, | I'm feeling good. | There goes Akane again. | That's why you never genuinely attract anyone, because you're always doing stuff like that. | None of your business. | Unlike you, big sis, I | absolutely hate guys. | Hmm, | so this has nothing to do with you then. |
| claude-4.5-sonnet | Hya!! | Ah, | I feel great. | There goes Akane again. | That's why you can't get a boyfriend acting like that. | Mind your own business. | Unlike you, sis, I | absolutely hate boys. | Hmm, | then this doesn't concern you. |
| caiyun | Break!! | Ah, | she‘s in good shape. | Well, Akane. | I‘m not really popular because I do all these things. | You‘re being too kind. | I‘m different from onee-chan, I’m not a man. | I really hate them. | Hmm. | Then this story has nothing to do with you? |
| deepseek-chat-v3.2 | Break!! | Ahh, | Feeling good. | Maa, Akane is… | That's why you keep doing things like that and can't get a proper boyfriend. | Mind your own business. | Unlike you, sis, I hate men, | I really hate them. | Hmm, | Then this story has nothing to do with you. |
| gemini-2.5-flash | Smash!! | Ah, | I feel great. | Akane, again… | You're always doing things like that, no wonder you're not popular. | Mind your own business. | Unlike my sister, I don't care about guys, | Hate them! | Hmm, | Then this conversation has nothing to do with you. |
| google | Break it!! | ah, | I'm feeling good. | Akane again. | That's why you're never really popular. | That's none of your business. | Unlike my sister, I don't like guys. | I hate it. | Hmm, | So this story doesn't concern you. |
| gpt-oss-120b | Break!!   | Ah,   | Feeling good.   | There goes Akane again.   | Because you're always doing stuff like that, you never get any proper attention from the opposite sex.   | What a big help.   | Unlike my sister, I…   | I really hate men.   | Hmm,   | Well then, this story doesn’t concern you, does it? |
| gpt-oss-20b | Shattered!!   | Ah,   | I’m feeling good.   | Akane again.   | Because I keep doing things like that, I can’t attract anyone properly.   | You’re such a nuisance.   | Unlike my older sister, I don’t like men.   | I hate them.   | Hmm,   | So this story doesn’t concern you. |
| qwen3-235b | Break!! | Ah, | I'm feeling great. | Akane, again… | That's why you never get properly liked by anyone. | None of your business. | Unlike onee-chan, I hate guys, | I really hate them. | Huh, | Then this conversation has nothing to do with you. |
| qwen3-8b | Break!! | Ugh, | I'm in a good mood. | You're always so clumsy. | Because you keep doing such stupid things, you can't attract anyone properly. | You're really making things easy for me. | Unlike you, I don't like guys, | At all. | Hmmm, | Then this story has nothing to do with you. |

Through comparison, it can be observed that current large AI models still fall short of human translation when translating high-context languages like Japanese. Issues include incorrect pronouns, mistranslated names, poor coherence, and overly literal sentence structures that lack naturalness.

However, human translation also has its problems, such as translators over-interpreting or not adhering closely enough to the original text. This was more common before the emergence of high-quality machine translation. Nowadays, with the widespread adoption of machine translation post-editing, many human translators may directly use machine translation results, resulting in higher fidelity to the original text.

As for which large language model performs the best, it can be seen that the more parameters a model has, the better its quality tends to be. Some large language models, such as Sakura, are fine-tuned using Japanese-Chinese corpora. However, due to their smaller parameter amount, their translation performance remains suboptimal and is prone to hallucinations compared to larger lanuage models with more parameters. But their performance is usually better than general models with similar number of parameters.


Check out [ImageTrans](/imagetrans/), a computer-aided image translation tool, to complete manga translation with the help of various large language models.

