---
sidebar_position: 7
---

# 互联网计算机（IC）核心词汇表

## A

### account: 账号 {#account}
**帐号**是分类[账本容器](#ledger-canister)中的条目组合，它是一种智能合约，模仿了常规银行帐户的行为，用 [ICP](#icp) 作为度量单位。账号由[主体](#principal)拥有，其所有权不会随时间而改变。每个账号都有一个用 ICP 度量的正[余额](#balance)，精确到小数点后8位。

### address: 地址 {#address}
在谈论账本[交易](#transaction)的时候，**地址**跟[账号](#account)是同一个意思。

### actor: 参与者 {#actor}
**参与者**是参与者模式 ([Actor Model](https://en.wikipedia.org/wiki/Actor_model)) 中的原语。它是一个封装了状态的进程，通过顺序接收异步消息，并与其他并发运行的参与者进行通信。参与者模式与 IC 的关联之处在于 IC 中的[容器](#canister)遵循参与者模式进行并发与异步计算。

### API canister call: 容器调用接口 {#api-canister-call}
定义在 [IC 接口规范](https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-interface)中的 API，用来和 IC 上的容器进行交互。

## B

### balance: 余额 {#balance}
**余额**是[账号](#account)中的存款总额减去取款总额。某些情况中，必要时可以说一个不在账本中的账号余额为零。

账本帐号的余额以 ICP 计价，以八位小数表示。一个账号的最小余额是0.00000001或10^-8 [ICP](#icp)。这个数量有时被称为一个**e8**。

### batch: 批次 {#batch}
**批次**是一个[消息](#message)的集合，其顺序通过[共识](#consensus)达成。

### beneficiary: 账号持有者 {#beneficiary}
**账号持有者**是拥有账号余额的[主体](#principal)。账号持有者不能被变更。一个账号持有者有可能被允许对账号进行交易操作（见[账号受托者](#fiduciary)）。

### blockchain: 区块链 {#blockchain}
**区块链**是一列通过加密技术链接在一起不断扩展的，经过[共识](#consensus)协议确认的的很多区块的集合。在 IC 上，每个[子网](#subnet)都是一条区块链，这些区块链通过[链钥](#chain-key)密码学进行交互。

### boundary node: 边界节点 {#boundary-node}
所有对 IC 的访问都会经过某一个**边界节点**。这些节点遍布全球，它们会将传入的对容器的接口调用路由到正确的子网和节点副本，并提供 [service worker](#service-worker) 以及将 HTTP 请求转换为 API 调用 ([icx-proxy](#icx-proxy))。

### burning transaction: 销毁交易 {#burning-transaction}
**销毁交易**是“销毁” ICP 的过程，以此一定数量的 ICP 会被销毁。它的主要用途是购买 [cycles](#cycle)，当一定数量的 ICP 被销毁的同时会产生对应数量的 cycles，这里会使用当前 ICP 和 SDR 的汇率，一个 SDR 对应兑换1T(10E12)的 cycles。销毁交易表现为从来源账号到 [ICP 供应帐号](#icp-supply-account)的一笔交易。

## C

### Candid
**Candid** 是为 IC 专门制作的接口定义语言，为应用程序接口提供一种公共语言，使得由不同编程语言所编写的服务之间的通信更加容易。

### canister: 容器 {#canister}
**容器**是一种集合了代码和状态的[智能合约](#smart-contract)。一个容器可以作为智能合约来部署在 IC 上以供互联网访问。

### canister account: 容器账号 {#canister-account}
**容器账号**是一个由容器所有的账本账号（即：[账户受托者](#fiduciary)是个容器）。一个非容器账号是账本账号，它的账户受托人是非容器[主体](#principal)。

### canister identifier: 容器 ID {#canister-identifier}
**容器 ID** 是一个全局的唯一标识符，用于标识一个容器、与之交互。

### canister signature: 容器签名 {#canister-signature}
**容器签名**使用一种基于[可认证变量](#certified-variable)的签名方案。它的公钥包括一个容器ID加上一段助记词（每个容器可以拥有多个公钥）。签名是一种证书，以证明容器把签署过的消息放在其状态树里的某一个具体的位置。详情见 [IC 接口规范](https://smartcontracts.org/docs/interface-spec/#canister-signatures)。

### canister state: 容器状态 {#canister-state}
**容器状态**指的是在某一个特定时间点一个容器里包含的所有状态。一个容器的状态分为用户状态和系统状态。用户状态是一个 [WebAssembly](#webassembly) 的模块副本。系统状态指的是IC代表容器维持的辅助状态，譬如这个容器的算力分配、[cycles](#cycle) 的余额、输入和输出的队列、以及其他的元数据。一个容器跟自己的系统状态的交互方式要么是隐含的，譬如消耗 cycles 的时候，要么是通过系统 API 来完成，譬如发送消息的时候。

### catch-up package (CUP): 同步包 {#catch-up-package}
**同步包** (CUP) 是一个数据包，它包含启动一个[子网](#subnet)[副本](#replica)所需的一切数据。

### certified query: 可认证查询 {#certified-query}
**可认证查询**是其响应经过认证的查询调用。

### certified variable: 可认证变量 {#certified-variable}
在处理更新调用（或容器间调用）时，容器存储在其[子网](#subnet)的规范状态中的数据片段被称为**可认证变量**。因此在处理[查询](#query)调用时，容器能向用户返回证书以证实它确实提交了该值。

### chain key: 链钥 {#chain-key}
**链钥**密码学由一组加密协议组成，这些协议共同编排了构成IC的[节点](#node)。链钥密码学最显著的创新是 IC 只有一个公钥。这是一个巨大的优势，因为它允许任何设备（包括智能手表和手机）验证来自 IC 的产物真实性。

### consensus: 共识 {#consensus}
在分布式计算中，**共识**是一种容错机制。通过该机制，多个[节点](#node)可以就某个值或状态达成一致。

共识是[节点副本](#replica)软件的核心组件。共识层从点对点产物池中选择[消息](#message)，然后从其他[子网](#subnet)的跨网络数据流中拉取消息并组织成一个[批次](#batch)，并传递给[消息路由](#message-routing)层。

### controller: 控制者 {#controller}
容器的**控制者**是对容器具有管理权限的个人、组织或其他容器。 控制者通过[主体](#principal)来标识。容器的控制者可以升级该容器的 WebAssembly 代码或删除该容器。

### cycle
在 IC 上，**cycle**是以处理、内存、存储和网络带宽的形式消耗的资源的计量单位。每个容器都有一个 cycles 帐户，根据容器消耗的资源进行收费。 ICP 可以转换为 cycles 并转账到容器中。 也可以将cycles附加到容器间的消息上，在容器之间进行 cycles 转账。

ICP 始终以 SDR 来衡量的当前 ICP 的价格，基于此将 ICP 转换为 cycles。其中一万亿个 cycles 对应一个 SDR。

## D

### dapp: 去中心化应用 {#dapp}
**去中心化应**用是一个运行在 IC 上的[容器](#canister)。

### data center: 数据中心 {#data-center}
**数据中心**是托管[节点](#node)的物理站点，这些节点对 IC 作出贡献。在 IC 上数据中心通过唯一标识符来标记，它包括了节点部署所需的硬件和软件基础设施。

### direct integration (BTC-ICP Direct Integration) {#direct-integration}
IC 提供了与 BTC 网络的**直接集成**，这使得在 IC 上的容器可以直接通过 BTC 网络的交易来接收、持有和发送BTC。容器可以像BTC网络上持有BTC的用户一样。所有这些都是基于以下条件实现的：
 1. IC 是在协议层与BTC集成；
 2. 通过基于门限ECDSA的链钥签名新协议，容器能够安全地持有（和使用）ECDSA 密钥。

IC 是首批实现了与其他区块链的**直接集成**的区块链网络之一，并为此构建了极具创新的技术基础。

### dissolve delay: 溶解延迟 {#dissolve-delay}
**溶解延迟**是[神经元](#neuron)在溶解之前必须花费的时间。

### dissolved state: 溶解完成状态 {#dissolved-state}
**溶解完成状态**是一种[神经元](#neuron)状态，其特征在于[溶解延迟](#dissolve-delay)为零。（通常说处于此状态的神经元没有溶解延迟。）在这种状态下，一个神经元可以被发放，之后它的质押金会转移到别处，其相应的[神经元账号](#neuron-account)会关闭。 已溶解的神经元的[年龄](#neuron-age)被认定为零。

### dissolving state: 溶解进行状态 {#dissolving-state}
**溶解进行状态**是紧随其所有者发出“开始溶解”命令后的[神经元](#neuron)状态，并一直持续到发出“停止溶解”命令、或直到溶解延迟计时结束。溶解神经元的[年龄](#neuron-age)被认定为零。

## E

### execution environment: 执行环境 {#execution-environment}
**执行环境**是[节点副本](#replica)软件的核心层之一。

## F

### fiduciary: 账号受托者 {#fiduciary}
**账号受托者**是被允许在[账户](#account)上进行交易的[主体](#principal)；因此可以将其理解为帐户的所有者，但需要注意的是，它可能不是帐户的[受益者](#beneficiary)。[神经元账户](#neuron-account)就是一个受益者和受托者不一致的突出范例（受托者是[治理容器](#governance-canister)，而受益者是神经元持有者）。账本账户的受托者不会随时间而改变。

对于与 IC 账本交互的 DeFi 应用（容器），受托者和受益者的区别也很重要：在这种情况下，受托者是 DeFi 容器，而受益者是使用 DeFi 容器服务的个人或组织。

## G

### governance canister: 治理容器 {#governance-canister}
**治理容器**是实现了 [NNS](#network-nervous-system) 治理系统的[系统容器](#system-canister)，即存储和管理[神经元](#neuron)和[提案](#proposal)、并实现了 NNS [投票](#voting)环境等。

## H

### HTTP gateway protocol: HTTP网关协议 {#http-gateway-protocol}
**HTTP 网关协议**允许容器处理传统的 HTTP 请求。HTTP 网关协议存在多个实现（例如，[service worker](#service-worker) 和 [icx-proxy](#icx-proxy)），可以在 [IC 接口规范](https://internetcomputer.org/docs/current/references/ic-interface-spec/#http-gateway)中找到它的定义。

### HTTPS outcalls {#https-outcalls}
在IC上，容器可以通过 **HTTPs outcalls** 访问指定的 URL，以直接获取链下数据、或与链下系统（如 Web 2.0 服务或企业 IT 基础设施）进行交互。调用的结果会经过[共识](#consensus)处理和协商，从而防止不确定性。HTTPs outcalls 避免了对可信任的预言机和桥的需求。

## I

### ICP
**ICP** 是 IC 的实用令牌。通过将 ICP 锁定在[神经元](#neuron)中，互联网社区可以参与 IC 区块链网络的治理。ICP 还可以转换为 [cycles](#cycle)，用来维持[容器](#canister)运转。

### ICP supply account: ICP供应账号 {#icp-supply-account}
**ICP 供应账号**是一个准虚构的、余额永远为零的账本[账号](#account)，它在 ICP 的[铸造](#minting-transaction)和[销毁](#burning-transaction)操作中扮演着核心角色。

### icx-proxy
**icx-proxy** 是一个实现 [HTTP 网关协议](#http-gateway-protocol)的命令行工具，用来与 IC 的[节点副本](#replica)通信。

### identity: 身份 {#identity}
**身份**是一个字节字符串，用于标识与 IC 交互的实体（例如[主体](#principal)）。对于用户而言，身份是用户的 DER 编码公钥的 SHA-224 哈希值。

### Internet Identity: 互联网身份 {#internet-identity}
**互联网身份**是一个运行在 IC 上的匿名区块链身份验证系统。

### induction pool: 导入池 {#induction-pool}
子网区块链的**导入池**是驻留在[子网](#subnet)上的所有[容器](#canister)的所有[输入队列](#input-queue)的集合。

### ingress message: 入口消息 {#ingress-message}
**入口消息**是最终用户发送给在[子网](#subnet)区块链上运行的容器的消息。该消息由最终用户身份对应的密钥签名，并发送到参与子网的[副本](#replica)。

### ingress message history: 入口消息历史 {#ingress-message-history}
**入口消息历史**记录了[节点副本](#replica)处理的每条[入口消息](#ingress-message)的当前状态，并跟踪消息是否成功包含在[导入池](#induction-pool)中、以及已执行消息的响应。

### input queue: 输入队列 {#input-queue}
[容器](#canister)的**输入队列**包含绑定到该容器的所有[消息](#message)，参见导入池。当容器被调度执行时，将执行其输入队列中的消息。

### inter-canister message: 容器间消息 {#inter-canister-message}
与用户发起的[入口消息](#ingress-message)不同，**容器间消息**是指从一个[容器](#canister)发送到另一个容器的[消息](#message)。

### Internet Computer (IC): 互联网计算机 {#internet-computer}
**互联网计算机** (IC) 是一个去中心化的区块链，通过独立的[节点供应商](#node-provider)在区域分布的数据中心运行[节点](#node)来为部署在区块链上的[容器](#canister)（智能合约）提供可扩展的计算能力。

## L

### ledger canister: 账本容器 {#ledger-canister}
**账本容器**是一个[系统容器](#system-canister)，其主要作用是存储[帐户](#account)及其对应的[交易](#transaction)。

## M

### message: 消息 {#message}
**消息**是用户或者一个[容器](#canister)发送到另一个容器的数据。

### message routing: 消息路由 {#message-routing}
**消息路由**层从[共识](#consensus)层接收消息[批次](#batch)并将其引入[导入池](#induction-pool)中，然后消息路由会调度一组[容器](#canister)去执行其[输入队列](#input-queue)中的消息。

当消息被执行后，消息路由层会从输出队列中获取执行轮次中产生的消息，并将这些消息放入输出流中、以供其他[子网](#subnet)上的容器使用。

### minting transaction: 铸造交易 {#minting-transaction}
**铸造交易**是“铸造” ICP 的过程，从而产生一定数量的 ICP。铸造 ICP 是为了奖励[神经元](#neuron)的[投票](#voting)，也用来奖励那些通过运行[节点](#node)为 IC 提供计算能力的[节点供应商](#node-provider)。铸造交易表现为从 [ICP 供应账户](#icp-supply-account)到目标账户的交易。

### Motoko
**Motoko** 是一种编程语言，旨在直接支持 IC 的编程模型，从而更容易的、更高效的利用 IC 的一些独有功能（包括智能合约的参与者模型和 WebAssembly 的编译）构建应用程序。

## N

### non-dissolving state: 非溶解状态 {#non-dissolving-state}
不处于[已溶解](#dissolved-state)或[溶解中](#dissolving-state)的[神经元](#neuron)被称为**非溶解状态**（或“老化”状态）。因此非溶解的神经元会累积“年龄”，但需要注意的是，任何时候开始溶解都会将这个年龄降低到零。 非溶解神经元的溶解延迟参数不能为零，因为这样的神经元必须已经溶解。

### network nervous system (NNS): 网络神经系统 {#network-nervous-system}
**网络神经系统** (NNS) 是一组[系统容器](#system-canister)（又名“NNS 容器”）的集合，这些系统容器组装成一个治理系统、并控制着 IC 各个方面。

### neuron: 神经元 {#neuron}
**神经元**是一种 IC 实体，可以对 IC 平台治理发起[提案](#proposal)或对提案进行[投票](#voting)。

为了提供负责任的治理所需的稳定性，神经元需要存储（"质押"）一定量的 ICP 才能发起提案或对提案进行投票。这会将 ICP 锁定一段时间，然后开始溶解。神经元中质押的 ICP 存储在[神经元帐号](#neuron-account)中。神经元持有者有权就治理问题发起提案或投票，并根据质押的 ICP 数量和溶解期的长度来按比例获得投票奖励。

### neuron account: 神经元账号 {#neuron-account}
**神经元帐号**是一个[容器帐号](#canister-account)，其[受益人](#beneficiary)是[神经元](#neuron)（或神经元的所有者）。[治理容器](#governance-canister)是所有神经元账号的[受托人](#fiduciary)。

### neuron age: 神经元年龄 {#neuron-age}
**神经元年龄**是一个神经元参数，大致表示自其创建以来或自其最后一次进入[非溶解状态](#non-dissolving-state)以来所经过的时间。神经元年龄的计算需要考虑该神经元是否已花费时间[溶解](#dissolved-state)或[正在溶解](#dissolving-state)，两者都会重置此参数。

### node: 节点 {#node}
**节点**是一个物理或虚拟的网络端点，它托管了参与 IC 所需的所有硬件、[节点副本](#replica)软件和配置。

### node operator: 节点操作员 {#node-operator}
**节点操作员**是一种非容器[主体](#principal)，有权将[节点](#node)添加到 IC、或者从 IC 删除。

[节点供应商](#node-provider)拥有硬件安全模块（HSM），并通过[NNS](#network-nervous-system)注册HSM。（HSM 的注册过程本质上是从存储在 HSM 上的密钥派生出 IC 主体 ID，并通过 NNS 将该 ID 持久化。）然后节点供应商将已注册的 HSMs 移交给法人，后者因此获得了物理上操作节点的权限（也就是安装[节点副本](#replica)）。与“常规”主体（一个主体ID仅对应一个人）相反，HSMs 可以例行更换人员，因此许多人可以在不同时间充当某个节点操作员主体。

### node provider: 节点供应商 {#node-provider}
**节点供应商**是一种非容器[主体](#principal)，接收来自因节点参与 IC 而获得的奖励。通常节点供应商是[节点](#node)的所有者，也可能参与节点操作相关的任务。节点供应商可以从分布在多个[数据中心](#data-center)的多个节点获得奖励。

## O

### output queue: 输出队列 {#output-queue}
每个[容器](#canister)都有一个[消息](#message)**输出队列**，包含了绑定到其他容器的消息。

## P

### peer-to-peer (P2P): 点对点 {#peer-to-peer}
在常见应用中，**点对点**（P2P）计算或网络是一种分布式应用程序架构，它将工作负载分区到网络中的同等特权计算机节点上，以便参与者可以贡献资源（如处理能力、磁盘存储或网络带宽）来处理应用程序工作负载。

点对点层收集并传播来自用户和其他节点的[消息](#message)和产物。

[子网](#subnet)的[节点](#node)形成一个专用的点对点广播网络，以促进产物（例如[入口消息](#ingress-message)、控制消息及其签名份额）的广播是安全的、并在一定时间内最终交付。IC 的[共识](#consensus)层就是建立在此功能之上。

### principal: 主体 {#principal}
**主体**是可以通过 IC 进行身份验证的实体。这与[维基百科定义](https://en.wikipedia.org/wiki/Principal_(computer_security))的主体一词的含义相同。主体使用特定的[身份](#identity)与 IC 交互。

### proposal: 提案 {#proposal}
**提案**是描述修改 IC 或其子系统的某些参数的操作声明，它具体实现为具有多种属性（例如 ID、URL、摘要等）的 IC 实体。

提案由符合条件的[神经元](#neuron)所有者提交，供 IC 社区评估、并经过[投票](#voting)过程、决定其是否通过或拒绝。投票后，通过的提案会被执行。

提案有几种分类方法，其中最重要的一种是将提案按主题划分，当其被采纳后会触发某些类别的操作，例如创建[子网](#subnet)、将[节点](#node)添加到子网等。

### proto-node: 原初节点 {#proto-node}
**原初节点**是一种包含硬件和软件组合的 IC 实体，与[节点](#node)的不同之处在于它尚未在 IC 上注册。简而言之，原初节点是“等待中的节点”，因此除了[节点副本](#replica)软件之外，它拥有成为节点所需的一切软硬件。

## Q

### query: 查询 {#query}
**查询**是一种优化方式，用于在不需要保留状态更改的情况下对[容器](#canister)执行操作。查询是同步的，可以被发送到任何托管容器的[节点](#node)。查询不需要[共识](#consensus)来验证结果。

## R

### replica: 节点副本 {#replica}
**节点副本**是[节点](#node)参与[子网](#subnet)所需的协议组件的集合。

### registry: 注册表 {#registry}
IC **注册表**管理在 [NNS](#network-nervous-system) 上维护的系统元数据，该数据由所有[子网](#subnet)区块链访问。

## S
### service worker
**[Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)** 实现了 [HTTP 网关协议](#http-gateway-protocol)，可以将浏览器资产请求转换为对容器的接口调用，并验证资产认证。

### smart contract: 智能合约 {#smart-contract}
**智能合约**是一种有状态的计算机程序，目的是根据合同或协议条款自动执行、控制或记录相关事件和行为。智能合约以[容器](#canister)（绑定了数据和代码）的形式部署在 IC 上。

一个容器可以有一个或多个[控制者](#controller)，控制者可以修改容器的代码、从而修改智能合约的条款。对于具有不可变代码的容器智能合约，其控制者列表必须为空。

### state change: 状态改变 {#state-change}
**状态改变**是任何[交易](#transaction)、函数调用或操作的结果，这些交易、函数调用或操作会更改存储在[容器](#canister)中的信息。例如一个函数进行更新调用（将两个数字相加、或从列表中删除一个名称），其结果即是对容器状态的更改。

### state manager: 状态管理器 {#state-manager}
**状态管理器**负责：
 1. 维护（多个版本的）由[消息路由](#message-routing)和[执行环境](#execution-environment)实现的确定性状态机操作的复制状态；
 2. 在复制状态和其规范版本之间来回转换（后者可以独立于具体实现进行理解）；
 3. 获取部分规范状态的认证，这些认证允许其他利益相关者（例如其他[子网](#subnet)和/或用户）验证某些状态确实来自有效的子网；
 4. 提供功能允许同一子网中的其他[节点副本](#replica)同步规范状态，以便落后的节点副本追赶上来。

### subnet: 子网 {#subnet}
**子网**是一组[节点](#subnet)的集合，这些节点运行自己的[共识](#consensus)算法实例来生成子网区块链，该子网区块链使用[链钥](#chain-key)加密与 IC 的其他子网进行交互。

### system canister: 系统容器 {#system-canister}
**系统容器**是预安装的[容器](#canister)，用于执行维护 IC 所需的某些任务。

## T

### transaction: 交易 {#transaction}
账户**交易**是将 ICP 从一个[帐户](#account)转移到另一个帐户的过程，它可以分为三种类型：常规转账交易、[销毁交易](#burning-transaction)和[铸造交易](#minting-transaction)。

### transfer transaction: 转账交易 {#transfer-transaction}
**转账交易**是将 ICP 从任何账户（即除了 [ICP 供应账户](#icp-supply-account)之外的任何账本账户）转移到另一个常规账户的过程。

## U

### user: 用户 {#user}
**用户**是与 IC 交互的所有实体，包括去中心化应用的开发者、部署在 IC 上的去中心化应用的终端用户、[ICP](#icp) 的持有者以及[神经元](#neuron)的持有者。

## V

### valid set rule: 有效集合规则 {#valid-set-rule}
**有效集合规则**是确定[导入池](#induction-pool)有效的规则。[入口消息](#ingress-message)和[容器间消息](#inter-canister-message)必须通过某些检查，以确保在将它们加入到导入池前遵守有效集合规则。

### voting: 投票 {#voting}
**投票**是选择通过和实施[提案](#proposal)的过程。投票的直接参与者是[神经元](#neuron)，他们可以提交提案、或对提案进行投票。投票过程是一项相当复杂的工作，涉及神经元资格、投票权重、神经元追随链等各个方面。投票在设计时考虑了安全性和可靠性，并正在不断改进以防止投票权重集中在少数神经元拥有者的手中。

## W

### WebAssembly
**WebAssembly**（缩写为 Wasm ）是一种基于堆栈的虚拟机的二进制指令格式。
