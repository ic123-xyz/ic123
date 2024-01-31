---
slug: icp-dev-forum-ep07
title: ICP开发者研讨会EP07
authors: [herbert, vincent, beeling]
image: "./img/look-stars.png"
tags: [icp monday]
---

94名 ICP 爱好者参加了第七次开发者研讨会。 DFINITY 亚太团队分享了近期社区活动，和关于 Feedback Board, SNS, IC 中英文关键词对照表方面的进展。

<!--truncate-->

## 回顾

- 活动链接：[Twitter Spaces](https://twitter.com/herbertyang/status/1666659403863576577)
- 参与人数：94
- 活动时长：33分钟

## 音频回放

<iframe width="560" height="315" src="https://www.youtube.com/embed/yu4mtyACKQ4?si=nIdGeNkgFX7kBd6j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 社区活动回顾 & 预告

- 6/1 Crypto Valley Conference, Switzerland, Dom's speech
- 6/7 DICE Zurich (Digital Identity unConference), Switzerland
- 6/12 Blockchain meets Basel, Switzerland
- 6/17-18， Rust China Conference, Shanghai
- 6/17, Tintin x DFINITY 开发者见面会，Shanghai
- 7/26 BuilderCon 2023 Hong Kong (Herbert), Hong Kong

## R&D 路线图进展

### [Feedback board](https://dx.internetcomputer.org/)

- 包括Wasm的一些优化
- Candid在VSCode中的语法高亮
- is_controller：开发者可以判断调用者是否是controller
- 提高wasm模块的大小限制：从2MB→约100MB
- Cycle wallet有其自身的问题
    - 不直观、不容易理解
    - 本身消耗cycles
    - 迁移的时候canister id容易被遗忘
- Cycle ledger
    - 希望用户像持有ICP一样持有cycles
    - Ledger会兼容ICRC-1 & ICRC-2
    - dfx也会在做相应扩展
    - 欢迎大家能够对 [public global R&D 例会](https://jyjde-bqaaa-aaaap-abcda-cai.icp0.io/) 提出需求，比如想看到哪些内容

### SNS

- Geo restriction, 允许制定地理位置限制
- Confirmation text，指定确认信息，参与的用户需要接受
- 正在上SNS的Kinic就用到了这两个功能
- [Launch SNS的步骤](https://internetcomputer.org/docs/current/developer-docs/integrations/sns/lifecycle-sns/sns-launch#sns-launch-process)
- [SNS checklist](https://internetcomputer.org/docs/current/developer-docs/integrations/sns/tokenomics/sns-checklist)

### IC 中文关键词对照表

ic123.xyz 发布 [互联网计算机（IC）核心词汇表](https://ic123.xyz/docs/getting-started/ic-glossary/)