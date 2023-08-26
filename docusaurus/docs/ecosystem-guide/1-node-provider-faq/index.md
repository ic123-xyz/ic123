# ICP节点供应商FAQ

## 资源

:::info

上手教程  
https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding 

报酬模型  
https://wiki.internetcomputer.org/wiki/Node_Provider_Remuneration

硬件配置  
https://wiki.internetcomputer.org/wiki/Node_Machine_Hardware 

自我声明  
https://wiki.internetcomputer.org/wiki/Node_Provider_Self-declaration  
https://wiki.internetcomputer.org/wiki/NP_Self_Declarations 

:::

## 上手步骤

***请确保已经仔细阅览以上文档。***

以下是如何成为 IC 节点供应商的基本步骤：

1. 创建[互联网身份](https://identity.ic0.app/)，并使用至少10个 ICP 抵押神经元，具体步骤请参考[此文档](https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding#2._Create_and_Manage_Neuron_via_NNS_Frontend_Dapp_and_Internet_Identity)。  
这是发起 NNS 提案的最低要求，以成为节点供应商。

2. 发起节点供应商[自我声明](https://wiki.internetcomputer.org/wiki/Node_Provider_Self-declaration)  
这个过程不需要 DFINITY 的参与，任何人都可以注册成为 [Internet Computer Wiki](https://wiki.internetcomputer.org/wiki/Main_Page) 的使用者并参与[修改页面](https://wiki.internetcomputer.org/wiki/Contributing_to_the_wiki)。  
在实际操作中，申请者可能会邀请 [DFINITY 团队](mailto:vincent.zhang@dfinity.org)参与文档审查、以确保提供完整的文件。

3. 发起 NNS 提案以[成为节点供应商](https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding#7._Register_your_Node_Provider_principal_to_the_network)  
这个过程不需要 DFINITY 的参与。在实际操作中，申请者可能会邀请 [DFINITY 团队](mailto:vincent.zhang@dfinity.org)参与参与提案内容的审阅。

4. 在“[新节点供应商提案](https://forum.dfinity.org/t/new-node-provider-proposals/16643/7)”下发布回帖  
这是惯例，可以让更多人了解您的提案、提高通过率，例如 [Pindar Tchnology Limited 的提案](https://forum.dfinity.org/t/new-node-provider-proposals/16643/34)。

5. 购买、配置所需设备  
我们建议在第三步的提案通过后才开始设备采购，以避免提案没有通过而带来的经济损失。

6. 发起 NNS 提案以[提交数据中心记录](https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding#8._Ensure_that_your_datacenter_is_registered_in_the_network)  
IC 会在 [Internet Computer Dashboard](https://dashboard.internetcomputer.org/centers) 展现所有的数据中心以供用户查看。在提交数据中心记录之前，请确保到 [IC 数据中心](https://dashboard.internetcomputer.org/centers)查询您的数据中心是否已经注册。如果已经注册则可以跳过此步骤。

7. 发起 NNS 提案以[提交节点操作员记录](https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding#9._Create_a_node_operator_record)  

8. 上线节点  
请根据链接所示步骤[上线节点](https://wiki.internetcomputer.org/wiki/Node_Provider_Onboarding#10._Onboard_nodes)，在上线过程当中碰到任何问题可以[加入 Matrix 群](https://wiki.internetcomputer.org/wiki/Node_Provider_Matrix/Element_channel)发起讨论。

## Q&A

### 申请成为节点供应商需要有法律实体吗？如果需要，对法律实体有地理位置的要求吗？
>是的，需要，在节点供应商自声明里要提供公司实体注册查询链接，以确保为合规公司。DFINITY对于法律实体的地理位置没有要求，但是要符合当地法规做数据服务的政策要求，有的国家或地区需要当地注册的公司才能运营此类业务。

### 能否在中国大陆部署节点？
>DFINITY并没有对于在某些国家和地区不能部署节点的限制，但建议参考当地法律法规进行。

### 什么是节点供应商自我声明？它包括哪些内容？

>节点供应商自我声明是用来帮助 IC 社区决定是否接受节点供应商 NNS 提案的文件，它包括一个身份证明和一份声明（声明节点供应商的良好意图）。您可以查看[节点供应商自我声明](https://wiki.internetcomputer.org/wiki/Node_Provider_Self-declaration)以获取更多信息。

### 如何将节点供应商的自我声明添加到节点供应商自我声明页面？

>这个过程不需要 DFINITY 的参与，任何人都可以注册成为 [Internet Computer Wiki](https://wiki.internetcomputer.org/wiki/Main_Page) 的使用者并参与[修改页面](https://wiki.internetcomputer.org/wiki/Contributing_to_the_wiki)。  
在实际操作中，申请者可能会邀请 [DFINITY 团队](mailto:vincent.zhang@dfinity.org)参与文档审查、以确保提供完整的文件，可以看做是确保节点供应商提供正确文档的预检。

### 当前的报酬模型是哪个版本？

>节点供应商报酬模型 v2.1 的[提案](https://dashboard.internetcomputer.org/proposal/122281)已经通过，请参考 [v2.1 的报酬模型](https://wiki.internetcomputer.org/wiki/Node_Provider_Remuneration#Version_2.1_Remuneration_Model)来计算您的收益。

### 节点报酬模型会定期更新吗？

>任何人都可以发起节点供应商的报酬模型提案，而提案通过与否最终都由 NNS 投票决定。如果 NNS 决定采用该提案，则节点供应商报酬模型根据提案生效。  
目前 DFINITY没有计划对 v2.1 报酬模型提出重大更改。目前DFINITY基金会只计划提出新的报酬模型，而该新模型仅适用于未来的节点。  
所有报酬模型都有一个问题尚待回答，即4年后如何报酬模型会如何更改。

### 节点供应商以什么形式获得报酬？

>节点供应商以 ICP 的形式获得报酬，但是会以 XDR 来计算。这样节点供应商的报酬不会受到 ICP 价格波动的影响。

### 节点供应商何时获得报酬？

>节点供应商按月获得报酬，一般是从节点供应商的节点上线的下个月开始获得报酬。

### 一个节点只是一台机器吗？
> 是的。一个节点就是 IC 网络中的单个服务器。

### 租赁的机器能否成为节点？
>只要符合ICP对于节点硬件的规范就可以满足节点的要求

### 挖矿机器能否成为节点？
>必须符合 [Gen-2 节点机器的通用规格](https://wiki.internetcomputer.org/wiki/Node_Machine_Hardware)

### 是否必须通过 DFINITY 购买机器？

> 不。您可以从任何供应商购买机器，只要机器符合 [Gen-2 节点机器的通用规格](https://wiki.internetcomputer.org/wiki/Node_Machine_Hardware)。

### 只有 Gen-2 的机器才能加入 IC 的网络吗？

>是的。IC 网络中不再支持添加 Gen-1 机器，只允许添加符合 [Gen-2 规格](https://wiki.internetcomputer.org/wiki/Node_Machine_Hardware)的机器。

### Gen-2 的机器必须支持 AMD EPYC Milan CPU 吗？

>是的，只支持 Milan (Zen3) 架构。

### 节点机器上需要配置 RAID 吗？

>不需要。IC 节点机器不需要配置 RAID，IC-OS 安装程序将验证是否有5个独立的 6.4TB NVMe SSD 并确保它们准备就绪。

### Gen-2 机器的价格是多少？

>根据不同的供应商，Gen-2 机器的价格从15k-25k美元不等。

### 现在 Gen-1 的节点何时会被淘汰？

>到目前为止，DFINITY 还没有计划提出相关的提案。但是基金会正在考虑为期满4年的节点发起修改报酬的提案，因为节点的成本支出已经摊销。之后节点是否决定继续运行则完全取决于节点供应商。

### 节点供应商能够将目前的 Gen-1 节点升级为 Gen-2 的节点吗？如果可以，这将对他们的报酬有什么影响？
>目前新申请的节点服务商都必须符合Gen-2标准，原有Gen-1节点按照原有报酬标准，无法通过升级变成Gen-2

### 会要求节点供应商按需将节点机器升级为新配置吗？
>有这种可能，Gen-1曾经做过一次升级。升级也导致报酬标准进行了调整

### 可以将非验证配置的机器作为节点吗？

>只要符合 Gen-2 机器通用配置规范的要求，就可以将机器添加到 IC 网络中。不过因为它们是未经验证的配置，它们可能不稳定。如果遇到问题不能正常工作，节点供应商将无法获得奖励。

### NNS 提案中需要声明将要接入节点的数量吗？

>是的，在提案中需要声明节点数量。

### DFINITY 基金会是否会对节点供应商的 NNS 提案进行？

>是的。DFINITY 基金会一般会在投票周期的后期对提案进行投票。

### 通常一个节点供应商可以提供多少个节点？

>推荐数量为 10-15，您应根据最新的 [v2.1 的节点报酬模型](https://wiki.internetcomputer.org/wiki/Node_Provider_Remuneration#Version_2.1_Remuneration_Model)中的算法自行计算、以决定上线多少个节点。

### 通常一个国家或地区允许多少个节点？

>Gen-2 节点允许 50 个。

### 为什么要注册数据中心？
>因为要向社区公示数据中心的信息，确保节点处于公开安全合规区域。

### 如何判断数据中心是否已经注册？

>目前只有数据中心的坐标可以用来确定它是否已注册。但是有时数据中心的坐标可能不准确，DFINITY 正在讨论是否有更好的方法来实现这一点。

### 如何加入 Matrix/Element 节点供应商群聊？

>节点供应商的 Matrix/Element 群聊是一个开放的聊天渠道。请参照节点提供商 [Matrix/Element 群聊](https://wiki.internetcomputer.org/wiki/Node_Provider_Matrix/Element_channel) 页面加入该群聊。

### 节点上线时，节点运营商是否需要配备了解熟悉 ICP 技术栈的 devops 工程师？
>不需要，但要求电信级网络工程师的配置和运维经验

### 节点上线时，是否可以选择加入某个子网？
>节点是在NNS发起创建新子网提案后会加入子网，节点服务商没有权限选择节点加入的子网

### 节点上线后，是否可以更换子网？
>更换子网也是NNS决定的，不由节点服务商决定

### 节点上线后，升级是否需要人工介入？
>无需人工介入。

### 节点上线后，何时加入子网开始计算报酬？
>报酬以节点上线为准，和是否加入子网无关。

### 节点上线后，如遇故障、从 IC 网络断开，是否会影响收益？如果断开一定时间，是否会有惩罚？
>当节点处于offline时会影响收益，目前没有惩罚机制，但未来会有。

### 节点上线后，如何下线？是否有任何惩罚机制？
>节点运行后将自主工作，除非机器出现故障或断网，否则都应该保持在线，目前没有惩罚机制，但未来会有。