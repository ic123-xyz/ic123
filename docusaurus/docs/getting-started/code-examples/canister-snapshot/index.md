---
title: 容器快照
image: './img/canister-snapshot.png'
description: 如何使用互联网计算机 (IC) 的容器日志
keywords: [DFINITY, ICP, IC, 互联网计算机, canister, snapshot, 容器, 快照, recovery, 恢复, 回滚]
---

import TeamContact from '../../../contact.md';

# 容器快照

![容器快照](./img/canister-snapshot.png)

## 概览 {#overview}

本教程演示了如何使用互联网计算机 (IC) 的[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)快照功能。

当容器因未按预期工作、陷入陷阱等原因需要回滚到之前的版本，开发人员可以使用容器快照。一个容器包含编译后的 Wasm 代码和数据（例如容器 ID、配置和 Wasm 内存等），开发人员可以对已停止的容器进行快照，以保存当前的稳定内存、堆内存、数据和 Wasm 模块等信息。该快照可以在后期进行加载、以将容器回滚到快照中所保存的状态。

:::info
容器快照在 dfx 版本 0.23.0 及更新版本中得到支持。
:::

### 创建快照 {#canister-snapshot-create}

在创建快照之前必须停止容器，然后使用以下命令创建快照：

```bash
dfx canister stop <canister-name>
dfx canister snapshot create <canister-name>
```

只有容器的[控制者](https://ic123.xyz/docs/getting-started/ic-glossary/#controller)才可以创建快照或将容器回滚至快照。

该命令会返回容器的快照 ID 如下：

```bash
Created a new snapshot of canister hello_backend. Snapshot ID: 0000000000000000800000000010000a0101
```

该快照 ID 可用于以后加载快照。

如果您需要列出某个容器保存的所有快照，使用以下命令：

```bash
dfx canister snapshot list <canister-name>
```

该命令将返回快照 ID、快照大小以及快照创建的时间戳。

```bash
0000000000000000800000000010000a0101: 2.39MiB, taken at 2024-09-16 19:40:23 UTC
```

### 加载快照 {#canister-snapshot-load}

在加载已保存的容器快照之前必须停止容器，然后使用以下命令加载快照：

```bash
dfx canister stop <canister-name>
dfx canister snapshot load <canister-name> <snapshot-id>
```

加载容器快照将使用快照中的代码和数据替换容器当前的代码和数据。容器快照创建后新增到容器的任何数据都将被删除。

### 删除快照 {#canister-snapshot-delete}

请使用以下命令删除已保存的容器快照：

```bash
dfx canister snapshot delete <canister-name> <snapshot-id>
```

如果您需要在 IC 主网上操作容器快照，请在上述相关命令中添加 `--network ic` 选项。

## 要求 {#prerequisites}

- 下载并安装 [IC SDK](https://ic123.xyz/docs/getting-started/install-dfx/)。  
- 下载[示例仓库](https://github.com/dfinity/examples)。  

## 进入工程 {#enter-project}

在完成 Clone [示例仓库](https://github.com/dfinity/examples)之后，执行如下命令：

```bash
cd examples/rust/canister-snapshots
```

## 本地部署 {#deploy}

完成代码更新后，您可以执行以下脚本将您的容器部署到 IC 的本地开发环境。

```bash
dfx start --background
dfx deploy
```

如果成功，您将会看到类似如下的输出信息：

```bash
...
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    chat: http://127.0.0.1:4943/?canisterId=a3shf-5eaaa-aaaaa-qaafa-cai&id=asrmz-lmaaa-aaaaa-qaaeq-cai
...
```

## 写入数据 {#write-data}

您可以执行以下命令来更新容器数据：

```bash
dfx canister call chat append 'Hi there!'
dfx canister call chat dump
```

输出如下：

```bash
dfx canister call chat append 'Hi there!'
()
dfx canister call chat dump
(vec { "Hi there!" })
```

## 创建快照 {#create-snapshot}

您可以执行以下命令来创建快照：

```bash
dfx canister stop chat
dfx canister snapshot create chat
dfx canister start chat
```

输出如下：

```bash
dfx canister stop chat
Stopping code for canister chat, with canister_id bkyz2-fmaaa-aaaaa-qaaaq-cai
dfx canister snapshot create chat
Created a new snapshot of canister chat. Snapshot ID: 000000000000000080000000001000010101
dfx canister start chat
Starting code for canister chat, with canister_id bkyz2-fmaaa-aaaaa-qaaaq-cai
```

您可以执行以下命令查看容器快照：

```bash
dfx canister snapshot list chat
```

## 删除数据 {#remove-data}

示例容器 `chat` 提供了 `remove_spam` 方法来删除数据、用以模拟数据丢失。

```bash
dfx canister call chat remove_spam
dfx canister call chat dump
```

输出如下：

```bash
dfx canister call chat remove_spam
(0 : nat64)
dfx canister call chat dump
(vec {})
```

## 加载快照 {#load-snapshot}

您可以执行以下命令从容器快照恢复数据：

```bash
dfx canister stop chat
dfx canister snapshot list chat
dfx canister snapshot load chat 000000000000000080000000001000010101
dfx canister start chat
dfx canister call chat dump
```

输出如下：

```bash
dfx canister stop chat
Stopping code for canister chat, with canister_id bkyz2-fmaaa-aaaaa-qaaaq-cai
dfx canister snapshot list chat
000000000000000080000000001000010101: 1.61MiB, taken at 2024-08-27 18:19:20 UTC
dfx canister snapshot load chat 000000000000000080000000001000010101
Loaded snapshot 000000000000000080000000001000010101 in canister chat
dfx canister start chat
Starting code for canister chat, with canister_id bkyz2-fmaaa-aaaaa-qaaaq-cai
dfx canister call chat dump
(vec { "Hi there!" })
```

这里您可以看到我们成功的从容器快照中恢复了丢失的数据。

以上教程展示了最基本的容器快照用法。容器快照是为开发者提供的一个强大的新工具。在发生意外数据丢失、漏洞或配置错误时，容器可以快速恢复到之前的正常状态。它有助于确保关键数据和服务在面对意外事件时仍然可访问，为开发者提供了安心保障。

<TeamContact />
