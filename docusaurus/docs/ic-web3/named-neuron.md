---
sidebar_position: 6
---

# 申请成为命名神经元
命名神经元的广泛性是IC通向去中心化治理的必由之路，也是IC流动民主的体现，IC鼓励生态的项目方，DAO组织，个人申请命名神经元，这些命名神经元将在未来NNS治理过程中起到关键效应，是民主与集中的最佳平衡。
## 想清楚为什么要成为命名神经元
如果你想申请成为命名神经元，请确保以下几点：
- 具有一定的开发或项目管理经验
- 致力于为IC的长期发展做出贡献
- 承诺审慎的为NNS治理提案进行投票

## 撰写一份声明发到DFINITY论坛
强烈建议在发送命名神经元提案之前，撰写一篇文章发表在[DFINITY论坛](https://forum.dfinity.org/)，并对相应提问进行积极的回复，以便让社区能够提前了解你的背景。
参考文章请参看：
- DAO
[8YearGangDAO](https://forum.dfinity.org/t/named-neuron-proposal-8yeargangdao/15288)
- Person
[The Accumulators’ Neuron](https://forum.dfinity.org/t/named-neuron-proposal-the-accumulators-neuron/14980)
- Project
[Taggr network](https://forum.dfinity.org/t/proposal-for-adding-taggr-network-as-a-named-neuron/20260)

## 命名神经元提案申请
这里假定你已经安装好了相应的工具以及知晓了发起提案的流程，如不清楚，请参看[这里](https://ic123.xyz/docs/ic-web3/submit-nns-proposal)

申请命名神经元的提案和申请普通治理提案稍有不同，请参看一下模板

````
dfx --identity proposals canister --network ic call rrkah-fqaaa-aaaaa-aaaaq-cai manage_neuron '( record {
 id = opt record { 
  id =18255535291834730574 : nat64
 };
 command = opt variant {
  MakeProposal = record {
    url = "https://forum.dfinity.org/t/named-neuron-proposal-8yeargangdao/15288"; title="Proposal for NamedNeuron - 8yeargangDAO"; summary = "
  
## Who are we?  
  
We are from the [ICP 8yeargang信仰群](https://oc.app/#/a6ew7-jyaaa-aaaaf-adsaq-cai) , the number one Chinese language community in Openchat.  
  
We are a group of NFH (Non-Fungible Human) who love ICP, respect diversity, and encourage inward (philosophy) - outward (knowledge) exploration in both directions.  
  
Any member who display their 8-year NNS staking screenshot can become a group administrator, and eventually the community will be completely decentralized.  
  
## keywords  
  
Love, Link, belong, Inclusion, Dedication, Co-creation  
  
## Slogan  
  
Create value for every ICP 8yeargang  
  
## What are we doing?  
  
We are building a spiritual home that truly belongs to the ICP 8 yeargang community, and we believe that  
  
- Beyond making money, we are more interested in exploration new possibilities on IC;  
  
- Share the vision of ICP and expand our Chinese language community;  
  
- Driven by curiosity rather than opportunism.  
  
## Where are we going?  
  
ICP 8yeargang is sowing seeds of freedom, the sunlight is fair to all, where these seeds will potentially grow towards an unimaginable shape and size.  
  
## Why we want to become a named neuron?  
  
After an 8-year staking, we put our entire trust and enthusiasm on participation of NNS. As the largest Chinese community in OC, it is our responsibility to lead the entire community members to be deeply involved in the daily governance of NNS, specifically we will  
  
- Make sure NNS proposal is well understood in the Chinese language community, be the bridge between NNS and community.  
  
- Answer members questions.  
  
- Vote by community representatives to create a consensus community vote  
  
- Work and communicate with every member to make sure the proposal is best represented.  
  
We believe it is important to be the naming neuron of 8yeargang because we always look at governance issues from both a macro (top-down) and community (bottom-up) perspective. Because of this unique perspective, we hope to gain the acceptance of the IC community and become an important representative force for public participation in NNS governance.  
  
## Council member  
  
Openchat account  
  
@MillionMiles;@joydna;@ysyms;@Destiny;@Sigerma;@GBTC;@finethankyou;@III;@bollava  
  
##How to become a council member  
  
- [ICP 8yeargang信仰群](https://oc.app/#/a6ew7-jyaaa-aaaaf-adsaq-cai) group member  
  
- ICP 8 years staker   
  
- Enthusiastic participation in NNS governance  
  
## Voting process  
  
Voting every NNS proposal by create a poll on Openchat, the voting result will be the final decision of our neuron.  
  
## Neuron Details  
  
name: 8yeargangDAO  
  
neuron id: 13538714184009896865  
  
Description: We are building a spiritual home that truly belongs to the ICP 8 yeargang community  
  
## 我们是谁?  
  
我们来自Openchat第一大中文社区 [ICP 8yeargang信仰群](https://oc.app/#/a6ew7-jyaaa-aaaaf-adsaq-cai)  

我们是一群热爱IC，尊重差异，鼓励向内（哲学）-向外（求知）的双向探索的NFH(Non-Fungible Human)  
  
任何公开自己8年质押证明的成员都可以成为群管理，最终社区将实现完全去中心化管理  
  
## 关键词  
  
爱，链接，归属，包容，奉献，共创  
  
## 口号  
  
为每个ICP 8yeargang创造价值  
  
## 我们在做什么?  
  
我们正在建立一个真正属于ICP 8yeargang社区的精神家园，我们认为：  
  
不单单以赚钱为目的，更是探索与学习  
  
不急于排斥扩大规模，更愿意志同道合  
  
不过度盲目追逐风口，更鼓励兴趣为之  
  
## 我们要去哪  
  
ICP 8yeargang是一片孕育自由和真实种子的土壤，在这里，每一寸阳光都是公平的，这些种子未来成长出的样子我们无法想象  
  
## 为什么我们要成为命名神经元？  
  
作为8年质押的ICP忠实信徒，没有什么能比深入参与NNS治理更神圣的工作了，作为OC最大中文社区，有责任带领整个社区成员深入参与NNS的日常治理工作，具体而言我们将：  
  
- 针对每一个NNS提案对所有成员进行宣讲, 成为NNS与社区之间的桥梁。  
  
- 对于成员的疑问进行解答。  
  
- 通过社区代表投票最终形成社区投票共识  
  
- 集合社区的智慧，提出对生态有价值的提案  
  
我们认为8yeargang成为命名神经元至关重要，因为我们始终同时站在宏观（自上而下）和社区（自下而上）两个角度看待治理问题，正因为这样独特的视角，我们希望能够获得IC社区的认同，成为大众参与NNS治理的重要代表力量。  
  
## 议员名单  
  
Openchat账号  
  
@MillionMiles;@joydna;@ysyms;@Destiny;@Sigerma;@GBTC;@finethankyou;@III;@bollava  
  
##成为议员的条件  
  
- [ICP 8yeargang信仰群](https://oc.app/#/a6ew7-jyaaa-aaaaf-adsaq-cai) 活跃群友  
  
- ICP 8年质押者  
  
- 热心参与NNS治理  
  
## 投票流程  
  
我们会为每一个NNS治理提案在Openchat上进行一个投票，神经元的结果将采用该投票的结果  
  
## 神经元信息  
  
name: 8yeargangDAO  
  
neuron id: 13538714184009896865  
  
Description: We are building a spiritual home that truly belongs to the ICP 8yeargang community  
  
  ";action = opt variant {
    RegisterKnownNeuron = record {
     id = opt record {
       id =13538714184009896865 : nat64
     };
     known_neuron_data = opt record {
      name = "8yeargangDAO"; description = "We are building a spiritual home that truly belongs to the ICP 8yeargang community"
     }
    }
   }
  }
 }
}
)'

````
需要做出改动的部分为
- 替换`18255535291834730574`为你发起提案的账户id
- 替换`url`为你自己的发在论坛里的文章链接
- 替换`title`为你自己的标题
- 替换`summary`为你自己的summary
- 替换`13538714184009896865`为命名神经元账户id
- 替换`name`为你的命名神经元的名称
- 替换`description`为你的命名神经元的描述