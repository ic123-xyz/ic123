---
title: 编写
image: './img/write.jpg'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, developer, 开发者, smart contract, 智能合约，canister，容器，开发]
---

import TeamContact from '../../contact.md';

# 编写容器

![write](./img/write.jpg)

## 概览 {#overview}

ICP 支持广泛的应用和架构类型 —— 从单个智能合约到由 DAO 控制的复杂的多[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)项目。在开始编写和构建您的应用程序之前，您可以了解一下几种不同的工作流程。

- 标准工作流程  
  在这种流程中，开发人员同时编写前端代码（在终端用户的浏览器中运行）和后端代码（在容器中运行）。前端代码与其他 Web 资产（如 HTML 和 CSS）一起托管在容器中。当前端代码在浏览器中执行时，它与后端容器提供的功能进行交互。

- 基于框架的工作流程  
  - [Juno](https://juno.build/) 是一个面向 Web2 开发者的社区项目。它简化了在容器中托管代码和数据的过程，使得开发者可以使用熟悉的 Web2 概念和模式创建 Web3 应用程序。请访问 [Juno 官方文档](https://juno.build/docs/intro)获取更多信息。
  - [Bitfinity EVM](https://bitfinity.network/) 面向 [Solidity](https://soliditylang.org/) 开发人员。Bitfinity 在容器中运行以太坊虚拟机（EVM）的实例，使得开发人员可以上传和执行使用 Solidity 所编写的智能合约。请访问 [Bitfinity 官方文档](https://docs.bitfinity.network/)获取更多信息。

接下来我们将关注标准工作流程，包括应用程序的前端和后端组件的编写。

## 选择后端编程语言 {#backend-programming-language}

后端存储应用程序的数据并包含核心逻辑。ICP 支持多种编程语言，包括：

- Rust：由 DFINITY 基金会支持  
  在 ICP 的开发语言中，Rust 是覆盖最广的语言。ICP 上所有系统智能合约（如治理 ICP 的 [DAO](https://github.com/dfinity/ic/tree/master/rs/nns)、[ICP 账本](https://github.com/dfinity/ic/tree/master/rs/rosetta-api/icp_ledger)、[比特币](https://github.com/dfinity/bitcoin-canister)和[以太坊集成](https://github.com/dfinity/ic/tree/master/rs/ethereum)的智能合约）都是用 Rust 编写的。Rust 语言使开发人员对智能合约的各个方面（从性能到内存管理）都具有完全控制权。唯一的缺点是 Rust 相对于其他语言来说比较底层，需要开发者具有较高的编程能力。请访问[这里](https://internetcomputer.org/docs/current/developer-docs/backend/rust/)了解更多关于使用 Rust 的信息。

- Motoko：由 DFINITY 基金会支持  
  Motoko 设计用于引入新的开发人员进入 IC 生态，目前已经可以用来开发实际产品。Motoko 采用基于 [Actor](https://ic123.xyz/docs/getting-started/ic-glossary/#actor) 的编程模型，是一种类似于 TypeScript的高级语言、并具有垃圾回收机制。使用 Motoko 编写的已上线的智能合约包括 [Sonic DEX](https://github.com/sonicdex/sonic-v1)、[ICDex](https://github.com/iclighthouse/ICDex) 和 [Cycles manager](https://github.com/CycleOperators/cycles-manager)等。请访问[这里](https://internetcomputer.org/docs/current/motoko/main/motoko/)了解更多关于使用 Motoko 的信息。

- TypeScript（Beta 版）：由 [Demergent Labs](https://github.com/demergent-labs) 支持  
  该项目以 **Azle** 为名。目前 Azle 处于测试版，但已经支持在 ICP 上编写智能合约。请查看 [Azle 官方网站](https://demergent-labs.github.io/azle/)以获取最新信息。

- Python（Beta 版）：由 [Demergent Labs](https://github.com/demergent-labs) 支持  
  该项目以 **Kybra** 为名。目前 Kybra 处于测试版，但已经支持在 ICP 上编写智能合约。请查看 [Kybra 官方网站](https://demergent-labs.github.io/kybra/kybra.html)以获取最新信息。

:::info
选择合适的开发语言是一项重要决策，您需要综合考虑项目需求、开发人员技能、开发生态和性能等因素从而做出最佳选择。
:::

## 选择前端 Web 框架 {#frontend-web-framework}

ICP 的 [HTTP 网关协议](https://internetcomputer.org/docs/current/references/http-gateway-protocol-spec)允许浏览器通过 HTTP 从容器加载 JS、HTML、CSS 等 Web 资产。这意味着 Web 资产可以完全存储在链上，开发者无需使用传统的中心化 Web 服务器来托管应用程序的前端 UI。

目前典型的前端开发工作流程如下：

1. 开发者编写 HTML、JS、CSS 等代码；
2. 开发者使用 `dfx` 创建的 [Asset 容器](https://internetcomputer.org/docs/current/references/asset-canister/) 或编写自定义容器来存储链上的 Web 资产；
3. 用户在浏览器中通过 `https://<canister-id>.ic0.app` 网址、或网站的[自定义域名](https://internetcomputer.org/docs/current/developer-docs/web-apps/custom-domains/using-custom-domains)来访问 DApp；
4. 容器通过其 `http_request` 端点将 Web 资产提供给浏览器，每个 HTTP 请求都会调用该端点；
5. 当 JS 代码在浏览器中运行时，它可以使用 `agent-js` 库调用后端容器，类似于以太坊的 `web3.js` 和 `ethers.js`。

由于 ICP 支持通用的 HTML、JS 和 CSS 代码，所以 ICP 兼容任何 Web 框架。SvelteKit、React 和 Vue 已经在上线产品中成功使用，`dfx v0.17.0` 及更高版本可以用于自动生成使用这些框架的项目模板。请访问[该页面](https://internetcomputer.org/docs/current/developer-docs/web-apps/browser-js/js-frameworks)了解更多关于如何在 IC 上使用这些框架。

某些应用可以没有前端实现，例如只能由其他智能合约调用的智能合约。

:::info
目前 IC 的容器不支持现代 Web 框架的服务器端渲染（SSR）特性，这是因为服务器端渲染需要在容器中运行 JS 代码。该功能可能未来会在 Azle 中实现。

在此之前如果您需要服务器端渲染，一种解决方案是将前端托管在传统的中心化 Web 服务器、而将核心逻辑在后端容器中实现。
:::

## 应用程序架构考量 {#architecture-considerations}

在开发应用程序时，一个常见的问题是如何存储数据、以及在何处存储数据。与传统平台不同，ICP 不提供数据库。相反，ICP 自动持久化容器状态的更改，包括 Wasm 内存和稳定内存。这意味着开发者在组织和存储数据方面拥有很大的自由。推荐的做法是使用已有的库将数据存储在稳定内存中，例如 Rust 的 [stable-structures](https://github.com/dfinity/stable-structures) 库。

另一个开发者应该思考的问题是如何构建应用程序的容器结构。IC 支持由多个容器构成、并互相通信的应用程序。对于新开发者来说，一个常见的陷阱是在项目设计之初在没有对 IC 系统做出深入了解的情况下就为数百万用户设计一个理想的、庞大的应用程序。一个可行的方式是从一个简单的架构开始，考虑到可扩展性，随着用户增长逐步进化。

### 单容器架构 {#single-canister}

单容器架构是最简单的架构，也是我们推荐的大多数开发者的起点。一个单一容器可以托管整个应用程序堆栈，包括 Web 资产、核心逻辑和数据。尽管这种架构很简单，但它可以扩展到数千个用户和以 GB 计的数据。

:::info
默认情况下，`dfx` 会生成一个双容器的项目模板：其中一个是后端容器，另一个则是存储 Web 资产的前端容器。由于该模板中前端容器是只读的，所有状态和逻辑都在后端容器中，因此这种双容器架构实际上与单容器架构等同。
:::

### 按子网划分的容器架构 {#canister-per-subnet}

ICP 通过[子网](https://ic123.xyz/docs/getting-started/ic-glossary/#subnet)进行水平扩展，因此智能合约也可以通过利用更多子网来进行扩展。实现方法之一是在每个子网中拥有一个或多个容器，然后将数据分片到这些容器上以分散负载。这是最可扩展的架构，理论上可以支持数百万用户和以 TB 计的数据。

由于该架构下应用程序的数据和逻辑分布在多个子网上，需要开发者具有相当专业的分布式编程知识。与单容器架构相比，该架构的开发和维护成本要高得多。

### 按服务划分的容器架构 {#canister-per-service}

容器可以被视为微服务，其中每个容器负责应用程序的特定服务，例如管理用户、存储数据或处理数据。请注意，传统微服务架构的所有优点和缺点在这里同样适用。

由 `dfx` 生成的默认项目结构可以视为最简单的微服务架构，其中前端容器负责提供 Web 资产、而后端容器则负责应用程序的核心逻辑。

### 按用户划分的容器架构 {#canister-per-user}

这种架构基于 Web3 用户应该对其数据拥有完全主权的理念，其核心思想是为每个用户创建一个容器、并使用户成为该容器的[控制者](https://ic123.xyz/docs/getting-started/ic-glossary/#controller)。应用程序的主容器负责协调所用户容器，以实现应用程序所提供的功能。

由于用户是他们所拥有的容器的控制者，因此他们可以安装代码、决定如何参与到应用程序中、并决定要共享哪些数据。这些优势是以较大的开发成本为代价的，因为主容器需要承担、并处理潜在恶意子容器的所有可能操作所带来的风险。这是一种全新的编程方式，目前尚未完全成功实现这一愿景。有一些项目选择了这种架构，但只有 [NFID Vaults](https://nfidvaults.com/) 将容器的所有权交给了用户。

一个常见的误解是按用户划分的容器架构是最可扩展的，实际上按子网划分的容器架构更高效，因为它可以利用多个子网、而不会产生过多的容器开销。

## 开发资源 {#resource}

在了解了构成容器的组件、开发容器时可以使用的工作流程和可以使用的编程语言之后，您可以开始编写容器代码了。下面介绍一些编写容器所需要使用的工具。

### 容器开发包 (CDKs) {#cdk}

CDKs 提供编程语言，支持创建、部署和管理容器所需的功能。偏好标准开发工作流程的开发者通常会选择 CDKs 来开发应用程序。请参阅下面所列举的 CDKs 文档。 

- 由 DFINITY 维护的 CDKs 包括：
  - [Motoko](https://internetcomputer.org/docs/current/developer-docs/backend/motoko)
  - [Rust](https://internetcomputer.org/docs/current/developer-docs/backend/rust)

- 社区贡献和维护的 CDKs 则包括：
  - [Kybra：Python CDK - Beta](https://internetcomputer.org/docs/current/developer-docs/backend/python)
  - [Azle：TypeScript CDK - Beta](https://internetcomputer.org/docs/current/developer-docs/backend/typescript)
  - [C++ CDK](https://docs.icpp.world/)

### 集成开发环境 (IDEs) {#ide}

开发流程中另一个常用的重要工具是集成开发环境。集成开发环境通常与 CDKs 结合使用，用于创建、编辑和管理代码文件。任何集成开发环境都可以用于创建和编辑容器代码。以下是一些集成开发环境介绍：

- [Visual Studio Code](https://internetcomputer.org/docs/current/developer-docs/developer-tools/ide/vs-code)
- [Gitpod](https://internetcomputer.org/docs/current/developer-docs/developer-tools/ide/gitpod)
- [Motoko playground](https://internetcomputer.org/docs/current/developer-docs/developer-tools/ide/playground)

### 框架 {#framework}

您可以使用基于框架的开发流程来替代标准开发工作流程。框架提供一些额外服务，例如处理容器部署和数据托管。目前支持的框架包括：
- [Juno](https://internetcomputer.org/docs/current/developer-docs/web-apps/frameworks/juno/)
- [Bitfinity EVM](https://docs.bitfinity.network/)

### 容器编写教程 {#tutorial}

请查看以下教程资源。

- [Hello, world getting started example.](https://internetcomputer.org/docs/current/developer-docs/getting-started/hello-world)
- [Developer Journey: 1.3: Deploying your first dapp - Documentation.](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-1/1.3-first-dapp)
- [Developer Journey: 1.3: Deploying your first dapp - Video walkthrough.](https://www.youtube.com/watch?v=oBUpJ4CqmN0)
- [Developer Journey 2.1: Canister upgrades, storage, and persistence - Documentation.](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-2/2.1-storage-persistence)
- [Developer Journey 2.1: Canister upgrades, storage, and persistence - Video walkthrough.](https://www.youtube.com/watch?v=-aXjKSz_oXc)
- [Sample projects.](https://internetcomputer.org/docs/current/samples/overview)
- [Zero to dApp education video series.](https://www.youtube.com/playlist?list=PLuhDt1vhGcrcRcHvSKmxIgJAh1b3rcR7N)
- [ICP YouTube channel.](https://www.youtube.com/dfinity)

<TeamContact />
