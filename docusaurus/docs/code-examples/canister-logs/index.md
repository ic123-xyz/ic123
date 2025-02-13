---
title: 容器日志
image: './img/canister-logs.jpg'
description: 如何使用互联网计算机 (IC) 的容器日志
keywords: [DFINITY, ICP, IC, 互联网计算机, canister, logs, 容器，日志]
---

import TeamContact from '../../contact.md';

# 容器日志

![容器日志](./img/canister-logs.jpg)

## 概览 {#overview}

本教程演示了如何使用互联网计算机 (IC) 的[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)日志功能。

容器日志功能旨在为开发人员提供途径以查看容器行为，并在容器执行发生错误时提供帮助。该功能支持以下日志信息：

- Heartbeats
- 计时器（Timers）
- `Pre/post` 更新脚本 和 `canister_init` 方法
- 更新调用
- 查询调用（仅支持在 replicated 模式下执行的查询调用）

即使在执行过程中发生错误，容器的[控制者](https://ic123.xyz/docs/getting-started/ic-glossary/#controller)仍然能够使用 `dfx canister logs` 命令检索容器日志。

## 要求 {#prerequisites}

- 下载并安装 [IC SDK](https://ic123.xyz/docs/getting-started/install-dfx/)。

## 创建工程 {#create-project}

进入您的工程目录，执行一下命令创建新的 dfx 工程。

```bash
dfx new canister_logs
```

在接下来的步骤中：

- 选择 `Rust` 作为后端语言；
- 选择 `No frontend canister`。

从而完成工程创建。

## 更新工程 {#update-project}

这里我们需要将默认代码更新，从而使用容器日志功能。

### 更新 Rust 代码

请打开 `canister_logs` 工程目录下的 `src/canister_logs_backend/src/lib.rs` 文件，并将其代码替换为如下文本：

```rust
use std::cell::RefCell;

use ic_cdk::{
    export_candid, println,
};

thread_local! {
    // create a cell that holds a counter
    static COUNTER: std::cell::RefCell<u32> = RefCell::default();
}

#[ic_cdk::update]
fn produce_logs() {
    // print the counter value
    COUNTER.with_borrow_mut(|counter| {
        println!("counter: {}", *counter);
        *counter += 1;
    });
}

export_candid!();
```

该代码定义了一个计数器 `COUNTER`，并通过 `produce_logs` 方法更新计数器、并输出日志。

### 更新 Candid 文件

由于我们更新了容器接口，我们需要更新对应的 `candid` 文件。请参照[该文档](https://internetcomputer.org/docs/current/developer-docs/backend/rust/generating-candid) 进行更新。

基本步骤如下：

- 执行如下脚本安装 `candid-extractor` 工具。
  ```bash
  cargo install candid-extractor
  ```
- 执行如下脚本编译容器。
  ```bash
  cargo build --release --target wasm32-unknown-unknown --package canister_logs_backend
  ```
- 执行如下脚本导出新的 candid 文件。
  ```bash
  candid-extractor target/wasm32-unknown-unknown/release/canister_logs_backend.wasm > canister_logs_backend.did
  ```
- 替换 `src/canister_logs_backend/canister_logs_backend.did` 文件。

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
    canister_logs_backend: http://127.0.0.1:4943/?canisterId=a3shf-5eaaa-aaaaa-qaafa-cai&id=asrmz-lmaaa-aaaaa-qaaeq-cai
...
```

## 测试 {#test}

您可以调用 `canister_logs_backend` 容器的 `produce_logs` 方法来递增计数器，并获得以下命令行输出：

```bash
dfx canister call canister_logs_backend produce_logs
2024-06-04 21:14:25.882276 UTC: [Canister asrmz-lmaaa-aaaaa-qaaeq-cai] counter: 0
()
dfx canister call canister_logs_backend produce_logs
2024-06-04 21:18:18.094003 UTC: [Canister asrmz-lmaaa-aaaaa-qaaeq-cai] counter: 1
()
dfx canister call canister_logs_backend produce_logs
2024-06-04 21:18:46.036022 UTC: [Canister asrmz-lmaaa-aaaaa-qaaeq-cai] counter: 2
()
```

然后您可以通过 `dfx canister logs` 查看容器日志：

```bash
dfx canister logs canister_logs_backend
[0. 2024-06-04T21:14:25.882276Z]: counter: 0
[1. 2024-06-04T21:18:18.094003Z]: counter: 1
[2. 2024-06-04T21:18:46.036022Z]: counter: 2
```

以上教程展示了 Rust 中最基本的容器日志用法。您也可以参考 DFINITY 基金会的官方示例、分别查看 [Rust](https://github.com/dfinity/examples/tree/master/rust/canister_logs) 和 [Motoko](https://github.com/dfinity/examples/tree/master/motoko/canister_logs) 版本。

<TeamContact />
