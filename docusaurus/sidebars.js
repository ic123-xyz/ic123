/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  newbieSidebar: [
    "getting-started/hello-world/index",
    "getting-started/icp-overview/index",
    "getting-started/dev-workflow/index",
    "getting-started/install-dfx/index",
    "getting-started/dev-account/index",
    "getting-started/get-cycles/index",
    "getting-started/ic-glossary/index",
    "getting-started/use-dfx/index",
    {
      type: "category",
      label: "代码示例",
      link: {
        type: "doc",
        id: "getting-started/code-examples/index",
      },
      items: [
        "getting-started/code-examples/threshold-ecdsa/index",
        "getting-started/code-examples/threshold-schnorr/index",
        "getting-started/code-examples/btc-integration/index",
        "getting-started/code-examples/ii-integration/index",
        "getting-started/code-examples/https-outcalls/index",
        "getting-started/code-examples/certified-variables/index",
        "getting-started/code-examples/dfx-dependencies/index",
        "getting-started/code-examples/canister-logs/index",
        "getting-started/code-examples/canister-snapshot/index",
        "getting-started/code-examples/wasm-simd/index",
      ]
    },
  ],

  veteranSidebar: [
    {
      type: "category",
      label: "智能合约",
      items: [
        "dev-advanced/smart-contract/overview",
        "dev-advanced/smart-contract/write",
      ]
    },
  ],

  devSidebar: [{type: 'autogenerated', dirName: 'dev-course'}],

  web3Sidebar: [{type: 'autogenerated', dirName: 'ic-web3'}],

  introSidebar: [{type: 'autogenerated', dirName: 'intro-ic'}],

  appSidebar: [{type: 'autogenerated', dirName: 'apps-guide'}],

  ecoSidebar: [
    "ecosystem-guide/dev-grants/index",
    "ecosystem-guide/node-provider-faq/index",
    "ecosystem-guide/media-assets/index",
    "ecosystem-guide/co-marketing/index",
    "ecosystem-guide/showcase/index",
  ],

  aboutSidebar: [{type: 'autogenerated', dirName: 'about'}],
};

module.exports = sidebars;
