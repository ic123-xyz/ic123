# 门限 ECDSA 签名

## 概览 {#overview}

本教程提供了一个最小的容器智能合约、用于展示[门限 ECDSA](https://internetcomputer.org/docs/current/developer-docs/integrations/t-ecdsa/) 的相关接口。本教程主要关注如何使用派生密钥创建 ECDSA 签名。具体步骤包括：

- 容器接收到包含消息的请求；  
- 容器对消息进行哈希，并使用派生字符串作为派生路径；  
- 容器使用上述内容从门限 ECDSA 子网（门限 ECDSA 子网是专门生成门限 ECDSA 签名的子网）请求签名。

本教程提供了完整的开发介绍：从下载 IC SDK 开始直到在 IC 主网上部署代码。其中重点介绍 [Motoko](https://internetcomputer.org/docs/current/developer-docs/backend/motoko/) 编程语言编写的[版本](https://github.com/dfinity/examples/tree/master/motoko/threshold-ecdsa)，同时也提供了 Rust [版本](https://github.com/dfinity/examples/tree/master/rust/threshold-ecdsa)以供参考。

## 要求 {#prerequisites}

- 下载并安装 [IC SDK](https://ic123.xyz/docs/getting-started/install-dfx/)。  
  要求 IC SDK 的版本不低于 `0.11.0`。
- 下载[示例仓库](https://github.com/dfinity/examples)。 

## 开始 {#get-started}

在示例仓库中，`threshold-ecdsa` 的示例代码有 [Motoko](https://github.com/dfinity/examples/tree/master/motoko/threshold-ecdsa) 和 [Rust](https://github.com/dfinity/examples/tree/master/rust/threshold-ecdsa) 两个版本。

### 本地部署并测试 {#deploy-locally}

本教程使用 [Motoko](https://github.com/dfinity/examples/tree/master/motoko/threshold-ecdsa) 版本的进行演示。在完成 Clone [示例仓库](https://github.com/dfinity/examples)之后，执行如下命令：

```
cd examples/motoko/threshold-ecdsa
dfx start --background
npm install
dfx deploy
```

其中：
- `dfx start --background` 会在本地后台启动一个 IC 的运行实例。
- `dfx deploy` 将会编译 `threshold-ecdsa` 工程、并将容器部署到 IC 本地的运行实例。

如果成功，您会在命令行看到类似如下的输入：

```
Installing code for canister ecdsa_example_motoko, with canister ID gm7ld-quaaa-aaaaa-qaaqa-cai
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    ecdsa_example_motoko: http://127.0.0.1:4943/?canisterId=gl6nx-5maaa-aaaaa-qaaqq-cai&id=gm7ld-quaaa-aaaaa-qaaqa-cai
```

如果您在浏览器中打开上述的 URL，您将会看到一个如下图所示的界面，它展示了容器所开放的 `public_key` 和 `sign` 方法。

![candid_ui](./img/candid_ui.png)

## IC 主网部署 {#ic-mainnet-deployment}

在将容器部署到 IC 主网之前，您需要完成以下两件事情：

- 获取 cycles。  
  您可以参考[如何获取 cycles](https://ic123.xyz/docs/getting-started/get-cycles/) 来从 cycles 水龙头获取免费 cycles。
- 更新示例代码中的 key ID。

### 修改代码 {#modify-code}

在部署到 IC 主网之前，您需要修改 [src/ecdsa_example_motoko/main.mo](https://github.com/dfinity/examples/blob/master/motoko/threshold-ecdsa/src/ecdsa_example_motoko/main.mo#L24) 中的 `key_id` 的 `name` 属性。

关于 `key_id` 的 `name` 属性，有三个选项：

- dfx_test_key: 默认值，用来在本地 IC 的运行实例部署容器。
- test_key_1: 主测试秘钥，用于主网。
- key_1: 主生产秘钥，用于主网。

关于 `test_key_1` 和 `key_1` 的详细信息，请参考 [ECDSA 秘钥](https://internetcomputer.org/docs/current/developer-docs/integrations/t-ecdsa/t-ecdsa-how-it-works#ecdsa-keys)。

示例中 `src/ecdsa_example_motoko/main.mo` 的代码可直接部署到本地，它包含了如下两段代码：

```jsx
let { public_key } = await ic.ecdsa_public_key({
  canister_id = null;
  derivation_path = [ caller ];
  key_id = { curve = #secp256k1; name = "dfx_test_key" };
});
```

```jsx
let { signature } = await ic.sign_with_ecdsa({
  message_hash;
  derivation_path = [ caller ];
  key_id = { curve = #secp256k1; name = "dfx_test_key" };
});

```

如果您需要部署到 IC 主网，则需要将 `key_id` 的 `dfx_test_key` 值根据您的意图替换为 `test_key_1` 或 `key_1`。

### 部署到 IC 主网 {#deploy-to-ic-mainnet}

如果您从没有部署到 IC 主网，请参考 [Hello World](https://ic123.xyz/docs/getting-started/hello-world/) 示例。

部署到 IC 主网很简单，您只需在命令行执行：

```
npm install
dfx deploy --network ic
```

如果成功，您会在命令行看到类似如下的输入：

```
Deployed canisters.
URLs:
  Backend canister via Candid interface:
    ecdsa_example_motoko: https://a3gq9-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=736w4-cyaaa-aaaal-qb3wq-cai
```

## 获取公钥 {#obtain-public-key}

当您部署了容器之后会获得一个指向 Candid UI 的 URL，在这个页面您可以访问容器提供的公开方法。下图所示就是调用 `public-key` 方法：

![public_key](./img/candid_ui_public-key.png)

该方法返回的公钥是 `033c780a332c187e39aeb6acd5f1f4bd792cdce8649b31c70cde0e9d83e58bde78`。

### 代码分析 {#analyze-public-key}

如果您打开 [src/ecdsa_example_motoko/main.mo](https://github.com/dfinity/examples/blob/master/motoko/threshold-ecdsa/src/ecdsa_example_motoko/main.mo)，如下的代码展示了如何获得一个 ECDSA 公钥。

``` jsx
  let ic : IC = actor("aaaaa-aa");

  public shared (msg) func public_key() : async { #Ok : { public_key_hex: Text }; #Err : Text } {
    let caller = Principal.toBlob(msg.caller);
    try {
      let { public_key } = await ic.ecdsa_public_key({
          canister_id = null;
          derivation_path = [ caller ];
          key_id = { curve = #secp256k1; name = "dfx_test_key" };
      });
      #Ok({ public_key_hex = Hex.encode(Blob.toArray(public_key)) })
    } catch (err) {
      #Err(Error.message(err))
    }
  };
```

可以看到容器代码调用了 [IC 管理容器](https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-management-canister)的 `ecdsa_public_key` 方法。

[IC 管理容器](https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-management-canister)遵循了[外观设计模式](https://en.wikipedia.org/wiki/Facade_pattern)，也就是说并没有一个真正意义上的容器存在，这种设计让其他容器能以人性化的方式调用 IC 系统 API（就好像存在一个真实的容器）。上面的代码示例使用了 IC 管理容器创建了一个 ECDSA 公钥。而 `let ic: IC = actor("aaaaa-aa")` 则声明了 IC 管理容器。

### 容器根公钥 {#canister-root-public-key}

在调用 IC 管理容器的 `ecdsa_public_key` 方法时，您可以将 `derivation_path` 设置为空来获取容器的根公钥。

### 秘钥派生 {#key-derivation}

在 BIP-32 密钥派生层次中，需要指定一个派生路径以获取容器根密钥下的公钥。一般来说，派生路径数组中的每个元素是一个以大端序编码的 4 个字节 32 位整数，或者是任意长度的字节数组。该元素用于在派生层次结构的相应级别中派生密钥。

在上面的示例代码中，我们使用从 `msg.caller` 主体中提取的字节来填充 `derivation_path`，以便不同的调用者容器都能够通过调用的 `public_key` 方法的获取自己的公钥。

## 签名 {#sign}

计算门限 ECDSA 签名是此功能的核心。**容器本身不持有 ECDSA 密钥**，而是从专用子网持有的主密钥派生密钥。容器可以通过 IC 管理容器的接口 `sign_with_ecdsa` 请求计算签名。该请求将会被路由到持有指定密钥的子网，并使用门限密码学来计算所请求的签名。这样就可以从共享密钥和请求容器的主体标识符中，来派生进一步派生所获得的密钥或容器根密钥。因此，容器只能请求为其容器根密钥或从其派生的密钥创建签名。这意味着容器“控制”着其私有的 ECDSA 密钥，因为它们决定何时使用它们创建签名、但本身不持有私有密钥。

下图所示就是在 Candid UI 页面调用 `sign` 方法：

![sign](./img/candid_ui_sign.png)

该方法返回的签名是 `5aabde7002ceaf9e0faa4be9b2466f8e3bcbed2c782c97f4601d36897e581fbb4cb0a152f146ef708f97befdced43ceac7cabef1e32c8343e017163206a4d7f7`。

### 代码分析 {#analyze-sign}

如下的代码展示了如何获得一个 ECDSA 签名。

```jsx
  public shared (msg) func sign(message_hash: Blob) : async { #Ok : { signature: Blob };  #Err : Text } {
    assert(message_hash.size() == 32);
    let caller = Principal.toBlob(msg.caller);
    try {
      Cycles.add(10_000_000_000);
      let { signature } = await ic.sign_with_ecdsa({
          message_hash;
          derivation_path = [ caller ];
          key_id = { curve = #secp256k1; name = "dfx_test_key" };
      });
      #Ok({ signature })
    } catch (err) {
      #Err(Error.message(err))
    }
  };
```

同样，容器调用了 [IC 管理容器](https://internetcomputer.org/docs/current/references/ic-interface-spec/#ic-management-canister)的 `sign_with_ecdsa` 方法。

## 验证签名 {#verify-signature}

为了完整起见，本教程展示了如何使用相同容器和派生路径所对应的公钥来验证签名。

以下显示了如何使用 [secp256k1](https://www.npmjs.com/package/secp256k1) npm 包在 Javascript 中进行验证。

```jsx
  let { ecdsaVerify } = require("secp256k1");

  let public_key = ... // Uint8Array type, the result of calling the above canister "public_key" function.
  let hash = ...       // 32-byte Uint8Array representing a binary hash (e.g. sha256).
  let signature = ...  // Uint8Array type, the result of calling the above canister "sign" function on `hash`.

  let verified = ecdsaVerify(signature, hash, public_key);
```

在如上的例子中，调用 `ecdsaVerify` 函数始终应该返回 `true`。你也可以参考 secp256k1 npm 包所提供的[示例](https://www.npmjs.com/package/secp256k1#usage)。同样您可以在其他语言中使用支持 `secp256k1` 曲线的加密库来进行类似的验证。

## 总结 {#conclusion}

在本教程中，您部署了一个容器：
- 使用私有 ECDSA 密钥签名，而容器本身不持有 ECDSA 密钥。
- 请求公钥。
- 验证签名。
