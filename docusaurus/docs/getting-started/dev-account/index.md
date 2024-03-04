---
title: 开发者账号
image: './img/account.png'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, developer, 开发者, account, 账号，主体，身份]
---

import TeamContact from '../../contact.md';

# 开发者账号 

![img](./img/account.png)

## 概览 {#overview}

ICP 开发者[账号](https://ic123.xyz/docs/getting-started/ic-glossary/#account)、或者[身份](https://ic123.xyz/docs/getting-started/ic-glossary/#identity)，使用公私钥对进行身份验证。账号由[主体](https://ic123.xyz/docs/getting-started/ic-glossary/#principal)来标识。主体则是一个通用的标识，用于表示用户、容器以及一些将来的其他概念。开发者账号的主体值是从账号对应的公钥中派生出来的。

ICP 开发者账号类似比特币或以太坊的钱包地址，其中一个主要的区别在于 ICP 账号没有初始余额。

## ICP 身份术语 {#icp-identity-terms}

与 ICP 身份相关的术语还包括：

- 账本账号标识符：与您的 ICP 账本账号相关联的标识符。

- 钱包：用于存储各种代币。开发者主要使用 cycles 钱包来管理开发智能合约所需的 cycles。

- 互联网身份 (Internet Identity) ：ICP 的原生身份验证服务。互联网身份不使用用户名和密码、而是使用存储在本地设备硬件中的通行密钥 (passkey)。

### 账本与钱包的区别 {#ledger-wallet-difference}

在 ICP 上，账本是一个系统容器、用于存储账号及其交易。用户拥有一个账本账号标识符，账本账户用于持有 ICP 代币。要获取您的账本账户的信息，您需要查询账本系统容器。

ICP 上的钱包则用于存储 cycles，这些 cycles 可以发送给容器、以支付其消耗的资源。

在典型的开发者工作流程中，开发者会将 ICP 代币存入对应的账本账户，然后将这些代币转换为 cycles 存储在 cycles 钱包中。

## 创建账号 {#creat-account}

要创建一个新的开发者账户，请使用 [IC SDK](https://ic123.xyz/docs/getting-started/install-dfx/) 工具 `dfx`，命令如下所示：

```bash
dfx identity new <identity_name>
```

使用 `dfx` 创建的身份是全局的，并不限于某个特定项目。身份名称必须使用以下字符：`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.-_@0123456789`

### 存储账户密钥

当使用 `dfx` 创建新的身份时，私钥会存储在 `~/.config/dfx/identity/<identity_name>/identity.pem` 文件中。请务必将此文件备份到安全的地方。

另外您可以使用 `--storage-mode` 标志来创建受密码保护的 PEM 文件、或明文 PEM 文件。以下是一些示例：

```bash
dfx identity new <identity_name> --storage-mode password-protected
```

或者：

```bash
dfx identity new <identity_name> --storage-mode plaintext
```

更多关于创建账号的信息，请参考[该指南](https://ic123.xyz/docs/getting-started/use-dfx/#create-identity)。

## 获取账号主体 {#get-principal}

您可以通过以下命令获取账号的主体标识符：

```bash
dfx identity use <identity_name>
dfx identity get-principal
```

主体标识符的格式类似于：

```
itk7v-ihlxk-ktdrh-fcnst-vkoou-orj77-52ogl-jqwj5-zpfdv-az3lr-xqe
```

您还可以通过运行以下命令来检查相应的私钥：

```bash
dfx identity export default
```

结果类似如下所示：

```
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIIGTvo7+8q+dRVoDWPVp1hBziKUEOffo1PDkY2Vn8sKMoAcGBSuBBAAK
oUQDQgAEXFFBa0oxGdamv537nusjtgVuzElEMtEbbj4dQ1xyu2WMa+PU9q9LIK26
Ar821EwGwp1Qc9Vv93FGPTvRb4HVXQ==
-----END EC PRIVATE KEY-----
```

## 导入账号 {#import-account}

您可以使用以下命令将现有的 PEM 文件导入成为您的身份：

```bash
dfx identity import <identity_name> pem_file-name
```

此命令也支持 `--storage-mode` 标志，允许导入受密码保护的 PEM 文件、或明文 PEM 文件。

## 如何充值 ICP {#top-up-icp}

当您拥有了开发者账号，您需要使用 ICP 来充值该账号。首先，您需要使用以下命令获取账户的账本账号标识符：

```bash
dfx identity use <identity_name>
dfx ledger account-id
```

该命令将返回对应账号在 ICP 账本上的账号编号：

```
e213184a548871a47fb526f3cba24e2ee2fbbc8129c4ab497ef2ce535130a0a4
```

接下来您需要将 ICP 代币发送到该账本账号标识符。您可以通过以下途径获取 ICP 代币：

- 直接通过交易所购买 ICP 代币，请查看[该页面](https://coinmarketcap.com/currencies/internet-computer/#markets)以了解可以购买 ICP 代币的交易所；

- 通过参与 [IC 治理](https://ic123.xyz/docs/ic-web3/stake-icp/)的奖励获得代币。；

- 通过 Internet Computer Association（ICA）或 DFINITY 基金会的 [grant 计划](https://ic123.xyz/docs/ecosystem-guide/dev-grants/)获得代币；

- 作为[节点提供者](https://ic123.xyz/docs/ecosystem-guide/node-provider-faq/)获得 ICP 代币，以作为提供算力的报酬。

当您的账号中收到了 ICP 代币，您可以使用以下命令查看余额：

```bash
dfx ledger balance --network ic
```

结果类似如下所示：

```
19.420000 ICP
```

更多关于 ICP 账本的命令，请参考[该指南](https://ic123.xyz/docs/getting-started/use-dfx/#ledger)。

<TeamContact />
