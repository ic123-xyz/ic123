# 如何为 ic123 配置 Github Actions

GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署。本文将介绍 [ic123](https://github.com/ic123-xyz/ic123) 如何使用 Github Actions 来提高开发效率。更多关于Github Actions的信息，请参考[官方文档](https://docs.github.com/zh/actions/learn-github-actions/understanding-github-actions)。

## 环境配置 {#environment-setup}

在配置 Github Actions 之前，您需要进行一些配置工作，这些配置只需要设置一次。

### 创建身份 {#generate-identity}

您需要在本地创建一个非加密的[身份](https://ic123.xyz/docs/getting-started/ic-glossary/#identity)，这样在运行脚本时不需要输入密码。可参考如下脚本：

```
dfx identity new <identity-name> --storage-mode=plaintext
```

### 添加控制者 {#add-controller}

您需要将生成的身份添加为您的容器的控制者，当需要更新 Wasm 代码的时候会用到。可参考如下脚本：

```
dfx canister update-settings --add-controller <principal-id> <canister-id> --network=ic
```

### 权限授权 {#grant-permission}

如果您的容器是 Asset Canister 类型，您需要将 `Commit` 权限授权给生成的身份用以更新、部署 Asset Canister。

您可以用以下的脚本来检查授权情况：

```
dfx canister call <canister-id> list_permitted '(record {permission = variant {Commit}})' --network=ic
```

您可以用以下的脚本来授权：

```
dfx canister call <canister-name/canister-id> grant_permission '(record {to_principal = principal "<principal-id>"; permission = variant { Commit }})' --network=ic
```

为安全起见，在授权之前可以使用 `validate_grant_permission` 替换 `grant_permission`。

### 添加 Secret {#add-secret}

在前述步骤生成的身份需要被添加为代码仓库的 secret，具体步骤如下：
1. 在您的 Github 代码仓库页面进入 `Settings->Secrets and variables->Action` 页面。
2. 确保您在 `Secrets` 页面。
3. 点击 `New repository secret` 来生成一个新的 secret。
4. 将上一步生成的身份的 PEM 文件的内容拷贝到 `Secret` 的输入框，包含 `-----BEGIN EC PRIVATE KEY-----` 和 `-----END EC PRIVATE KEY-----`。
5. 点击 `Add Secret`。

### 添加容器 ID 变量 {#add-variable}

我们建议将您要部署的容器 ID 储存为 `Variable`，尽量避免将容器 ID 写在 Github Workflows 的 .yml 文件中。具体步骤如下：
1. 在您的 Github 代码仓库页面进入 `Settings->Secrets and variables->Action` 页面。
2. 确保您在 `Variables` 页面。
3. 点击 `New repository variable` 来生成一个新的 variable。
4. 将您要部署的容器 ID 拷贝到 `Value *Secret*` 输入框。
5. 点击 `Add Variable`。

## Github 工作流描述 {#workflow-description}

在 ic123 代码仓库中，包含[两个工作流](https://github.com/ic123-xyz/ic123/tree/main/.github/workflows)：
1. deploy-staging.yml 是用来部署到 staging 环境，当 main 分支有 push 时会自动触发。
2. deploy-production.yml 是用来部署到 production 环境，需要手动触发。

下面以 [deploy-staging.yml](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml) 为例介绍流程。

### 触发条件 {#trigger}

[这一步](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml#L4)配置了 Action 的触发条件，当往 main 分支 push 时会触发该 Action。

```
on:
  push:
    branches:
      - main
```

### 准备 {#prepare}

[这一步](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml#L23)主要是安装 `dfx`，准备默认身份。

```
        DFX_VERSION=0.14.3 sh -ci "$(curl -fsSL https://internetcomputer.org/install.sh)"
        echo "${{secrets.WEIHAILU}}" > identity.pem
        chmod 400 identity.pem
        mkdir -p ~/.config/dfx/identity/default
        mv identity.pem ~/.config/dfx/identity/default/identity.pem
        dfx identity list
```

这里的 `secrets.WEIHAILU` 就是我们在[添加 Secret](#add-secret) 步骤添加的 Secret，您需要将 `WEIHAILU` 换成您自己的 secret 名字。

### 构建 {#build}

[这一步](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml#L34)就是通过 Docusaurus 构建文档。

```
        cd docusaurus
        npm install
        npm run build
        cd ..
```

### 部署 {#deploy}

[这一步](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml#L40)将在[添加容器 ID 变量](#add-variable)步骤添加的容器 ID 写入 `canister_ids.json` 文件，并部署。

```
        rm canister_ids.json
        echo '{ "ic123_frontend": { "ic": "${{ vars.STAGING_CANISTER_ID }}" } }' > canister_ids.json
        dfx start --background --clean
        dfx deploy --network=ic
```

请注意，您需要将 `STAGING_CANISTER_ID` 换成您自己的容器 ID。

### 总结 {#summarize}

[这一步](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-staging.yml#L46)输入部署的容器链接，方便查看，例如 https://github.com/ic123-xyz/ic123/actions/runs/6864352446。


另外 [deploy-production.yml](https://github.com/ic123-xyz/ic123/blob/main/.github/workflows/deploy-production.yml) 与 deploy-staging.yml 基本相似，不同之处在于触发条件为手动，如下所示：

```
on: 
  workflow_dispatch:
```
