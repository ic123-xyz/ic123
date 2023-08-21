// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');
const math = require('remark-math');
const katex = require('rehype-katex');

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
        gtag: {
          trackingID: `G-W64Y138P08`,
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ic123-xyz/ic123/tree/main/docusaurus',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          blogTitle: '互联网计算机ICP中文社区新闻', 
          blogDescription: '来自ICP生态的社区新闻，产品进展，开发者动态',
          blogSidebarCount: 10,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/icp-on-chain-badge-2-1.png',
      metadata: [{name: 'keywords', content: 'ICP, IC, 互联网计算机, DFINITY, Internet Computer Protocol, Web3, Motoko, crypto, blockchain, 区块链, blockchain singularity'}],
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
            sidebarId: 'appSidebar',
            position: 'left',
            label: '应用指南',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ecoSidebar',
            position: 'left',
            label: '生态资源',
          },
          {to: '/blog', label: '新闻', position: 'left'},
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
            title: '引导',
            items: [
              {
                label: '核心词汇',
                to: 'docs/getting-started/ic-glossary',
              },
              {
                label: '教程',
                to: 'docs/dev-course/motoko-basic-1',
              },
              {
                label: '五分钟体验Hello World',
                to: 'docs/getting-started/hello-world',
              },
              {
                label: '白皮书',
                to: 'docs/intro-ic/white-paper',
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
                label: 'NNS社区投票',
                href: 'https://dashboard.internetcomputer.org/governance',
              },
              {
                label: '社区意见反馈',
                href: 'https://dx.internetcomputer.org/',
              },
              {
                label: '社区Live',
                href: 'https://internetcomputer.org/live-sessions?source=nav',
              },
            ],
          },
          {
            title: '动态',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/i/communities/1679302895571988481',
              },
              {
                label: '活动',
                href: 'https://dfinity.org/events-and-news/',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/dfinity',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/dfinity',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IC123中文开发者社区`,
        logo: {
          alt: '100% hosted on-chain ICP badge',
          src: 'img/icp-on-chain-badge-horizontal.png',
          width: 300,
          height: 36,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'mark_us',
        content:
          '如果你喜欢这个网站，请星标<a target="_blank" href="https://github.com/ic123-xyz/ic123"><b>Github</b></a>并加入我们在推特上的<a target="_blank" href="https://twitter.com/i/communities/1679302895571988481"><b>ICP China</b></a>社区',
        backgroundColor: '#04D9C4',
        textColor: '#000000',
        isCloseable: false, 
      },
    }),
};

module.exports = config;
