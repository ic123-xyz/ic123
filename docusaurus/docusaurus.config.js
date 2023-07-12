// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '互联网计算机中文开发文档',
  tagline: '互联网计算机（Internet Computer/IC）是一个去中心化的云计算平台，利用颠覆性的链钥密码学技术将全世界独立的数据中心以子网的方式链接成一个可以无限扩容的虚拟主机。网络应用以智能合约的形式被封存在子网上的容器里，通过数据中心的服务器获得带宽，存储空间和算力。IC是目前唯一可以运行网络前端而且100%部署在链上的基础设施平台，在以太坊为首的资产型区块链以外，开创了一种全新范式 - 通用型区块链，解锁了重构互联网的无限可能。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ic123.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ICP中文社区', // Usually your GitHub org/user name.
  projectName: 'IC123', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ic123-xyz/ic123/tree/main/docusaurus',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ic123-xyz/ic123/tree/main/docusaurus',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/icp-social-card.png',
      navbar: {
        title: 'IC123',
        logo: {
          alt: 'ICP Logo',
          src: 'img/icp_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'newbieSidebar',
            position: 'left',
            label: '新手上路',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devSidebar',
            position: 'left',
            label: '开发者教程',
          },
          {
            type: 'docSidebar',
            sidebarId: 'supportSidebar',
            position: 'left',
            label: '开发者资源',
          },
          {
            type: 'docSidebar',
            sidebarId: 'web3Sidebar',
            position: 'left',
            label: '解锁Web3',
          },
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: 'ICP介绍',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ecoSidebar',
            position: 'left',
            label: '生态资源',
          },
          // {to: '/blog', label: '新闻', position: 'left'},
          {
            href: 'https://github.com/ic123-xyz/ic123',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'DFINITY开发者论坛',
                href: 'https://forum.dfinity.org/',
              },
              {
                label: '社区新闻和动态',
                href: 'https://mora.app/planet/cbdl2-cqaaa-aaaan-qdcxa-cai',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dfinity',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ic123-xyz/ic123',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IC123中文开发者社区, 100%部署在区块链上`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
