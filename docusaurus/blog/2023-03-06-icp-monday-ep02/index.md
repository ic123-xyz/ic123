---
slug: icp-dev-forum-ep02
title: ICP开发者研讨会EP02
authors: [herbert, vincent, beeling, paul, ben]
image: "./img/ep02.jpg"
tags: [icp monday, astrox, itoka, beosin, 8yeargangdao, eth, denver, security, domain, sns, icrc, decentralization, dns, ckbtc, motoko, web sockets, metabox, btc, node, eddsa]
---

231名 ICP 爱好者参加了第二次开发者研讨会。 DFINITY 亚太团队分享了近期社区活动和 R&D 工作的进展，并邀请AstroX的Brutoshi，Itoka的Malcolm来分享ETH丹佛大会的感受，Beosin的潘涛来分享代码审计中总结的经验，8年党的Million来分享部署定制化域名的经验。

<!--truncate-->

## 回顾

- 活动链接：[Twitter Spaces](https://twitter.com/i/spaces/1mrGmkejgYNxy?s=20)
- 参与人数：231
- 活动时长：130 分钟
- 嘉宾:
    - Brutoshi of AstroX
    - Malcolm Yang of Itoka
    - 潘涛 of Beosin
    - Million of 8yeargangDAO

## 音频回放

<iframe width="560" height="315" src="https://www.youtube.com/embed/DgUdWzyUryI?si=4xjpmPjSBTNiIgXn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 嘉宾分享

### ETH Denver的现场报道

- Brutoshi of AstroX
    - AstroX Me的Card
    - 现场见到人沟通很顺畅，虽然以前只是网络上交流
    - Jan的演讲 + Lomesh的圆桌效果很好
    - 很多观众知道DFINITY，但是对IC了解不多
    - 很多真正的开发者Builder，内容以技术为主
    - ETH Denver的小作文
    - ZK很火，WalletCon一票难求
    - Community Suggestion: It was great for the community to see DFINITY at ETH Denver, which provided an excellent opportunity to reach out to developers in other ecosystems. DFINITY shall make its presence felt at more such tech-focused industry events. DFINITY应该更多地走出去，参加这种行业活动
- Malcolm Yang of Itoka
    - OpenChat的token会否被CEX接受？
    - 为什么IC上没有稳定币？USDC/USDT
    - Jan的演讲，ETH的集成，SNS；很多开发者对ETH集成很感兴趣；还有SNS也引起了很多兴趣
    - 能否通过新的consensus做一个IC的L2，从而把AI的算力放在IC上来 … on-chain AI？
    - 很多来自AI的大佬，Anaconda的CEO Peter Wong，可以影响几百万的Python的用户。他想做Python的Web Assembly。
    - Community Suggestion: DFINITY’s booth at ETH Denver is too small for ICP’s L-1 blockchain status, especially in comparison to other L1s. It would be nice to give a bigger stage for the projects in the IC ecosystem to showcase their apps. 展位上无法体现ICP作为L1的地位，跟其他的公链对比显得很小，应该给生态里的项目公司提供更大的舞台
    - Need to follow up with Peter Wong, CEO of Anaconda, whom Malcolm Yang of Itoka had a good chat with at the event. Peter is taking an interest in IC and accepted an invitation from Malcolm to discuss “AI on IC” at a Twitter Spaces event. It would be good to have someone from DFINITY R&D team join this chat.

### Crypto公司需要注意的安全问题 

- @潘涛 of Beosin
- 主要问题：合约漏洞
- 业务逻辑的安全漏洞，很难通过AI审查发现，必须是人工
- 黑客在网络前端更换智能合约
- Telegram账号被盗，社会工程学的攻击
- 钓鱼网站，Beosin Alert
- IC的DID是安全的，OpenChat的体验很好
- Metamask盲签的风险
- Community Suggestion: IC startups shall start considering code audit reviews when they launch testnet. 测试网的阶段，适合开始代码审计
What can DFINITY do to support emerging startups in the IC ecosystem to do their code audit reviews? It could be costly for early-stage projects.

### 在IC上部署定制化域名的体验和经验

- Million of 8yeargangDAO
- 阿里云到IC的迁移， Soul Warrior
- 一开始，NGIX的转发，从阿里云转发到IC
- Cloudflare的配置跟DNS服务商不大一样
- 得把两个文件放在build的source文件夹里
- Community Suggestion: can the curl verification command be split into 3 steps? The current command performs 3 checks but a more progressive approach would help web developers identify issues earlier rather than at the end. 三步验证，可以把验证分切为三步.

## 社区活动回顾 & 预告

- OpenChat的SNS发售结果，raised $5.5M, through 2.3k buyers
- Recap of Justin Bons 的Twitter Spaces @Herbert Yang
- Huobi x Herbert, 3K 人在线
- Huobi x Paul, BTC生态的发展
- Beosin event，讨论NFT投资需要注意的问题，在Beosin的Twitter
- 巴塞罗那世界大会的活动 by Dom；IC希望跟移动运营商进行更多的合作。
- ETH Denver
- Rocklabs参加DFINITY R&D 例会做demo 3/15
- IC Lighthouse参加Public DFINITY R&D例会做demo 3/22

## R&D 路线图进展

### SNS

- SNS上线，以及OpenChat的发售还挺顺利，关于背后其实R&D做了很多事情：
- SNS Aggregator Canister是值得一提的一点
- 在NNS前端显示SNS项目的时候需要发起好几个requests
- 项目越多requests越多，而且分散在不同的canisters上
- R&D做了个Aggregator canister，将不会更新或很少更新的信息存放在里面
- 之后这个Canister的API也会开放给开发者
- NNS前端其它的一些负载改进
- 为退出登录的用户使用Query Calls
- 按需加载数据 + 数据缓存

### ICRC-2

- 加入授权转账功能
- 包括授权金额、授权有效期等
- 付款的时候更加灵活
- 另外授权的金额是累加的，如果想取消授权可以通过传入一个负值
- 可以避免ERC-20里面修改授权金额可能引起的两次转账的问题
- 标准还在讨论中，应该快要发起投票了，欢迎大家到WG参加讨论

### ICRC-3

- 在讨论中
- 请开发者多关注Working Group的讨论
- 每两周一次，北京时间晚上11点，周四还有一次
- 快速得到第一手咨询
- 施加影响力的最直接的方式

### DNS & Decentralization

- DNS本身就是非常中心化的，Dfinity一直尝试在做一些事情：
- 分布式的边缘节点架构，允许从多个域名访问IC
- Code of Conduct，某种程度上管理IC上一些不合规的内容，比如钓鱼等
- 支持自定义域名
- 把系统服务II和NNS迁移到internetcomputer.org，把系统服务和应用隔离开来
对用户来说如何迁移到新的域名

### ckBTC

- Dfinity Twitter Space by Manu
- Paul Twitter Space on Ordinal NFT & Stacks

### Node Provider remuneration

- 基金会在制定一个新的报酬模型
- 主要是刺激节点提供商提供更分布的节点
- 目前希望鼓励在亚洲、非洲增加更多的节点
- 现在正在onboarding的就有南非、韩国、印度等地
- 欧洲也是分地域鼓励
- 美国是不鼓励
- 然后就是Gen 2的硬件更贵，现有的模型也不能覆盖相关的费用

### Motoko Generational GC

- --generational-gc
- 基本思想就是将对象分为老和新两类（这也是为什么叫Generational GC）
- 新对象就是自从上次GC之后创建的对象，针对它的回收会更快、更频繁
- 老对象就是自从上次GC之前就存在的对象，针对它的回收会更慢、频率更低
- 对比以前的基于Copying GC的效率，Benchmark显示Generational GC用时为1/3
- 以前如果GC运行时间过长，可能导致cycles不够
- 每次GC的时长有显著的缩短
- 支持的版本是：dfx 0.13.1 + moc 0.7.6
- Incremental GC
- 将来会支持增量式GC
- 允许分多个小批次执行回收，不会出现某一次

### Web Sockets

- Research团队在研究怎么支持Web Sockets
- 不久后会发布一个sample，到时候再跟大家更新

## Q&A

ckBTC和KYT compliance @Ben Zhai
>- 黑BTC的问题, BTC ⇒ ckBTC 的转化暂时没做
- 加一步KTY Know-Your-Transaction，会延长BTC集成的时间，分不同级别
- 如何去中心化 （目前KYT的服务商都是中心化的）
- 如何通过Working Group来参与IC技术路线的制定和建设 @Ben Zhai    
- 需要社区开发者多参与

Metabox遇到的问题以及解决办法 @Hai Liu @Elie Prim Labs
>- 给IC发update call，会遇到限流的问题（如果一次发太多）
- 边缘节点为了防止DDOS攻击，有限流，150个消息/秒
- 超过1000个消息/秒 per 子网应该是可以的
- 对所有的update call都需要追踪最后的执行结果；如果遇到503/429的结果，得处理错误信息
- 不要在短时间发太多消息，需要添加一个动态调整的机制
- 同时把消息发到不同的边缘节点，得事先获得这些节点的IP地址，甚至自己架设一个专门的域名服务器
- 白名单有公平性的问题，不建议。最好通过技术解决。
- Community Suggestion: is it possible to get on a whitelist so that APIs will be not regarded as DDoS attacks by IC’s boundary nodes?

BTC的铭文可以搞到IC上来么？
>- 现在没法全面支持（但如果只是做交易市场还是有可行性的，因为不需要 Schnorr 签名）
- Schnorr 的签名难度比较高
- 未必需要基金会来做，欢迎社区开发者来开发
- 查询费用并不高
- Community Suggestion: can DFINITY support canister level taproot script and schnorr signature? Michael of AstroX
Many investors have come up asking if we can support canister level taproot script and schnorr signing. It seems that the Ordinals are hot and may replace other NFT markets of other chains. If the foundation can support，taproot scripts, schnorr threhold signatrue and similar APIs to tECDSA
- Then IC can be L2 of Bitcoin, we don’t even need Lightning network anymore( if we can add WebSocket supports as well)
- This action also attracts people and assets, more bitcoin will flow in, and as L2, we can build many use cases that haven’t been discovered before
- Some project like Stacks (https://www.stacks.co/) claims to be L2 of bitcoin, and even some rollup project like Rollkit(https://rollkit.dev/blog/sovereign-rollups-on-bitcoin/) is trying to be rollup-chain on top of bitcoin and provide EVM support for higher-level applications.
- We all hope Bitcoin Integration works for IC. Now Ordinals NFT is more like a signal that the war of Bitcoin L2 is coming, that which project will be the actual L2 of Bitcoin with scalabilities and security. Perhaps we all have to take action to make IC valuable to mass crypto users.
- Note that a pure marketplace for Ordinal may be donable, because it would not require threshold Schnorr signature support.

节点机器需要从基金会购买吗？
>- 节点运营商自己购买，不经过基金会
- 基金会只制定硬件型号的规格
- 节点硬件验证非常花时间

EdDSA的签名支持 @Witter Lee
>- 尚在早期规划中，优先级还不是很高
- 对其他链的支持
- EdDSA的重要性甚至高过ETH集成。如果DFINITY不做此事，社区开发者无法自己完成
- AA（Account Abstraction）只能支持ECDSA
- 主要的公链支持EdDSA, Solana and Cosmo，Aptos和Sui
- Community Suggestion: EdDSA would be very useful to drive IC’s ecosystem growth and some developers are counting on DFINITY to do that (such as Deland Labs) as this can be achieved only by DFINITY, not community developers.