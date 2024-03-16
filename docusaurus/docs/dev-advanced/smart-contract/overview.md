---
title: 概览
image: './img/overview.jpg'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, developer, 开发者, smart contract, 智能合约，canister，容器，开发, overview, 概览]

# Display h2 to h4 headings
toc_min_heading_level: 2
toc_max_heading_level: 4
---

import TeamContact from '../../contact.md';

# 概览

![img](./img/overview.jpg)

## 简介

在 ICP 上运行的智能合约是传统智能合约的进化版本。ICP 上的智能合约被称为[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)，是将代码和数据结合在一起的计算单元。容器可以包含任意代码或数据，它可以用来提供网页服务、开发安全的消息应用，甚至实现去中心化的代币交易所。

![img](./img/canister.png)

容器具有一些特殊属性，允许开发人员构建可扩展的 Web3 服务。为了更好地理解这些属性，我们需要从不同角度去理解容器、以形成对其能力的完整图景。

- 以太坊开发人员可能将容器视为智能合约。  
- 学术背景的人可能会将其与 Actor 和 [Actor Model](https://en.wikipedia.org/wiki/Actor_model) 联系起来。  
- 系统工程师可能会联系到操作系统进程。  
- 虚拟机专家则可能会认为是 WebAssembly 模块实例。  

这些理解方式某种程度上都是正确的，综合起来它们共同构成了容器的全景图。接下来让我们逐一分析这些不同的理解。

### 容器作为智能合约

容器在很多方面类似于智能合约，容器的执行受到安全协议（在当前上下文是指 ICP 协议）的约束。在 ICP 上运行的容器是防篡改的，因为容器的状态只能通过在链上执行的消息来修改。而容器的状态可以通过 ICP 的[链钥](https://ic123.xyz/docs/getting-started/ic-glossary/#chain-key)密码学进行审计和加密验证。对容器和以太坊智能合约的简要比较，可以参考[该表格](https://ic123.xyz/docs/getting-started/icp-overview/#comparison-with-ethereum)。

### 容器作为 Actors

从抽象的角度来看，容器与 Actors 有很多相似之处。容器遵循并发计算的 [Actor 模式](https://en.wikipedia.org/wiki/Actor_model)，并通过执行以下一项或多项操作来响应接收到的消息：

- 修改容器的私有状态。  
- 向其他容器 (Actors) 发送消息。  
- 创建更多的容器 (Actors)。

尽管容器只有一个执行线程，但可以同时执行多个容器。这是 ICP 的一个关键特性，并因此克服了其他智能合约平台的所面临的可扩展性问题。

### 容器作为操作系统进程

容器在很多方面类也似于操作系统进程。
- ICP 调度容器的执行，类似于操作系统调度进程。  
- ICP 代表容器维护状态，例如容器的 cycles 余额、或对其他容器的未完成调用；这类似于操作系统代表进程维护状态，例如进程打开的文件描述符等。  
- 容器不能直接修改其 cycles余额，类似于操作系统进程不能直接修改其文件描述符表或操作外围设备。

ICP 为容器提供了 APIs，允许容器创建和管理其他容器，并向其他容器进行支付、或发送消息。

### 容器作为 WebAssembly 模块实例

容器是以 WebAssembly 模块的形式实现的，这使得开发者可以使用多种支持 WebAssembly 的编程语言编写容器、从而实现最大的互操作性。

一个容器即是一个完整的 WebAssembly 模块实例，具有自己的状态和执行堆栈。容器的内存使用正交持久性 ([Orthogonal Persistence](https://medium.com/dfinity/ic-internals-orthogonal-persistence-9e0c094aac1a))，这使得容器存储数据对用户来说是透明的。容器的 WebAssembly 模块数据会被系统自动持久化，并在下次调度执行该容器时呈现。WebAssembly 模块本身与容器状态的其他部分一起存储。



<TeamContact />
