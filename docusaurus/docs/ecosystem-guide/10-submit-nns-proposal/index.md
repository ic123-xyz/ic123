---
title: Submit NNS Proposals
image: './img/submit.jpg'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, Internet Computer, Internet Computer Protocol, Web3, Crypto, Blockchain, 区块链, 加密货币, DApp, 去中心化, 去中心化应用, developer, startup, NNS, proposal]
---

# 递交社区提案

![proposal](./img/submit.jpg)

这篇文章介绍了使用一些命令行工具, 通过神经元来Neuron提交 NNS 动议提案的一种方法。

## 1. 背景

为了正确了解目前的情况，有几个要点值得强调：

### 1.1 只有神经元才可以提交提案

拥有至少 10 个 ICP 和 6 个月溶解延迟的神经元可以提交 NNS 提案。因此，第一步就是创建这样一个神经元。

### 1.2 NNS治理Canister接收动议提案

治理Canister和其他Canister都是一样的，因此它有一个Candid文件，可以接受信息等......本文将介绍一种方法，让你的本地计算机向治理罐发送一条信息（代表神经元签名），其中包含一个动议提案。

## 2. 准备工作

### 2.1 安装工具

#### 2.1.1安装dfx

dfx 是Canister SDK，用于从设备向NNS发送信息

请点击[这篇文章](https://ic123.xyz/docs/getting-started/install-dfx)以安装相应的IC SDK

#### 2.1.2 安装quill

- quill 是一个极简的 "治理工具包"。它是制作和向 NNS 发送信息以及管理自己的神经元的包装器。
- 安装和使用方法请参考：https://github.com/dfinity/quill

### 2.2 用命令行创建发提案的神经元

#### 2.2.1 创建 private.pem（私钥/公钥对）和账户 ID

在开始之前，他们需要一个私人/公共密钥对。

````
$ quill generate --seed-file seed.txt --pem-file identity.pem
````

完成后，您的账户`ID` 应该如下所示：`612ec300g9ec990da900d6ec45919e7d5dbb9fa0dd8e69c54d374df93aa28d57`

#### 2.2.2 将此私钥对/公钥对链接到 dfx，以便将其用作 "身份"。

在这种情况下，新身份被称为 "proposals"

````
$ dfx identity import proposals private.pem
````

如果您在终端中看到 "creating identity: proposals"，这就意味着成功了。

### 2.2.3 发送ICP到2.2.1创建的`account id`

您应该至少发送 10.001，以便有足够的 ICP 创建神经元并支付账户交易费用。

要向账户发送 ICP，您只需在自己选择的钱包中输入`account id`即可

### 2.2.4 拥有了ICP就可以创建神经元

注意：本节假定您已正确安装quill

````
// Craft a message to "stake a the neuron by choosing a 8-character $NAME and an $AMOUNT to stake"
// Note: you need to stake at LEAST 10 ICP to send proposals as $AMOUNT
$ quill --pem-file private.pem neuron-stake --name $NAME --amount $AMOUNT > message.json

//Send the message crafted above.
$ quill send message.json
````

- 你应该看到一条带有Neuron id的消息
- 如何成功会返回：`neuron ID: 9_218_890_096_040_352_708`. 这意味着你的Neuron id是`9218890096040352708`

### 2.2.5 将Neuron的溶解时间提高到6个月以上

- 时间在 NNS 中以秒为单位
- 一年以秒为单位31557600 秒

````
// Craft message to increase dissolve delay of neuron to 1 year
$ quill --pem-file private.pem neuron-manage 9218890096040352708 --additional-dissolve-delay-seconds 31557600 > message.json

//send message created above to the NNS
$ quill send message.json
````
## 3. 如何发起提案

本节说明了如何创建与此类似的动议提案： https://dashboard.internetcomputer.org/proposal/42626

### 3.1 在草稿里创建Markdown提案草稿

IC 控制面板和 NNS 前端 dapp 都会显示`summary`字段的markdown。建议在动议提案中使用标准markdown。

NNS 动议提案的标记示例：

````
## Objective

Service nervous systems (SNSs) are algorithmic DAOs that allow developers to create decentralized, token-based governance systems for their dapps. The proposed governance canister design is similar to the  governance canister of the Network Nervous System (NNS) but simpler and more flexible, allowing each SNS community to choose the configurations according to their needs. This design is also presented and discussed in this forum: https://forum.dfinity.org/t/open-governance-canister-for-sns-design-proposal/10224 .

## Background

### Relation to the original SNS design & overall approach
DFINITY Foundation presented a first proposed [SNS design](https://www.youtube.com/watch?v=L4443aaAP5A) in October 2021. 

## Community conversation & Timeline
The NNS team is ready to work on this feature!
To get the design approved by the community, the following schedule was followed:

* Jan 11-18th: Design discussion on the forum thread
* Jan 18th: Community conversation about the topic
* Jan 20th: Developer discussion on Discord
* today: motion proposal submission proposing the above design

## What is being asked of:

* Vote accept or reject on NNS Motion
* Participate in technical discussions as the motion moves forward
````
### 3.2 使用dfx发起提案

发送带有占位符 `$TITLE`、`$MOTION_TEXT`、`$SUMMARY`和 `$NEURON_ID` 的 NNS 议案建议的结构示例（这些变量并非 Unix 变量，您需要在命令中直接填写）：

注意，rrkah-fqaaa-aaaaaa-aaaaq-cai 是 NNS 治理罐的 ID，因此该命令是向 NNS 治理罐的 manage_neuron 方法发送信息。

````
dfx --identity proposals canister --network ic call rrkah-fqaaa-aaaaa-aaaaq-cai manage_neuron '(record {id = null; command=opt variant {MakeProposal=record {url=""; title="$TITLE";action=opt variant {Motion=record {motion_text="$MOTION_TEXT"}}; summary="

$SUMMARY

"}}; neuron_id_or_subaccount=opt variant {NeuronId=record {id=$NEURON_ID:nat64}}})'
````
Example NNS motion proposal with `$TITLE`, `$MOTION_TEXT`, `$SUMMARY`, and `$NEURON_ID`filled out:
````
dfx --identity proposals canister --network ic call rrkah-fqaaa-aaaaa-aaaaq-cai manage_neuron '(record {id = null; command=opt variant {MakeProposal=record {url=""; title="Open Governance canister for SNS | Design proposal";action=opt variant {Motion=record {motion_text="Present design proposal for Open Governance canister"}}; summary="

## Objective

Service nervous systems (SNSs) are algorithmic DAOs that allow developers to create decentralized, token-based governance systems for their dapps. The proposed governance canister design is similar to the  governance canister of the Network Nervous System (NNS) but simpler and more flexible, allowing each SNS community to choose the configurations according to their needs. This design is also presented and discussed in this forum: https://forum.dfinity.org/t/open-governance-canister-for-sns-design-proposal/10224 .

## Background

### Relation to the original SNS design & overall approach
DFINITY Foundation presented a first proposed [SNS design](https://www.youtube.com/watch?v=L4443aaAP5A) in October 2021. 

## Community conversation & Timeline
The NNS team is ready to work on this feature!
To get the design approved by the community, the following schedule was followed:

* Jan 11-18th: Design discussion on the forum thread
* Jan 18th: Community conversation about the topic
* Jan 20th: Developer discussion on Discord
* today: motion proposal submission proposing the above design

## What is asked of the community:

* Vote accept or reject on NNS Motion
* Participate in technical discussions as the motion moves forward

"}}; neuron_id_or_subaccount=opt variant {NeuronId=record {id=9218890096040352708:nat64}}})'
````

### 3.3 在dashborad检查是否成功

如果成功，dfx 将返回如下内容

````
(
  record {
    2_171_433_291 = opt variant {
      3_217_030_240 = record {
        2_744_746_248 = opt record { 23_515 = 42_626 : nat64 };
      }
    };
  },
)
````

其中 42_626 或 `42626` 是提案的 ID。您的提案将有一个不同的 ID。

您可以在这里查看提案： https://dashboard.internetcomputer.org/proposal/42626

## 4. 动议提案的最佳案例

### 4.1c书写提案

提案可以接受任何自由格式的文本。以下是建议的起始模板，供开始考虑如何撰写建议书的人参考：

````
# Example Motion Project Proposal

## 1. Objective
Lorem Ipsum

## 2. Background
Lorem Ipsum

## 3. Why this is important
Lorem Ipsum

## 4. Pros
Lorem Ipsum

## 5. Cons
Lorem Ipsum

## 6. Key milestones (if any)
Lorem Ipsum

## 7. Discussion leads (if any)
Alice, Bob, etc...

## 8. Security concerns (if any)
Lorem Ipsum

## 11. What is asked of the community

* Review comments, ask questions, give feedback

* Vote accept or reject on NNS Motion

Developer forum: https://forum.dfinity.org/t/long-term-r-d-tokenomics-proposal/9392/3
````
### 4.2 提案的沟通

提案上线后，将在 4 天内开放投票，如果出现大量争议投票，截止日期将自动延长 4 天。

提案通常需要大量的沟通和宣传（就像在任何组织中一样），以确保有足够多的人投票支持。在提案提交前进行宣传是非常普遍的做法，这样提案的目标投票者就会了解提案。