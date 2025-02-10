import TeamContact from '../../contact.md';

# Internet Identity 集成

## 概览 {#overview}

这个教程展示了如何将 `Internet Identity` 集成到 dapp 前端，并在后端容器中使用用户身份。

本教程将详述将使用 `dfx new` 生成默认的模板与 `Internet Identity` 集成所需的所有步骤。有关 `dfx new` 的文档，请参考[这里](../../getting-started/use-dfx/index.md#dfx-new)。 完成本教程后，您的`dapp` 将具备以下功能：

- 提供 `Internet Identity` 登录按钮。
- 对 `Internet Identity` 提供的[主体](https://ic123.xyz/docs/getting-started/ic-glossary/#principal)进行问候。

本教程基于 Motoko 版本的示例，目前没有 Rust 版本。

## 要求 {#prerequisites}

- 下载并安装 [IC SDK](https://ic123.xyz/docs/getting-started/install-dfx/)。  
- 下载[示例仓库](https://github.com/dfinity/examples)。 

## 创建新工程

您可以选择一个本地目录创建一个新的工程。这里我们在[示例仓库](https://github.com/dfinity/examples)下的 `motoko/internet_identity_integration` 的目录下，创建一个名为 `greet` 的工程。

```
cd examples/motoko/internet_identity_integration
dfx new greet
cd greet
```

执行完以上脚本后，在您的 `greet` 目录下会产生如下结构的文件：

```
├── README.md
├── dfx.json
├── package.json
├── src
│   ├── greet_backend
│   │   └── main.mo
│   └── greet_frontend
│       ├── assets
│       │   ├── favicon.ico
│       │   ├── logo2.svg
│       │   ├── main.css
│       │   └── sample-asset.txt
│       └── src
│           ├── index.html
│           └── index.js
└── webpack.config.js
```

:::info

不同版本的 dfx 所生成的文件会有些许不同，大体上会如上述结构所示，不影响后续步骤。

:::

## 添加 Internet Identity

将下面的代码添加到 `dfx.json` 的 `canisters` 部分。

```
"internet_identity": {
  "type": "custom",
  "candid": "https://github.com/dfinity/internet-identity/releases/latest/download/internet_identity.did",
  "wasm": "https://github.com/dfinity/internet-identity/releases/latest/download/internet_identity_dev.wasm.gz",
  "remote": {
    "id": {
      "ic": "rdmx6-jaaaa-aaaaa-aaadq-cai"
    }
  },
  "frontend": {}
}
```

该代码将向您的工程添加一个预构建的 `Internet Identity` 容器。其中：
- `remote` 属性指向了 IC 主网上的 `Internet Identity` 容器，因此您添加的容器 `Internet Identity` 仅在本地部署。
- `frontend` 属性告诉 dfx 此容器确实具有前端（因此在部署后会在命令行打印输出前端 URL，详情请参见下一步）。这些 URLs 将指向 `Internet Identity` 的最新 dev build 版本。dev build 版本具有一些特殊功能，使得 `Internet Identity` 在本地开发环境中更容易使用（例如可预测的验证码，不需要 WebAuthn 等）。

另外您还需要将 "internet_identity" 添加到 "greet_frontend" 的依赖中，请参见[最终代码](https://github.com/dfinity/examples/blob/master/motoko/internet_identity_integration/dfx.json)查看应运行的完整代码。

## 本地部署

您可以执行以下脚本将您的容器部署到 IC 的本地开发环境：

```
dfx start --clean --background
dfx deploy
```

如果成功，您将会看到类似如下的输出信息：

```
...
Deployed canisters.
URLs:
  Frontend canister via browser
    greet_frontend: http://127.0.0.1:4943/?canisterId=h2uti-feaaa-aaaaa-qaava-cai
    internet_identity: http://127.0.0.1:4943/?canisterId=h5vv4-i4aaa-aaaaa-qaavq-cai
  Backend canister via Candid interface:
    greet_backend: http://127.0.0.1:4943/?canisterId=hiser-juaaa-aaaaa-qaawa-cai&id=htxyu-tmaaa-aaaaa-qaauq-cai
    internet_identity: http://127.0.0.1:4943/?canisterId=hiser-juaaa-aaaaa-qaawa-cai&id=h5vv4-i4aaa-aaaaa-qaavq-cai
...
```

如果您点击 internet_identity 的前端链接，您就能创建 `Internet Identity` 并创建 `Passkey` 了。

:::info

由于最近 `Internet Identity` 的重构，在 Chrome 或 Firefox 浏览器中如上所示的 internet_identity 的前端链接不能正常访问，您可以使用 `http://<canister_id>.localhost:4943` 来替代。更多信息可参考 [Internet Identity 文档](https://github.com/dfinity/internet-identity?tab=readme-ov-file#local-replica)。

例如，上述示例的 internet_identity 前端链接在 Chrome 中为：
`http://h5vv4-i4aaa-aaaaa-qaavq-cai.localhost:4943`

:::

## 添加 Internet Identity URL 环境变量

您希望您的 dapp 可以根据部署位置（本地或主网）集成不同的 `Internet Identity`：

- 在本地部署时，应用程序应使用 `Internet Identity` URL http://127.0.0.1:4943/?canisterId=<II_CANISTER_ID>。   
  在 Chrome 或 Firefox 中，则应使用 http://<canister_id>.localhost:4943 。
- 在主网上，则应使用 https://identity.ic0.app。

您可以通过在 webpack 中自定义名为 `II_URL` 的环境变量来达到这个目的。

请打开 `webpack.config.js`` 文件并将其内容替换为以下内容：

```
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === "production" ? "ic" : "local");
function initCanisterEnv() {
  let localCanisters, prodCanisters;
  try {
    localCanisters = require(path.resolve(
      ".dfx",
      "local",
      "canister_ids.json"
    ));
  } catch (error) {
    console.log("No local canister_ids.json found. Continuing production");
  }
  try {
    prodCanisters = require(path.resolve("canister_ids.json"));
  } catch (error) {
    console.log("No production canister_ids.json found. Continuing with local");
  }

  const canisterConfig = network === "local" ? localCanisters : prodCanisters;

  return Object.entries(canisterConfig).reduce((prev, current) => {
    const [canisterName, canisterDetails] = current;
    prev[canisterName.toUpperCase() + "_CANISTER_ID"] =
      canisterDetails[network];
    return prev;
  }, {});
}
const canisterEnvVariables = initCanisterEnv();

const isDevelopment = process.env.NODE_ENV !== "production";

const internetIdentityUrl = network === "local" ? `http://localhost:4943/?canisterId=${canisterEnvVariables["INTERNET_IDENTITY_CANISTER_ID"]}` : `https://identity.ic0.app`

const frontendDirectory = "greet_frontend";

const frontend_entry = path.join("src", frontendDirectory, "src", "index.html");

module.exports = {
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: {
    // The frontend.entrypoint points to the HTML file for this build, so you need
    // to replace the extension to `.js`.
    index: path.join(__dirname, frontend_entry).replace(/\.html$/, ".js"),
  },
  devtool: isDevelopment ? "source-map" : false,
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
    fallback: {
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      events: require.resolve("events/"),
      stream: require.resolve("stream-browserify/"),
      util: require.resolve("util/"),
    },
  },
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist", frontendDirectory),
  },

  // Depending in the language or framework you are using for
  // front-end development, add module loaders to the default
  // webpack configuration. For example, if you are using React
  // modules and CSS as described in the "Adding a stylesheet"
  // tutorial, uncomment the following lines:
  // module: {
  //  rules: [
  //    { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
  //    { test: /\.css$/, use: ['style-loader','css-loader'] }
  //  ]
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, frontend_entry),
      cache: false,
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development",
      II_URL: internetIdentityUrl,
      ...canisterEnvVariables,
    }),
    new webpack.ProvidePlugin({
      Buffer: [require.resolve("buffer/"), "Buffer"],
      process: require.resolve("process/browser"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: `src/${frontendDirectory}/src/.ic-assets.json*`,
          to: ".ic-assets.json5",
          noErrorOnMissing: true
        },
      ],
    }),
  ],
  // proxy /api to port 4943 during development.
  // if you edit dfx.json to define a project-specific local network, change the port to match.
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:4943",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api",
        },
      },
    },
    static: path.resolve(__dirname, "src", frontendDirectory, "assets"),
    hot: true,
    watchFiles: [path.resolve(__dirname, "src", frontendDirectory)],
    liveReload: true,
  },
};
```

其中您需要关注的是

```
const internetIdentityUrl = network === "local" ? `http://localhost:4943/?canisterId=${canisterEnvVariables["INTERNET_IDENTITY_CANISTER_ID"]}` : `https://identity.ic0.app`
```

同样，您如果需要在 Chrome 或 Firefox 中测试您的 dapp，请将 `http://localhost:4943/?canisterId=${canisterEnvVariables["INTERNET_IDENTITY_CANISTER_ID"]}` 替换为 `http://${canisterEnvVariables["INTERNET_IDENTITY_CANISTER_ID"]}.localhost:4943`。

:::info

上述代码有可能更新，请参考 [webpack.config.js](https://github.com/dfinity/examples/blob/master/motoko/internet_identity_integration/webpack.config.js) 获取最新版本。

:::

## 添加 auth-client 库

接下来您需要在您的 dapp 前端添加 auth-client 库，它是 DFINITY 提供的用来方便集成 `Internet Identity` 的开发包。请在命令行执行以下脚本：

```
npm install @dfinity/auth-client @dfinity/identity --save-dev
```

## 添加登录按钮

这一步您将在 `src/greet_frontend/src/index.html` 中添加登录和 greet 按钮，如下所示：

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>greet</title>
    <base href="/" />
    <link rel="icon" href="favicon.ico" />
    <link type="text/css" rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <img src="logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form>
        <button id="login">Login!</button>
      </form>
      <br />
      <form>
        <button id="greet">Click Me!</button>
      </form>
      <section id="greeting"></section>
    </main>
  </body>
</html>
```

:::info

上述代码有可能更新，请参考 [index.html](https://github.com/dfinity/examples/blob/master/motoko/internet_identity_integration/src/greet_frontend/src/index.html) 获取最新版本。

:::

## 交互

您需要在 `src/greet_frontend/src/index.js` 中添加如下代码使得登录按钮能够正常工作：

```jsx
import {createActor, greet_backend} from "../../declarations/greet_backend";
import {AuthClient} from "@dfinity/auth-client"
import {HttpAgent} from "@dfinity/agent";

let actor = greet_backend;

const greetButton = document.getElementById("greet");
greetButton.onclick = async (e) => {
    e.preventDefault();

    greetButton.setAttribute("disabled", true);

    // Interact with backend actor, calling the greet method
    const greeting = await actor.greet();

    greetButton.removeAttribute("disabled");

    document.getElementById("greeting").innerText = greeting;

    return false;
};

const loginButton = document.getElementById("login");
loginButton.onclick = async (e) => {
    e.preventDefault();

    // create an auth client
    let authClient = await AuthClient.create();

    // start the login process and wait for it to finish
    await new Promise((resolve) => {
        authClient.login({
            identityProvider: process.env.II_URL,
            onSuccess: resolve,
        });
    });

    // At this point you're authenticated, and you can get the identity from the auth client:
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, you can create an agent to interact with ICP.
    const agent = new HttpAgent({identity});
    // Using the interface description of our webapp, you create an actor that you use to call the service methods.
    actor = createActor(process.env.GREET_BACKEND_CANISTER_ID, {
        agent,
    });

    return false;
};
```

:::info

上述代码有可能更新，请参考 [index.js](https://github.com/dfinity/examples/blob/master/motoko/internet_identity_integration/src/greet_frontend/src/index.js) 获取最新版本。

:::

## 修改后端容器

这里我们将修改后端 Motoko 代码向调用 dapp 的主体进行问候，包括：

- 不再使用名称参数。
- 使用 `message.caller` 进行问候。

请将 `src/greet_backend/main.mo` 替换为以下内容：

```
import Principal "mo:base/Principal";

actor {
  public query (message) func greet() : async Text {
    return "Hello, " # Principal.toText(message.caller) # "!";
  };
};
```

:::info

上述代码有可能更新，请参考 [main.mo](https://github.com/dfinity/examples/blob/master/motoko/internet_identity_integration/src/greet_backend/main.mo) 获取最新版本。

:::

## 再次本地部署

请再次执行
```
dfx deploy
```

## 测试 dapp

请在浏览器中打开 `greet_frontend` 的 URL，您将会看到如下界面：

![greet_frontend](./img/greet-frontend.png)

在您的 dapp 中，您将会看到：

- 如果您在未登录的情况下按下 `Click me!` 按钮，则会向匿名主体 (2vxsx-fae) 进行问候。
- 如果您使用 `Internet Identity` 登录，则会向您登录的主体进行问候。
- 多次使用相同的 `Internet Identity` 登录应始终返回相同的主体。
- 使用不同的 `Internet Identity` 将返回不同的主体。

<TeamContact />