---
sidebar_position: 2
---

# 如何安装 IC SDK

## 概览

[IC SDK](https://github.com/dfinity/sdk) 是用于在 ICP 区块链上创建和管理容器智能合约的软件开发包。IC SDK 默认支持 Motoko 和 Rust 编程语言，但开发人员也可以使用[其他编程语言](https://internetcomputer.org/docs/current/developer-docs/backend/choosing-language)进行开发。

## IC SDK 组件

IC SDK 安装脚本会在您的本地计算机上的默认位置安装多个组件，具体信息请参考下面表格。

|组件         |描述                                   |默认位置                                     |
|:------------|:-------------------------------------|:--------------------------------------------|
|dfx          | 命令行工具                            | `/usr/local/bin/dfx`                        |
|moc          | Motoko编译器                          |`~/.cache/dfinity/versions/<VERSION>/moc`    |
|replica      | IC本地网络二进制文件                   |`~/.cache/dfinity/versions/<VERSION>/replica`|
|uninstall.sh | 删除SDK及其所有组件的脚本              | `~/.cache/dfinity/uninstall.sh`             |
|versions     | 缓存目录，包含安装的每个SDK版本的子目录。| `~/.cache/dfinity/versions`                 |

## 安装 IC SDK

下面介绍如何安装 IC SDK。

### 在 Mac/Linux 上安装

IC SDK 在 Linux 或 macOS 12.* Monterey 或更高版本上有原生支持。请运行以下命令安装 IC SDK 的最新版本：

```
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

如果您使用的是搭载 Apple Silicon 芯片的机器，您需要安装 `Rosetta`。您可以在命令行中运行 `softwareupdate --install-rosetta` 来安装 Rosetta。

### 在 Windows 上安装

在 Windows 上没有对 `dfx` 的原生支持。不过通过安装 Windows 子系统 Linux (WSL)，您可以在 Windows 系统上运行 `dfx`。

#### 安装 WSL 2

请按照 Microsoft 的指示在 Windows 上安装 [Linux 子系统](https://learn.microsoft.com/en-us/windows/wsl/install)。确保您运行的是 Windows 10（2004版本或更高版本）或 Windows 11。

#### 支持的 WSL 版本

理论上 WSL 1和 WSL 2 都可以运行 `dfx`，然而我们建议使用 WSL 2。[WSL 版本比较](https://learn.microsoft.com/en-us/windows/wsl/compare-versions)解释了 WSL 1和 WSL 2之间的区别。

#### 检查您的 WSL 版本

您可以运行命令 `wsl --list --verbose（wsl -l -v）` 来检查您在 Windows 安装的 Linux 的版本。以下是一个示例输出：
```
NAME STATE VERSION
* Ubuntu Running 2
```

要了解更多关于 `wsl` 命令的信息，请查阅 [WSL 的命令参考文档](https://learn.microsoft.com/en-us/windows/wsl/basic-commands)。

#### 从 WSL 1 更新 

如果您已经安装了 WSL 1，请按照[升级说明](https://learn.microsoft.com/en-us/windows/wsl/install#upgrade-version-from-wsl-1-to-wsl-2)升级到 WSL 2。简言之，您需要执行以下步骤：

- 步骤1：安装 [WSL 2 Linux内核更新包](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
- 步骤2：运行以下命令将您的Linux发行版设置为版本2  
  wsl --set-version <发行版名称> 2

#### 运行 Linux

在安装了 WSL 之后，您可以通过名称启动 Linux。例如，运行命令 `Ubuntu.exe` 即可启动 `Ubuntu`。

#### 安装 dfx

安装了 WSL 后，您可以通过运行以下命令来安装 `dfx`：

```
sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
```

## 版本化目录中的核心组件

`~/.cache/dfinity/versions` 目录存储了 IC SDK 的一个或多个带有版本号的子目录。每个带版本号的子目录包含特定版本的 IC SDK 所需的所有目录和文件。例如，如果您列出 `~/.cache/dfinity/versions/0.13.1` 目录的内容，您将看到以下核心组件：

```
total 423M
drwxr-xr-x 2 pubs staff 4.0K Apr 26 15:23 base
-r-x------ 1 pubs staff  15M Jan  1  1970 canister_sandbox
-r-x------ 1 pubs staff 115M Apr 26 15:23 dfx
-r-x------ 1 pubs staff  25M Jan  1  1970 ic-admin
-r-x------ 1 pubs staff  15M Jan  1  1970 ic-btc-adapter
-r-x------ 1 pubs staff  19M Jan  1  1970 ic-canister-http-adapter
-r-x------ 1 pubs staff  23M Jan  1  1970 ic-nns-init
-r-x------ 1 pubs staff  43M Jan  1  1970 ic-ref
-r-x------ 1 pubs staff  19M Jan  1  1970 ic-starter
-r-x------ 1 pubs staff  15M Jan  1  1970 icx-proxy
-r-x------ 1 pubs staff  15M Jan  1  1970 mo-doc
-r-x------ 1 pubs staff  15M Jan  1  1970 mo-ide
-r-x------ 1 pubs staff  17M Jan  1  1970 moc
-r-x------ 1 pubs staff  78M Jan  1  1970 replica
-r-x------ 1 pubs staff 5.4M Jan  1  1970 san
```

### Motoko base 目录
IC SDK 的带版本号的子目录中的 `base` 目录包含与该版本 SDK 兼容的 Motoko 基础库模块。由于 Motoko 基础库正在快速发展，您应该使用与您安装的 SDK 版本一起打包的基础模块。

## 更新至最新版本

如果在您安装 IC SDK 后有新版本可供下载，您应该尽快安装更新的版本、以获得最新的修复和功能。

您可以使用 `dfx upgrade` 命令将当前安装的版本更新至最新版本。如果有更新的 `dfx` 版本，该命令会自动下载并安装。如果您想要了解最新版本所包含的功能和修复内容，请查阅[更新说明](https://internetcomputer.org/docs/current/other/updates/release-notes/)。

在更新版本之前，您无需卸载软件。如果您希望进行全新安装而不是升级，您可以按照[卸载 IC SDK](#卸载-ic-sdk) 进行卸载，然后重新运行下载和安装命令。

## 安装指定版本

安装脚本会查找环境变量 `DFX_VERSION`，以检查是否应安装指定版本的 IC SDK 或是安装最新版本。如果您想安装特定版本（例如 0.12.1），您可以运行以下命令：

```
DFX_VERSION=0.12.1 sh -ci "$(curl -sSL https://internetcomputer.org/install.sh)"
```

### 指定默认版本

如果在项目 `dfx.json` 的关键字 `dfx` 中指定了版本，IC SDK 将始终运行该版本。例如，如果您的 `dfx.json` 文件包含 `"dfx": "0.12.1"`，则在该项目目录下运行的任何 `dfx` 命令都将由版本为 0.12.1 的 `dfx` 执行。如果未安装指定的版本，`dfx` 将报错。

如果您要设置全局默认的 `dfx` 版本（该值会被项目的 `dfx.json` 文件中的设置覆盖），即使已经安装了该版本，也要使用所需的版本运行安装脚本。

## 从源码编译
如果您想自己编译 `dfx`，请前往 [IC SDK repo](https://github.com/dfinity/sdk)。仓库的 README 文件中包含了构建指南，请按照说明自行编译。

## 卸载 IC SDK
当您安装 IC SDK 时，安装脚本会将所需的二进制文件安装到本地目录中、并创建一个缓存。您可以通过运行位于 `.cache` 文件夹中的 `uninstall.sh` 来删除本地计算机中 IC SDK 的二进制文件和缓存。例如：

```
~/.cache/dfinity/uninstall.sh
```

如果卸载后您想立即重新安装一个干净版本的 `dfx`，您可以运行以下命令：

```
~/.cache/dfinity/uninstall.sh && sh -ci "$(curl -sSL https://internetcomputer.org/install.sh)"
```
