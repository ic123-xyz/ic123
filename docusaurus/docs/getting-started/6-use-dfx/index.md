---
title: dfx 常用指令
image: './img/dfx.png'
description: ''
keywords: [DFINITY, ICP, IC, 互联网计算机, Internet Computer, Internet Computer Protocol, Web3, Crypto, Blockchain, 区块链, 加密货币, DApp, 去中心化, 去中心化应用, developer, startup, dfx, sdk]
---

import TeamContact from '../../contact.md';

# DFX 常用指令

![DFX](./img/dfx.png)

命令行工具 `dfx` 是用于创建、部署和管理互联网计算机 (IC) 平台上的去中心化应用的主要工具，用来管理身份、账本、cycles 钱包、以及容器等。`dfx` 包含有二十多个子命令，每个子命令又拥有不同的子命令，使得 `dfx` 的功能非常强大的同时也很庞大。

这篇文章的目的并不是介绍 dfx 所有命令的用法，而是试着从开发者日常开发中着眼，列举出一些常用的 `dfx` 命令。如果需要查阅 `dfx` 说明书，请参考 [dfx 官方链接](https://internetcomputer.org/docs/current/references/cli-reference/)。

## dfx

`dfx` 的基本用法如下：

```
dfx [subcommand] [flag]
```

`dfx` 命令常用的标志、参数有：
- `-h`, `--help`  
  用来输出帮助信息
- `-V`, `--version`  
  用来输出版本信息
- `--identity <identity>`  
  用来指定执行命令时所使用的用户[身份](https://ic123.xyz/docs/getting-started/ic-glossary/#identity)（适用于本地有多个身份的情况）。具体身份的管理可以参考[身份管理](#identity)章节。

`dfx` 包含有二十多个子命令，常用的有 `canister`, `deploy`, `identity`, `ledger`, `wallet` 等，后面章节会介绍到其中的一部分，具体的所有子命令请参考[官方开发文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-parent#subcommands)。

## 身份 (Identity) {#identity}

`dfx identity` 命令和其子命令可以用来管理用于执行命令和与 IC 或本地[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)执行环境通信的[身份](https://ic123.xyz/docs/getting-started/ic-glossary/#identity)信息。它的基本用法如下：

```
dfx identity [subcommand] [flag]
```

### 创建身份 {#create-identity}

`dfx identity new` 可以用来创建一个新的用户身份。它的基本用法如下：

```
dfx identity new [options] <identity-name>
```

常用的参数和选项有：
- `<identity-name>`  
  用来指定创建的身份名称。
- `--storage-mode`  
  这个参数有两个选项：
    - `password-protected`  
      这个是默认的选项，会提醒您为加密的 PEM 文件设置一个密码。
    - `plaintext`  
      有些时候会用到非加密的 PEM 文件，比如在 CI 这种不提供用户交互的情况下。

下面是一个示例：

```
dfx identity new ic_test --storage-mode plaintext
```

它创建了一个非加密的名为 `ic_test` 的身份。

### 导入身份 {#import-identity}

`dfx identity import` 可以通过导入一个 PEM 文件来创建用户身份，它的基本用法如下：

```
dfx identity import [options] <identity-name> <pem_file>
```

它常用的参数和[创建身份](##create-identity)很相似，不同之处在于：
- `<pem_file>`
  用来指定需要导入的 PEM 文件。
- `--force`
  如果指定的 identity-name 已经存在，指定 `--force` 选项会覆盖原有的身份。

下面是一个示例：

```
dfx identity import ic_test test.pem --storage-mode plaintext
```

它导入当前目录下的 `test.pem` 文件并创建一个非加密的名为 `ic_test` 的身份。

### 删除身份 {#remove-identity}

`dfx identity remove` 可以用来删除您不再需要的身份。它的基本用法如下：

```
dfx identity remove [options] <identity-name>
```

下面是一个示例：

```
dfx identity remove ic_test
```

它会删除名为 `ic_test` 的身份。

需要注意的是：对于加密的身份，在删除的时候并不需要输入身份加密时所设置的密码。

### 列举身份 {#list-identity}

`dfx identity list` 可以列举出您本机所有的身份，并显示出当前正在使用的身份，基本用法如下：

```
dfx identity list
```

以下就是笔者在本机执行该命令所输出的结果：

```
~$ dfx identity list
anonymous
default
first *
ic123
ic_test
```

以星号结尾标注的就是当前正在使用的身份。

### 使用身份 {#use-identity}

当您想要使用的身份并不是当前身份的时候，可以通过 `dfx identity use` 命令来切换身份。基本用法如下：

```
dfx identity use [flag] <identity-name>
```

下面是一个示例：

```
dfx identity use ic_test
```

它会切换当前用户身份为 `ic_test`。

### 获取主体 {#get-principal}

`dfx identity get-principal` 可以用来显示与当前用户身份相关联的[主体](https://ic123.xyz/docs/getting-started/ic-glossary/#principal)。

下面是一个示例：

```
dfx identity get-principal --identity=ic_test
```

它会返回 `ic_test` 身份所关联的主体。如果当前身份就是 `ic_test`，则可以省略 `--identity=ic_test`。

### 获取钱包 {#get-wallet}

`dfx identity get-wallet` 可以用来显示与当前用户身份相关联的 cycles 钱包。

下面是一个示例：

```
dfx identity get-wallet --network ic
```

它会返回 IC 主网上当前身份所关联的 cycles 钱包。

### 设置钱包 {#set-wallet}

`dfx identity set-wallet` 可以用来设置与当前用户身份相关联的 cycles 钱包。

下面是一个示例：

```
dfx identity set-wallet <canister-id> --network ic
```

它会在 IC 主网上设置与当前身份相关联的 cycles 钱包。

### 部署钱包 {#deploy-wallet}

`dfx identity deploy-wallet` 可以通过在一个容器里安装钱包 Wasm 代码来创建 [cycles 钱包](#cycles-wallet)。基本用法如下：

```
dfx identity deploy-wallet [flag] <canister_id>
```

下面是一个示例：

```
dfx identity deploy-wallet gastn-uqaaa-aaaae-aaafq-cai --network ic
```

它会在 IC 主网上在指定容器安装钱包 Wasm 代码。

以上就是 `dfx identity` 命令的基本用法，未列举部分请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-identity)。


## 账本 (Ledger) {#ledger}

`dfx ledger` 命令及其子命令可以用来与[账本容器](https://ic123.xyz/docs/getting-started/ic-glossary/#ledger-canister)交互。它可用于从一个容器向另一个容器进行 ICP 转账，或使用 ICP 为容器充值 cycles。

它的基本用法如下：

```
dfx ledger [subcommand] [flag]
```

### 获取账户 {#get-account-id}

`dfx ledger account-id` 命令返回与当前身份关联的账户 ID。同身份所关联的主体一样，帐户 ID 是从您的私钥派生、并用于在账本容器中表示您的身份。

下面是一个示例：

```
dfx ledger account-id
```

它返回当前身份相关联的账户 ID，类似如下：

```
03e3d86f29a069c6f2c5c48e01bc084e4ea18ad02b0eec8fccadf4487183c223
```

### 获取余额 {#get-balance}

`dfx ledger balance` 命令返回与当前账号的余额。

下面是一个示例：

```
dfx ledger balance
```

它返回当前账号的余额，类似如下：

```
2.49798000 ICP
```

### 转账 {#ledger-transfer}

您可以使用 `dfx ledger transfer` 命令将 ICP 从您在账本容器中的帐户转移到目标账户。它的基本用法如下：

```
dfx ledger transfer [options] <to_account_id> --memo memo
```

常用的参数和选项有：
- `<to_account_id>`  
  用来指定您要转账的目标账户。
- `--memo <memo>`  
  用来指定该交易的数字备忘录。
- `--amount <amount>`  
  用来指定要转账的 ICP 数量，最多可以指定八位小数的数字。可以理解为 `--amount` 是 `--icp` 和 `--e8s` 的结合。
- `--icp <icp>`  
  指定 ICP 为整数，可以单独使用或与 `--e8s` 结合使用。
- `--e8s <e8s>`  
  指定 e8s 为整数。`e8` 是 ICP 的最小单位，例如 `1.05000000` 是 `1` 个 `ICP` 和 `5000000` 个 `e8s` 的组合。它可以单独使用或与 `--icp` 结合使用。
- `--fee <fee>`  
  用来指定该交易的费用，默认是 `10000 e8s`。

下面是一个示例：

```
dfx ledger transfer dd81336dbfef5c5870e84b48405c7b229c07ad999fdcacb85b9b9850bd60766f --memo 12345 --icp 1 --network ic
```

它在 IC 主网上向指定账户发起一笔数量为 `1 ICP` 的交易。 返回信息类似如下所示：

```
Transfer sent at BlockHeight: 59513
```

结束后您可以通过 `dfx ledger balance --network ic` 命令查询当前账号的余额。


### 充值 cycles {#top-up-cycles}

您可以使用 `dfx ledger top-up` 命令使用通过 ICP 铸造而来的 cycles 给容器充值。 它的基本用法如下：

```
dfx ledger top-up [options] canister_id [flag] --network ic
```

它常用的参数和[转账](#ledger-transfer)很相似，比如：`--amount`, `--icp`, `--e8s`, `--fee` 等。不同之处在于：
- `<canister_id>`  
  用来指定您要充值的容器 ID。

下面是一个示例：

```
dfx ledger top-up --icp 1 5a46r-jqaaa-aaaaa-qaadq-cai --network ic
```

它在 IC 主网上向指定容器充值价值为 `1 ICP` 的 cycles。如果转账成功会返回类似如下所示信息：

```
Transfer sent at BlockHeight: 59482
Canister was topped up!
```

### 创建容器 {#ledger-create-canister}

您可以使用 `dfx ledger create-canister` 命令来在 IC 上创建容器、并充值价值为指定 ICP 的 cycles。 它的基本用法如下：

```
dfx ledger create-canister <controller> [options]  [flag] --network ic
```

它常用的参数和[转账](#ledger-transfer)很相似，比如：`--amount`, `--icp`, `--e8s`, `--fee` 等。不同之处在于：
- `<controller>`  
  用来指定新创建容器的[控制者](https://ic123.xyz/docs/getting-started/ic-glossary/#controller)。

- `--subnet-type <subnet-type>`
  用来指定子网类型。如果没有指定，容器会被创建在随机的默认应用子网上。  
  目前支持的类型是 `fiduciary`，请参考[论坛文章](https://forum.dfinity.org/t/introducing-the-first-fiduciary-subnet/17594)获取详细信息。

下面是一个示例：

```
dfx ledger create-canister tsqwz-udeik-5migd-ehrev-pvoqv-szx2g-akh5s-fkyqc-zy6q7-snav6-uqe --amount 1.25 --network ic
```

它在 IC 主网上创建一个容器，将指定的主体设置为容器的控制者，并向充值价值为 `1.25 ICP` 的 cycles。如果创建成功会返回类似如下所示信息：

```
Transfer sent at BlockHeight: 20
Canister created with id: "53zcu-tiaaa-aaaaa-qaaba-cai"
```

以上就是 `dfx ledger` 命令的基本用法，未列举部分请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-ledger)。


## 钱包 (Wallet) {#cycles-wallet}

容器需要 cycles 来执行操作、并为所使用的资源付费，用户和开发人员通过一种称为 cycles 钱包的特殊容器来管理 cycles 的分配和所有权。

目前 cycles 钱包是一种复杂的解决方案，它本质上是一个容器、自身也会消耗 cycles。如果对应的容器 ID 在迁移过程中遗失，则会丢失 cycles。所以目前 DFINITY 基金会在开发的一个新功能就是 cycles 账本，用来简化 cycles 的管理。Cycles 账本将作为单个全局账本容器来部署，它将符合 ICRC-2 标准，并且还将与 NNS 容器、用户容器交互，以提供账本特定功能，例如可以使用 cycles 创建新容器、向容器发送 cycles 和接受转入的 cycles。更多关于 cycles 账本的信息请参考[这里](https://internetcomputer.org/blog/2023/09/06/news-and-updates/update#upcoming-feature-cycles-ledger)。

因为 cycles 账本预计近期将会推出，这里关于 cycles 钱包我们只做简单介绍。

### 创建钱包 {#create-wallet}

常用的创建钱包的方式有两种：一种是通过兑换 cycles 优惠券；一种是通过创建容器、并安装钱包的 Wasm 代码。

#### 兑换 cycles 优惠券

请参考[如何获得免费 cycles](https://ic123.xyz/docs/getting-started/get-cycles/#%E5%A6%82%E4%BD%95%E8%8E%B7%E5%BE%97%E5%85%8D%E8%B4%B9-cycles) 文档。

其中如下的命令行会帮助您创建一个 cycles 钱包。

```
dfx wallet --network ic redeem-faucet-coupon <your-coupon-code>
```

您可以通过以下命令来查看您的钱包余额。

```
dfx wallet balance --network ic
```

#### 手动创建

按照以下步骤，您可以手动创建 cycles 钱包：

- 通过 `dfx ledger create-canister` 创建一个新的容器，请参考[这里](#create-canister)；  

- 通过 `dfx identity deploy-wallet` 在容器里安装钱包 Wasm 代码，请参考[这里](#deploy-wallet)；  

- 通过 `dfx identity get-wallet` 来查看跟当前身份关联的 cycles 钱包，请参考[这里](#get-wallet)。  

### 获取余额 {#cycles-balance}

`dfx wallet balance` 命令返回与当前 cycles 钱包的余额。

下面是一个示例：

```
dfx wallet balance --network ic
```

它返回当前 cycles 钱包的余额，类似如下：

```
15.292 TC (trillion cycles)
```

### 转账 {#send-cycles}

您可以通过 `dfx wallet send` 将 cycles 从一个 cycles 钱包发送到另一个 cycles 钱包。它的基本用法如下：

```
dfx wallet send [flag] <destination> <amount> --network <network>
```

常用的参数和选项有：
- `<destination>`  
  用来指定您要转账的 cycle 钱包的容器 ID。
- `--amount <amount>`  
  用来指定要转账的 cycles 数量。

下面是一个示例：

```
dfx wallet send r7inp-6aaaa-aaaaa-aaabq-cai 2000000000
```

它将会从跟当前身份相关联的 cycles 钱包发送 `2000000000` 个 cycles 到指定 cycles 钱包地址。


以上就是 `dfx wallet` 命令的基本用法，未列举部分请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-wallet)。

## 容器 (Canister) {#canister}

您可以使用 `dfx canister` 命令来和 IC 或者本地的容器执行环境交互。大多数情况，你可以通过 `dfx canister` 命令来管理[容器](https://ic123.xyz/docs/getting-started/ic-glossary/#canister)的生命周期、执行一些任务（比如调用容器方法）。

它的基本用法如下：

```
dfx canister <subcommand> [flags]
```

### 创建 {#create-canister}

`dfx canister create` 可以用来创建一个新的容器。它的基本用法如下：

```
dfx canister create [option] [flag] [--all | canister_name]
```

常用的参数和选项有：
- `--controller <principal>`  
  用来指定新创建的容器的[控制者](https://ic123.xyz/docs/getting-started/ic-glossary/#controller)。  
- `-with-cycles <number-of-cycles>`  
  用来指定要充值的 cycles 数量，该数量会从 cycles 钱包里面扣除。
- `--specified-id <principal>`  
  用来指定所创建的容器的 ID。
- `<canister_name>`  
  用来指定所创建的容器名字，该容器名字必须在项目的 `dfx.json` 文件中已经存在。
- `--all`  
  如果没有指定所创建的容器名字，而是提供了 `--all` 参数，则会创建所有在 `dfx.json` 中已经配置的容器。

这里并未一一列举 `dfx canister create` 所有的参数，如需了解请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-canister#dfx-canister-create)。

下面是一个示例：

```
dfx canister create --with-cycles 8000000000000 --all
```

该命令会创建所有 `dfx.json` 中配置的容器，并指定初始 cylces 数量为 8000000000000。

与 [dfx ledger create-canister](#ledger-create-canister) 通过 ICP 来创建容器不同，虽然两者都能创建容器，但 `dfx canister create` 通过 cycles 钱包转入 cycles，并且提供了更精细的控制，比如可以指定 memory、compute 分配的大小。

### 删除 {#delete-canister}

`dfx canister delete` 可以用来删除容器，并将剩余的 cycles 转出到您的 cycles 钱包。它的基本用法如下：

```
dfx canister delete [flag] [--all | canister_name]
```

常用的参数和选项有：
- `<canister_name>`  
  用来指定所创建的容器名字或 ID。
- `--all`  
  如果没有指定所创建的容器名字，而是提供了 `--all` 参数，则会创建所有在 `dfx.json` 中已经配置的容器。

需要注意的是，`dfx canister delete` 必须要在一个 dfx 工程的目录下运行。

如果您已经没有本地工程环境，可以尝试以下示例从 IC 主网删除一个容器：

1. 执行 `mkdir dfx_deleting` 创建 `dfx_deleting` 目录；  
2. 执行 `cd dfx_deleting` 进入该目录；  
3. 执行 `echo '{}' > dfx.json` 生成一个空的 `dfx.json` 文件；
4. 执行 `dfx canister delete <canister_id> --network ic` 通过容器 ID 来删除给定的容器。

您可以在运行该示例前、后调用 `dfx wallet balance --network ic` 来查看 cycles 余额变化。

### 充值 cycles {#deposit-cycles}

`dfx canister deposit-cycles` 命令可以用来从 cycles 钱包给指定容器充值 cycles。它的基本用法如下：

```
dfx canister deposit-cycles [amount of cycles] [--all | canister_name]
```

常用的参数和选项有：
- `<canister_name>`  
  用来指定所需充值的容器名字或 ID。
- `--all`  
  如果没有指定所需充值的容器名字，而是提供了 `--all` 参数，则会充值所有在 `dfx.json` 中已经配置的容器。

下面是一个示例：

```
dfx canister deposit-cycles 2000000000000 --all
```

该命令会给所有 `dfx.json` 中配置的容器充值数量为 2000000000000 的 cylces。

### 查看容器 ID {#canister-id}

`dfx canister id` 命令可以用来查看指定容器的 ID。它的基本用法如下：

```
dfx canister id <canister-name>
```

下面是一个示例：

```
dfx canister id hello_world --network ic
```

### 查看容器信息 {#canister-info}

`dfx canister info` 命令可以用来查看指定容器的信息。它的基本用法如下：

```
dfx canister info <canister-id>
```

下面是一个示例：

```
dfx canister info rrkah-fqaaa-aaaaa-aaaaq-cai --network ic
```

该命令会输出 nns governance 容器的相关信息如下：

```
Controllers: r7inp-6aaaa-aaaaa-aaabq-cai
Module hash: 0x3eadce8399b6bc9450bfb8bb54adefc1e27b2564146684d4c6d41a62c4110b73
```

### 安装容器代码 {#canister-install}

`dfx canister install` 命令可以用来安装容器代码。它的基本用法如下：

```
dfx canister install [flag] [option] [--all | canister_name]
```

常用的参数和选项有：
- `<canister_name>`  
  用来指定所需安装代码的容器名字或 ID。
- `--all`  
  如果没有指定所需安装代码的容器名字，而是提供了 `--all` 参数，则会安装所有在 `dfx.json` 中已经配置的容器。
- `--wasm <file.wasm>`  
  用来指定所需安装的 Wasm 代码文件。如果这里指定了，`dfx.json` 中配置的则会被忽略。

这里并未一一列举 `dfx canister install` 所有的参数，如需了解请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-canister#dfx-canister-install)。

### 更新容器设置 {#canister-update-settings}

`dfx canister update-settings` 命令可以用来更改容器设置。它的基本用法如下：

```
dfx canister update-settings [flags] [options] [canister_name | --all]
```

常用的参数和选项有：
- `<canister_name>`  
  用来指定所需更新的容器名字或 ID。
- `--all`  
  如果没有指定所需更新的容器名字，而是提供了 `--all` 参数，则会更新所有在 `dfx.json` 中已经配置的容器。
- `--add-controller <principal>`
  给指定容器添加控制者。
- `--remove-controller <principal>`
  删除指定容器的控制者。

这里并未一一列举 `dfx canister update-settings` 所有的参数，如需了解请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-canister#dfx-canister-update-settings)。

下面是一个示例：

```
dfx canister update-settings --add-controller <principal-id> <canister-id> --network=ic
```

该命令会给指定的容器添加一个新的控制者。

### 调用容器方法 {#canister-call}

`dfx canister call` 命令可以调用容器上的方法。它的基本用法如下：

```
dfx canister call [option] <canister_name> <method_name> [argument] [flag]
```

常用的参数和选项有：
- `canister_name`  
  用来指定所调用的容器名字或 ID。
- `method_name`  
  用来指定所调用的方法名字。
- `argument`
  给指定所调用方法的参数。

下面是一个示例：

```
dfx canister call qvhir-riaaa-aaaan-qekqa-cai greet --network ic
```

该命令会给调用 `qvhir-riaaa-aaaan-qekqa-cai greet` 容器上的 `greet` 方法。

这里并未一一列举 `dfx canister call` 所有的参数，如需了解请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-canister#dfx-canister-call)。

以上就是 `dfx canister` 命令的基本用法，未列举部分请参考[官方文档](https://internetcomputer.org/docs/current/references/cli-reference/dfx-canister)。

## 开发相关命令 {#development}

### 启动 {#dfx-start}

您可以使用 `dfx start` 命令启动本地容器执行环境和 Web 服务器进程。这样您可以通过 `dfx deploy` 命令将容器代码部署到本地容器执行环境，进而在开发过程中测试您的 dapp。

默认情况下，所有本地 dfx 工程都将共同使用一个本地容器执行环境，您可以从任何目录运行 `dfx start` 和 `dfx stop`。

该命令的基本用法如下：

```
dfx start [option] [flag]
```

该命令的参数和选项较多，常用的如下：
- `--background`  
  在后台启动本地容器执行环境和 Web 服务器进程，并等待回复后才返回到命令行。
- `--clean`  
  在启动本地容器执行环境和 Web 服务器进程时，清除项目缓存中的检查点。您可以使用此选项将项目缓存设置为新状态，进行调试或者故障排除。
- `--host <host>`  
  指定主机接口 IP 地址和端口号以绑定前端。

下面是一个示例：

```
dfx start
```

该命令会在当前命令行中启动本地容器执行环境和 Web 服务器进程，您需要打开一个新的命令行来运行其他命令。

您可以使用以下命令来在后台运行一个本地容器执行环境：

```
dfx start --background
```

### 停止 {#dfx-stop}

您可以使用 `dfx stop` 命令停止当前在计算机上运行的本地容器执行环境。为了模拟与 IC 的连接，本地容器执行环境会在启动它们的终端中或后台持续运行，所以需要手动停止。

该命令的基本用法如下：

```
dfx stop [flag]
```

该命令的用法比较简单，除了通用的一些参数，并没有提供特定的参数。运行以下命令就会停止您的本地容器执行环境。

```
dfx stop
```

### 创建 {#dfx-new}

您可以使用 `dfx new` 命令创建一个新的 IC 工程。该命令会创建一个默认的项目结构，其中包含了一个 dapp 的模板，您可以用来作为基础进而修改成为您所需要的 dapp。它的基本用法如下：

```
dfx new <project_name> [flag]
```

常用的参数和选项有：
- `project_name`  
  用来指定所创建的工程名称。
- `--no-frontend`  
  用来**跳过**安装前端模板代码，创建仅包括一个 .txt 文件的 [Asset 容器](https://internetcomputer.org/docs/current/references/asset-canister)。如果没有指定该选项，并检测到您的计算机上未安装 node.js，则会以 `--no-frontend` 为默认行为执行。
- `--frontend`  
  用来安装前端模板代码。如果没有指定该选项，并检测到您的计算机上已安装 node.js，则会以 `--frontend` 为默认行为执行。如果您的计算机上当前未安装 node.js，而您指定了 `--frontend` 选项，则会在创建项目时尝试安装 node.js。

下面是一个示例：

```
dfx new my_test_project
```

该命令将创建一个名为 `my_test_project` 的新工程，该工程包括默认项目目录结构和项目的 Git 存储仓库。

您可以用带有 `--dry-run` 的命令来预览将要创建的文件。

```
dfx new my_test_project --dry-run
```

### 构建 {#dfx-build}

您可以使用 `dfx build` 命令将程序编译为可在 IC 上部署的 WebAssembly 模块。该命令会编译工程的 `dfx.json` 配置文件中所定义的程序，并使用该配置文件中 `canisters` 部分所配置的信息查找要编译的源代码。

请注意，您只能在工程目录下运行此命令。例如，如果您的项目名称是 hello_world，则您的当前工作目录必须是 hello_world 目录或其任一子目录。

该命令的基本用法如下：

```
dfx build [flag] [option] [--all | canister_name]
```

常用的参数和选项有：
- `--network <network>`  
  指定您要连接的网络别名或 URL。您可以使用此选项覆盖 dfx.json 配置文件中指定的网络。
- `--all`  
  构建项目 dfx.json 文件中配置的所有容器，它是 `dfx build` 的默认选项。
- `canister_name`  
  指定您需要构建的容器名称。如果您仅仅想构建某一个容器，请在不使用 --all 选项的同时提供一个容器名称作为参数。请注意，该容器名称必须与 dfx.json 的 `canisters` 部分中的某一个容器名称匹配。

下面是一个 dfx.json 的示例。

```
{
    "canisters": {
        "hello_world: {
            "main": "src/hello_world/main.mo",
            "type": "motoko"
        },
        "hello_world_assets": {
            "dependencies": [
                "hello_world"
            ],
            "frontend": {
                "entrypoint": "src/hello_world_assets/public/index.js"
            },
            "source": [
                "src/hello_world_assets/assets",
                "dist/hello_world_assets/"
            ],
            "type": "assets"
        }
    },
    "defaults": {
        "build": {
            "packtool": ""
        }
    },
    "version": 1
}
```

执行以下命令会构建 `hello_world` 和 `hello_world_assets` 这两个容器。

```
dfx build
```

如果您只想构建后端容器 `hello_world` ，可以运行如下命令：

```
dfx build hello_world
```

### 部署 {#dfx-deploy}

您可以使用 `dfx deploy` 命令注册、构建和部署 dapp。通过提供不同的参数，您可以在本地容器执行环境、IC 主网 或指定的测试网络上执行该命令。默认情况下，该命令将部署工程 dfx.json 配置文件中定义的所有容器。

该命令等价于以下命令集，使得您能够运行一个命令来简化开发流程：

```
dfx canister create --all
dfx build
dfx canister install --all
```

同 `dfx build` 一样，您只能在工程目录下运行此命令。

该命令的基本用法如下：

```
dfx deploy [flag] [option] [canister_name]
```

常用的参数和选项有：
- `--network <network>`  
  指定您要连接的网络别名或 URL。默认使用本地容器执行环境。
- `--ic`  
  `--network ic` 的别名。
- `--argument <argument>`  
  指定使用 Candid 语法在部署期间向容器传递参数。
- `--with-cycles <number-of-cycles>`  
  可以指定工程中容器的初始 cycles 数量。
- `canister_name`  
  指定您需要部署的容器名称。请注意，该容器名称必须与 dfx.json 的 `canisters` 部分中的某一个容器名称匹配。

下面是一个示例：

```
dfx deploy --with-cycles 8000000000000 --network ic
```

该命令会将 dfx.json 中所定义的容器部署到 IC 主网，每个容器都包含初始 8000000000000 cycles 数量。

## 其他 {#miscellaneous}

### 帮助 {#dfx-help}

您可以使用 `dfx help` 命令来查看 dfx 及其子命令的使用方法。它的基本用法如下：

```
dfx help [subcommand]
```

常用的参数有：
- `subcommand`  
  用来指定您想要查看的子命令。

下面是一个示例，用来查看 dfx 命令的用法。

```
dfx help
```

而下面的命令则可以查看子命令 new 的具体用法。

```
dfx help new
```

### 升级 {#dfx-upgrade}

您可以使用 `dfx upgrade` 命令升级在本地计算机上运行的 SDK 组件。此命令会检查您当前安装的 SDK 版本与 manifest.json 文件中指定的最新公开版本之间的差异。如果在本地检测到旧版本的 SDK，则 `dfx upgrade` 命令会自动从 CDN 获取最新版本。

它的基本用法如下：

```
dfx upgrade [flag] [option]
```

常用的参数有：
- `--current-version <version>`  
  用来指定当前版本，此选项使您可以使用命令行传递的版本覆盖当前标识为最新的版本。

下面是一个示例，用来更新您的 SDK 版本。

```
dfx upgrade
```

### ping {#dfx-ping}

使用 `dfx ping` 命令可以检查与 IC 主网或测试网络的连接。

请注意：
- 如果要测试与本地服务器的连接，您只能从工程目录下运行此命令。
- 如果您要测试与 IC 主网的连接，您可以从任何目录运行 `dfx ping ic` 命令。

它的基本用法如下：

```
dfx ping [provider] [flag]
```

常用的参数有：
- `provider`  
  用来指定需要测试的网络。

下面是一个示例，用来测试与 IC 主网的连接。

```
dfx ping ic
```

## 总结

除了本文列举的关于身份、账本、cycles 钱包、容器以及开发相关的命令，`dfx` 命令还有更多的子命令，目前就不在一一列举，后续如果有需要可以根据大家反馈继续增加，也欢迎大家参与贡献。

<TeamContact />