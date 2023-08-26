---
slug: icp-dev-forum-ep05
title: ICP开发者研讨会EP05
authors: [herbert, vincent, beeling]
image: "./img/apartment.png"
tags: [icp monday, ckbtc, canister, icrc, feedback board]
---

610名 ICP 爱好者参加了第五次开发者研讨会。 DFINITY 亚太团队分享了近期社区活动，和关于 ckBTC, Canister Timers, Exchange Rate Canister, Feedback Board, ICRC 方面的进展。

<!--truncate-->

## 回顾

- 活动链接：[Twitter Spaces](https://twitter.com/herbertyang/status/1655377552851218433)
- 参与人数：610
- 活动时长：81分钟

## 音频回放

<iframe width="560" height="315" src="https://www.youtube.com/embed/suKTL2rGoU8?si=nBx6AtfQQf8x9P8Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 社区活动回顾 & 预告

- 5月10日，ICP主网上线二周年庆
- 5月16日，Dom在Metaspace Leader Summit的演讲
- 5月21日，Dom在黑山 ETH EdCom的演讲

## R&D 路线图进展

### ckBTC

- KYT canister online
- ckBTC minter public to everyone
- Chainanalysis, Toniq Labs (the only KYT provider online)
- Can buy/mint ckBTC via IC Lighthouse and ICPSwap
- 2000 satoshi per transaction

### Response Verification V2

- Include response body, headers, status code, etc.
- dfx 0.14.0
- https://forum.dfinity.org/t/announcing-response-verification-v2/19135

### Canister Timers

- Heartbeat has its own limit
- Schedule periodic and one-shot task
- dfx 0.13.1
- Good for contents publishing platform like Mora, Dmail, DSCVR, distrikt

### Exchange Rate Canister

- https://wiki.internetcomputer.org/wiki/Exchange_rate_canister
- Use Http Outcalls to talk to the external servers
- Removed exchange rate proposals (144 per day)
- Used by ckBTC minter

### Feedback Board

- https://dx.internetcomputer.org/

### ICRC

- Encourage people to join the ICRC discussion.
- https://github.com/dfinity/ICRC

## Q&A

ICRC的ledger里的 cycles 如果烧完了会如何？资产会消失掉吗？
>- ICRC的ledger就是跑在普通的canister里，不会跑在系统子网上
- 会保留30天，这期间数据不会丢失
- Controller和canister ID will persist for 10 years

ckBTC里除了可以看到BTC UTXO的余额以外，还可以看到BTC的交易历史吗？
>- BTC功能目前是通过management canister来提供的，详细信息可以 参考这里
- BTC集成是在ICP协议层完成的。ckBTC是一个应用。社区自己也可以做，譬如IC Lighthouse的icBTC

ETH-ICP的集成, ARB和OP的集成

ICRC Rosetta API的集成进展如何？
>Rosetta for ICRC ledgers got deprioritized and postponed to much later.

ETH-ICP的Phase 2进展如何？