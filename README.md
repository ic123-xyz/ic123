# ic123 - 互联网计算机导航网站

## 欢迎来到`ic123`! 

如果你是一位开发者，在这里可以找到学习[ICP](https://internetcomputer.org/) - `互联网计算机协议`的技术文档，实例演示，工具列表和开发教程。

如果你是一位新加入ICP生态的用户，这里会提供教程引导你使用互联网身份，参与ICP网络神经系统DAO社区的质押，投票和提案。

如果你感兴趣参与ICP网络的节点运营，这里会提供详细的解说。

如果你想投资ICP生态里涌现的早期初创公司，这里有持续更新的各个垂直领域的头部项目名单。

如果你觉得还有什么内容应该被加入这个网站，请在[论坛讨论区](https://github.com/orgs/ic123-xyz/discussions)给我们留言。非常感谢！

如果你觉得这个网站有帮助，欢迎在右上角添加星标，持续关注她的升级和扩展。

## 网站架构

[ic123.xyz](https://ic123.xyz) 是一个100%部署在ICP区块链上的静态网站，指向这个容器智能合约 [https://bp6lc-ziaaa-aaaag-abqyq-cai.icp0.io/](https://bp6lc-ziaaa-aaaag-abqyq-cai.icp0.io/)。这个容器[bp6lc-ziaaa-aaaag-abqyq-cai](https://dashboard.internetcomputer.org/canister/bp6lc-ziaaa-aaaag-abqyq-cai) 部署在子网 [lspz2-jx4pu-k3e7p-znm7j-q4yum-ork6e-6w4q6-pijwq-znehu-4jabe-kqe](https://dashboard.internetcomputer.org/subnet/lspz2-jx4pu-k3e7p-znm7j-q4yum-ork6e-6w4q6-pijwq-znehu-4jabe-kqe)。这个子网`lspz2`拥有13个节点，1个在新加坡，1个在东京，7个在欧洲，4个在美国，分别由13家独立的节点服务商通过自己拥有的IDC数据中心来运营。

跟 `ic123`相关的内容都包括在[ic123-xyz](https://github.com/ic123-xyz) 这个Github Organization里。这个Org有两个repo值得关注，一个是 https://github.com/ic123-xyz/ic123， 反映了`ic123`的内容；一个是 https://github.com/ic123-xyz/forum , 是网站贡献者们的讨论区。

`ic123`采用了[Docusaurus](https://docusaurus.io/docs)的前端架构，来搭建这个以技术文档为主的网站。大部分的内容文章都以Markdown的格式存在于`docusaurus/docs/` 文件夹里。部署到ICP容器智能合约`bp6lc`的文件在`docusaurus/build/` 文件夹里。

## 社区合作

`ic123` 的贡献者包括[DFINITY](https://dfinity.org)基金会现有的工程师，前员工，ICP社区的开发者和内容传播者。我们欢迎所有对互联网计算机感兴趣的开发者加入这个社区，参与对`ic123`的共同建设。

如感兴趣，请遵循以下流程来贡献跟ICP相关的内容：

1. fork `main` branch
2. check out a new branch on local machine
3. make changes
4. submit a pull request for merging into `main` branch

## 文档库结构 + 路线图

```bash
├── 新手上路
│   ├── 5分钟的Hello World
│   ├── 安装ICP SDK
│   ├── 获取cycles
│   ├── dfx的本地部署和主网部署
│   ├── 代码示例
│   ├── Motoko Playground
│   ├── 核心词汇表中英对照表
├── 开发者教程
│   ├── Motoko基础课程1
│   ├── Motoko基础课程2
│   ├── Motoko基础课程3
│   ├── Motoko基础课程4
│   ├── Motoko基础课程5
├── 开发者资源
│   ├── 开发者工具
│   ├── 开发者补助 Developer Grant
│   ├── 黑客松
│   ├── 代币标准
│   ├── 社区入口
├── 互联网身份和网络神经系统
│   ├── 注册互联网身份 Internet Identity
│   ├── 质押ICP
│   ├── 参与社区投票
│   ├── 提交社区提案
│   ├── 改变投票的跟随关系
│   ├── 申请成为命名神经元
│   ├── 使用钱包
│   ├── 购买NFT
│   ├── 申请启动SNS神经服务系统
│   ├── 参与SNS相关的投票和公募
├── 介绍DFINITY和互联网计算机
│   ├── 中文介绍
│   ├── 英文介绍
│   ├── ICP主要功能路线图
│   ├── 互联网计算机白皮书
│   ├── 实时网络数据
│   ├── 代币经济模型
│   ├── 互联网计算机往事
├── 其他生态资源
│   ├── 英文官方网站大全
│   ├── 节点运营商FAQ
│   ├── ICP生态项目索引
│   ├── 社区补助 Community Grant
│   ├── 部署个性化域名
```

## 版本控制

本网站使用tag的标准为：`v` + 版本号 + `_` + Build Number + `_` + 部署日期 (YYYYMMDD)

```bash
v0.1.0_08.20230701
v0.1.0_09.20230702
v0.1.0_10.20230704
v0.1.0_11.20230706
```

版本号遵循 [Semantic Versioning](https://semver.org/) 标准，按照 MAJOR.MINOR.PATCH 的格式来命名。

## 部署工作流

1. 准备
    - fork `main` branch `new-site`
    - checkout 到 branch `new-site`
2. 编辑
    - 在branch `new-site` 里编辑文件
3. 在**docusaurus**里build & deploy
    - 进入 `docusaurus` 文件夹
    - 运行 `npm install` 安装所需的packages
    - `yarn build`, 产生更新的 `build` 文件夹
    - `npm run serve` to test the build locally at http://localhost:3000/
4. Git
    - 在 `dfx` 根目录的 `new-site` branch
    - `git add .`
    - `git commit -m "commit message"`
    - `git push --set-upstream origin new-site`
5. Submit PR
    - Create a [pull request](https://github.com/ic123-xyz/ic123/pulls) for approver's review
6. Merge
    - Approver reviews the commit and merges branch `new-site` into branch `main` 
    - `git branch -d new-site` to delete branch `new-site` on the local machine
    - `git push origin -d new-site` to delete branch `new-site` on the remote server
7. Recalibrate
    - checkout to branch `main`
    - `git pull` 来更新本地仓库的文件
8. 在**dfx**里build & deploy
    - 回到 `dfx` 根目录，确保在`main` branch里
    - 另开一个Terminal窗口，`dfx start`
    - 在原来的窗口，`dfx deploy`，将网站的文件部署在本地的canister上
    - 在浏览器里查看网站的部署是否有错误，http://bd3sg-teaaa-aaaaa-qaaba-cai.localhost:4943/
    - 如果没问题，`dfx deploy --network=ic --no-wallet`, 部署文件到IC上的容器

## 网站赞助者

[ic123.xyz](https://ic123.xyz) 是一个100%部署在ICP区块链上的网站，除了域名受到[ICANN](https://www.icann.org/)管控以外，不依赖任何中心化的服务器或者CDN服务。网站数据存在于容器 `bp6lc-ziaaa-aaaag-abqyq-cai` 的内存里。这个容器需要持续的算力和存储空间才能保持工作，在ICP的世界里，这就需要用到ICP原生的稳定币**cycles**。如果你觉得这个网站有帮助，不妨用[Tip Jar](https://tipjar.rocks)这个[Paul](https://github.com/ninegua)开发的开源程序来给 ic123.xyz 的容器充值，保证容器`bp6lc`的cycles始终充盈。

https://k25co-pqaaa-aaaab-aaakq-cai.ic0.app/

只要社区觉得这个网站有价值，愿意持续不断地往容器里充值cycles，这个网站可以永远存在下去，哪怕原先的开发者离开了这个项目，不再主动地往容器里充值。在IC上，创始人可以跟产品分开。好的产品永远是属于社区的，可以拥有自己独立的发展轨迹，不受制于创始团队的局限性。

这才是真正的Web3。

## 网站贡献者

**ic123**这个网站由DFINITY工程师和来自IC社区的开发者一起协作完成。我们欢迎更多的朋友加入我们的阵营，跟我们一起来扩展这个网站，丰富她的内容，降低开发者加入IC社区的门槛。[WTF Academy](https://github.com/WTFAcademy) 已经树立了一个很好的榜样。希望在不久的将来，下面这张图能看到越来越多的开发者头像。

<a href="https://github.com/ic123-xyz/ic123/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ic123-xyz/ic123" />
</a>
