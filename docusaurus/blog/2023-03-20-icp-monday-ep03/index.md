---
slug: icp-dev-forum-ep03
title: ICP开发者研讨会EP03
authors: [herbert, vincent, beeling]
image: "./img/ep03.jpg"
tags: [icp monday, dmail, ic lighthouse, metatribe, rocklabs]
---

292名 ICP 爱好者参加了第三次开发者研讨会。 DFINITY 亚太团队分享了近期社区活动和 R&D 工作的进展，并邀请基金会工程师 Dieter 和 Rocklabs 的 Yan 来分享 ETH-ICP 集成的动态，MetaTribe 的大鹏分享对3/18北京清华大学活动的感受，IC Lighthouse 的刺猬和 William 分享新上线的 $CHAT 的表现，Dmail 的 Richard 分享Dmail近期的用户增长。

<!--truncate-->

## 回顾

- 活动链接：[Twitter Spaces](https://twitter.com/i/spaces/1yNxaNmeMBQKj?s=20)
- 参与人数：292
- 活动时长：125 分钟
- 嘉宾:
    - Dieter Sommer of DFINITY
    - Yan of Rocklabs
    - 大鹏 of MetaTribe
    - 刺猬/William of IC Lighthouse
    - Richard of Dmail

## 音频回放

<iframe width="560" height="315" src="https://www.youtube.com/embed/1TNfI0Qte3U?si=-n3-jDMB0OBw9Rln" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 嘉宾分享

### Dieter of DFINITY

- What’s the purpose of this working group?
- Community Feedback: need Motoko package support for ETH integration (IC Lighthouse)

### Yan of Rocklabs

- IC-Web3‘s library is open-sourced
- Support all the RPCs.. threshold ECDSA的功能，直接签名 … Written in Rust
- End-point canister.. 直接调用API… friendly for Motoko developers
OMNIC … 跨链桥… Polygon and ETH的稳定币..
- Get a link for the public test …
- 阶段1已经完成
- 阶段2 at least 4-5 months… in Q3.. but definitely before year-end
- KYT for ETH?
    - Yes, it will have a similar challenge KYT for ETH
    - Do the same due diligence
    - the same infra
- How to promote this ETH-ICP? How will we promote this killer app?
    - Need to put in more resources for ETH than ICP
    - Bridges tend to fail …
    - Support from the community to promote this
    - Be present at conferences
    - Welcome all inputs
- So even after Phase I of ETH-ICP integration, it still won’t work because of lack of KYT on ETH, right? Yes
- Community Feedback: TVL is the most important measurement. DFINITY shall set a goal of making the top 10 on the DefiLlama from ICP’s current #143 to measure the success of ETH-ICP integration. If that goal is not achieved, either DFINITY has the wrong team, or doing the wrong thing, or both (8yeargangDAO and MetaTribe).

### 大鹏 of MetaTribe

- 120人在现场，来的很多都是资历深的老板，很多清华背景，很有可能是个破圈的极好机会，
- Beijing just published the Web3 news.. and was attended by gov official
- Which regions are they from? Not specific to trading pairs
- Community Feedback: the 3/18 event with Tsinghua was able to engage and leave a strong impression on DFINITY and IC in many accomplished entrepreneurs and senior executives from the Tsinghua alumni network. Let’s do more of this. (MetaTribe)

### 刺猬/William of IC Lighthouse

- $CHAT’s trading volume is too thin, below expectation from the community
- Increase deflation, bring in market maker
- Community Feedback: $CHAT’s trading volume is too thin and below the expectation from the community. It didn’t create the fomo effect that drives the success of many other projects in crypto, and probably didn’t bring in new users from other ecosystems. It needs to engage market maker to inject trading liquidity and reduce bid-ask spread. It should develop a plan to get listed on CEX. It also needs to figure out ways to generate deflation of tokenomics in this bear market. (IC Lighthouse).

### Richard of Dmail

- 45 iteration
- 22K DAU
- 53K canisters
- 15.5K NFTs
- 3M messages
- Integration with MetaBox
- DID cross-chain message & AI integration
- BIC, Conflux and Polygon
- Use dmail email as DID
- Integration with chatGPT and working on GPT-4
- 整个IC生态少了持续性，Plug钱包没有更新
- Sometimes chatGPT doesn’t respond fast… support returning of 500 中文字符。
- Would chatGPT pose a security risk as another centralized platform?
- Community Feedback: many projects in the IC ecosystem either could not continue or just left (Plug), creating entry barriers for new users

## 上次研讨会事项的跟进

- Meetup between Itoka, Sam and Peter Wong @Herbert Yang
    - Exchanged notes from convo with Peter Wong of Anaconda
    - It’s more of an infra discussion, not just an application
    - 把对话型的模块直接放在IC上，更加去中心化，而且可以让Community来拥有，谁用谁支付
    - AI的部署就不会再收到中心化平台的限制
    - Web Assembly是Anaconda的目标，
    - No GPU specs from IC’s nodes.. Maybe do a L2?
    - Llama模型 by Meta。源码泄露出来。
    - 训练和推理分开。训练对硬件的要求很高，但是推理对硬件的要求就没那么高，可以直接部署在IC上，仅仅只用CPU。
    - Community Feedback: right now there are no GPU specs from the hardware for IC nodes. AIGC should be moved to IC to counter the risk of the central platform. Maybe it’s worthwhile creating an L2 on IC with its own GPU hardware that can be more suitable for AI? AI generally consists of 2 parts, training and deduction. While training is very computation-heavy and requires a lot from hardware, deduction is not and could be deployed on IC using CPU only.
- Improve the documentation for custom domains @Wei Zhang
    - 一些域名的配置不同的提供商是不同的，比如CloudFlare和我们给出的文档的配置就不太一样
    - 有些脚本copy出来不能直接执行，需要到文档编辑器里粘贴拷贝一遍
    - 配置的步骤最好每一步都加上验证方法，以免步骤做完发现结果不对，再去找原因比较麻烦。
    - @Wei Zhang 会后续follow这个问题。
- Support for Schnorr signature? @Wei Zhang
    - 这个Schnorr签名的问题已经反馈给R&D对应的人员了，也都了解了需求，目前还属于research阶段，后续有什么进展会及时跟大家更新。
    - Support for EdDSA? @Ben Zhai
- DFINITY in HK in April @Beeling Chua

## 社区活动回顾 & 预告

- Dom’s activities
- Hong Kong Web3 Festival
- V2 of Community Program

## R&D 路线图进展

### SNS Update

- SNS update Asset Canister
- SNS和Rosetta的整合
- 如何简化启动一个SNS的流程，让开发者的体验更好，不需要基金会的接入、或者极少接入。
- 有一个很长的list在讨论中，等初步确定后后面会发出来跟社区分享、并听取大家的意见。

### DNS Decentralization

- Diego在[forum上的发帖](https://forum.dfinity.org/t/follow-up-on-item-new-canisters-will-only-be-accessible-through-the-icp0-io-domain-existing-canisters-will-be-accessible-both-through-ic0-app-and-icp0-io/18889/23)
- 将ic的域名分离，目前的计划是
- 从2023.4.20开始，新的canisters只能通过 icp0.io 访问。
- 老的canisters通过 icp0.io和 ic0.app 都可以。
- 还有一个月时间，大家可以看看自己的Dapps有没有需要改动、配置的地方。

### Wasmtime

- Wasmtime是replica用来执行canister wasm code的库。
- 这次更新是为了一个security的hotfix，修复了canister会读写越界的问题。

### [Awesome IC](https://github.com/dfinity/awesome-internet-computer)

- 包括了基金会收集的IC生态的资源，并将它们分类
- 包含了课程、示例、基础库、开发工具，以及各个领域的相关项目。
- 大家如果发现有什么确实，希望大家能发起PR、参与贡献。
- 同时也可以让IC生态的人更容易找到、发现你的项目。

## Q&A

