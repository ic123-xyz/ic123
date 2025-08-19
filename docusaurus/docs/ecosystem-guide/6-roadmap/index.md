---
title: Roadmap
image: './img/roadmap.jpg'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, Internet Computer, Internet Computer Protocol, Web3, Crypto, Blockchain, 区块链, 加密货币, DApp, 去中心化, 去中心化应用, developer, roadmap]
---

import TeamContact from '../../contact.md';

# 互联网计算机 ICP 技术路线图

![img](./img/roadmap.jpg)

互联网计算机 ICP 的技术路线图在这里：

:::info
https://internetcomputer.org/roadmap
:::

路线图分为五大部分:

- ✅ : `已经上线` / `Deployed`
- ⏳ : `正在研发中，预计本年中完成` / `In Progress`
- 👀 : `正在研发中，尚无明确时间点` / `Upcoming`
- 🎲 : `尚未开始研发，还在讨论中` / `Future`

## 核心协议

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| [网络扩展性](https://dashboard.internetcomputer.org/proposal/35648) | ✅ | 
| 子网间转节点 | ✅ | 
| [HTTPs Outcall](https://internetcomputer.org/https-outcalls) | ✅|
| [门限 ECDSA 签名](https://internetcomputer.org/docs/current/developer-docs/integrations/t-ecdsa/) | ✅|
| [比特币集成](https://internetcomputer.org/bitcoin-integration) | ✅|
| [高节点子网](https://forum.dfinity.org/t/introducing-the-first-fiduciary-subnet/17594) | ✅|
| [容器内存扩容至32GB](https://forum.dfinity.org/t/increased-canister-smart-contract-memory/6148/128) |  ✅ |
| [容器间暂停消息](https://forum.dfinity.org/t/long-term-r-d-scalability-proposal/9387) |  ✅ |
| [ECDSA 私钥轮班和再分享](https://forum.dfinity.org/t/threshold-ecdsa-signatures/6152/245) |  ✅ |
| 子网分片MVP | | ✅ | 
| [Deterministic Time Slicing](https://forum.dfinity.org/t/deterministic-time-slicing/10635) | |  ✅ |
| [可组合 query](https://dashboard.internetcomputer.org/proposal/87599) | | ✅|
| [容器计时器](https://dashboard.internetcomputer.org/proposal/88293) | | ✅ |
| [Wasm原生内存](https://dashboard.internetcomputer.org/proposal/88812) | | ✅ |
| [提升 I/O Handling](https://forum.dfinity.org/t/long-term-r-d-scalability-proposal/9387) | | | ⏳ | 
| [节点 SEV 加密](https://forum.dfinity.org/t/amd-sev-virtual-machine-support/6156) | | | ⏳ | 
| [Wasm Heap 限制](https://forum.dfinity.org/t/proposal-configurable-wasm-heap-limit/17794)| | | ⏳ |
| 子网节点上限提升至10万容器 | | | ⏳ | 
| 节点操作系统 SSH 登录| | | ⏳ |
| 子网存储空间提升至 1TB | | | ⏳ |
| [容器获取门限秘钥 - vetKeys](https://forum.dfinity.org/t/threshold-key-derivation-privacy-on-the-ic/16560/135)| | |  | 👀 |
| [创建容器组](https://forum.dfinity.org/t/canister-groups/16015)| | |  | 👀 |
| [容器生命周期hook](https://forum.dfinity.org/t/canister-lifecycle-hooks/17089)| | |  | 👀 |
| [以太坊集成](https://forum.dfinity.org/t/long-term-r-d-integration-with-the-ethereum-network/9382/6)| | |  | 👀 |
| 提升子网存储空间至 3TB| | |  | 🎲 | 

## 边缘节点

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| [ICOS边缘节点](https://forum.dfinity.org/t/long-term-r-d-boundary-nodes-proposal/9401) | ✅ | 
| 搜索引擎支持| ✅ | 
| [黑名单功能](https://forum.dfinity.org/t/path-forward-on-leveraging-boundary-nodes-for-content-filtering/10911) | ✅ |
| [个性化域名](https://internetcomputer.org/docs/current/developer-docs/production/custom-domain/) |  | ✅ | 
| Certified Headers | | | ⏳ |
| [边缘节点新架构](https://forum.dfinity.org/t/boundary-node-roadmap/15562) | | | ⏳ | 
| [资产容器缓存](https://forum.dfinity.org/t/long-term-r-d-boundary-nodes-proposal/9401) | | | | 👀 | 
| [SEV-SNP 节点加密](https://forum.dfinity.org/t/long-term-r-d-boundary-nodes-proposal/9401) | | | | 👀 |
| [WebSockets](https://forum.dfinity.org/t/websockets-on-the-ic-psychedelicdao/14817) | | | | 👀 |
| 可验证 query | | | | 👀 |

## 系统工具

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| [NNS 前端新版](https://forum.dfinity.org/t/nns-dapp-towards-new-ui-ux-including-test-link/13952) | ✅ | 
| [ckBTC](https://forum.dfinity.org/t/ckbtc-a-canister-issued-bitcoin-twin-token-on-the-ic-1-1-backed-by-btc/17606)|  | ✅ |
| [ckETH](https://forum.dfinity.org/t/long-term-r-d-integration-with-the-ethereum-network/9382)| |  | ⏳ |
| [ERC-20 代币集成](https://forum.dfinity.org/t/long-term-r-d-integration-with-the-ethereum-network/9382) | |  | ⏳ |
| [NNS里添加节点运营商角色](https://forum.dfinity.org/t/the-state-and-direction-of-decentralization-nodes-on-the-internet-computer/9170) | |  | ⏳ | 
| [真人验证](https://forum.dfinity.org/t/long-term-r-d-people-parties-proof-of-human-proposal/9636) | | | | 👀 | 

## 社区治理

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| [SNS](https://internetcomputer.org/docs/current/developer-docs/integrations/sns/) | | ✅ | 
| [社区基金](https://internetcomputer.org/docs/current/tokenomics/nns/neurons-fund) | | ✅ | 
| [预防SNS垃圾提案](https://forum.dfinity.org/t/reproposal-spam-prevention-convert-from-system-based-rewards-to-voter-based-rewards/15352) | | ✅ |
| [碳中和政策](https://forum.dfinity.org/t/sustainability-nns-proposal/11976)| | ✅ |
| [SNS 白名单机制](https://forum.dfinity.org/t/restriction-for-sns-swap-participation-design/19938)| | ✅ |
| [SNS 二合一提案](https://forum.dfinity.org/t/enhancement-of-the-sns-launch-process-one-proposal/19548)| | ✅ |
| [社区基金的进一步完善](https://forum.dfinity.org/t/suggested-enhancements-to-the-community-fund/20411) | | ✅ | 
| [SNS 代币的铸造功能](https://forum.dfinity.org/t/new-sns-ability-to-mint-sns-tokens-revised-thresholds-for-voting/23382) | | | ⏳ | 
| [提升 SNS 司库的安全性](https://forum.dfinity.org/t/safe-guards-for-the-access-to-the-sns-treasury/19669) | | | 👀 |
| [神经元索引](https://forum.dfinity.org/t/motion-request-for-neuron-indexing/11183) | | | | 🎲 |
| [定期确认神经元跟随关系](https://forum.dfinity.org/t/periodic-confirmation-of-neuron-followees/12109) | | | | 🎲 |
| [手动投票功能](https://forum.dfinity.org/t/proposal-to-enable-manual-voting-throughout-the-entire-voting-period-of-governance-proposals/9815)| | | | 🎲 |

## 开发者体验

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| BTC 在 DFX 里的集成 |  ✅ | 
| SNS Quil 命令行工具 | ✅ | 
| 资产缓冲 | ✅ | 
| React Native 启动模版 | ✅ |
| 系统层面的 DFX | ✅ |
| DFX Keyring 集成 | ✅ |
| Motoko 基础库改进 | ✅ |
| [Motoko VSCode 插件](https://forum.dfinity.org/t/we-heard-you-motoko-vs-code-extension-improvements/15933) | ✅ |
| [改进 Motoko 的单元测试](https://github.com/dfinity/motoko-base/pull/527)  | | ✅ |
| [Motoko Let-Else 绑定](https://forum.dfinity.org/t/solution-in-moc-0-8-3-let-else-match-and-take-in-motoko-do-for-variants-was-when/13427/6)| | ✅ |
| DFX 快速启动 | | ✅ |
| Motoko 开发服务器 | | ✅ |
| DFX deps | | ✅ | 
| Motoko 垃圾收集 | | ✅ |
| SNS 工具包 | | ✅ |
| [Motoko 稳定区](https://github.com/dfinity/motoko/blob/113f9c72edf4ff36bcc6dacc892fdb2f454ac81d/design/StableRegions-20230209.md) | | ✅ |
| DFX 新命令 | | | ⏳ | 
| Cycles 账本 | | | ⏳ | 
| DFX 版本控制 | | | ⏳ | 
| DFX 插件 | | | ⏳ | 
| Candid 的改善 | | | | 👀 |
| 主网记录 | | | | 👀 |
| 流媒体支持 | | | | 👀 |

## 基础设施和运营

| 功能 | 2022 | 2023 | 2024 | 未知 |
| --- | :---: | :---: | :---: |  :---: | 
| [节点硬件要求](https://wiki.internetcomputer.org/wiki/Node_Provider_Machine_Hardware_Guide) | | ✅ | 
| Bazel-based Build System | | ✅ | 
| 节点扩容 | | | ⏳ |
| [节点激励政策 V2](https://wiki.internetcomputer.org/wiki/Node_Provider_Remuneration)| | | ⏳| 
| 节点状态检测 | | | ⏳| 
| 节点状态线下检测 | | | ⏳| 
| 节点宕机通知 | | | ⏳| 
| 节点 NNS 前端| | | | 👀 |
| 容器记录| | | | 👀 |
| 节点惩罚机制 V3 | | | | 👀 |
| 接受社区对 IC 的代码贡献 | | | | 👀 |

## 热点

很多路线图上的功能可以追溯到 [DFINITY 开发者论坛](https://forum.dfinity.org/c/roadmap/29)。有一些最热门的讨论话题，还未必能即时反映在 internetcomputer.org 更新的路线图里，需要在这里直接看。

:::tip
https://forum.dfinity.org/c/roadmap/29
:::

- 譬如，关于极具颠覆性的`vetKeys`的讨论： https://forum.dfinity.org/t/threshold-key-derivation-privacy-on-the-ic/16560/137
- 关于对 `Schnorr` 签名的支持，https://forum.dfinity.org/t/integration-with-brc-20-and-ordinals-vis-tschnorr/20014/15
- IC 上关于 `零知识` 的讨论，https://forum.dfinity.org/t/zero-knowledge-internet-computer-virtual-machine/9129/46
- 万众期待的 `以太坊集成` 的讨论，https://forum.dfinity.org/t/long-term-r-d-integration-with-the-ethereum-network/9382/59

很多社区很关心的重要话题未必能在开发者论坛上找到最直接的答案。请联系基金会团队，或者在论坛上相近的帖子下直接询问进展。

:::tip
ICP 生态里的 token 如果想在中心化交易所譬如币安上交易，需要 DFINITY 基金会完成 [Rosetta API](https://www.rosetta-api.org/) 的集成。R&D 团队提供的最新预测是 **2024年Q1**。上交易所最重要的条件是 DApp 的**活跃用户**足够多，**社区**足够活跃。
:::

<TeamContact />