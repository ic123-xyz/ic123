import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '追随业界大牛的脚印，加入最具颠覆新的行业技术前沿阵营',
    /* Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, */
    description: (
      <>
        想知道Jan Camenisch, Ben Lynn, Jens Groth, Victor Shoup, Andreas Rossberg这些赫赫有名的科学家，密码学家，计算机专家过去四年都在做什么吗？
      </>
    ),
  },
  {
    title: '直接在区块链上部署网络应用前端，降低网络开发成本',
    /* Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, */
    description: (
      <>
        不需要支付高昂的中心化云服务平台费用，不需要自己搭建节点，不需要处理庞大臃肿的数据库，不需要考虑负载均衡，不需要从头搭建用户身份体系，不需要担心网络应用的安全性
      </>
    ),
  },
  {
    title: '传统互联网开发经验无缝迁移，真正的Web3全栈式平台',
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        没写过Solidity？没有关系。熟悉Kubernetes和actor模式？欢迎了解一下IC的容器型智能合约，除了分布式账本，还可以提供数据储存和算力。以太坊的Gas费用对用户太贵？IC使用反向手续费模式，用户交易成本为0.0001 ICP。听说区块链无法横向扩容？看看世界顶尖的R&D团队如何用连锁密码学技术解决区块链行业不可能三角问题。
      </>
    ),
  },
  {
    title: '使用场景涵盖互联网所有垂直领域，解锁广阔职业发展空间',
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        数据，算力和账本的三合一，使得互联网计算机可以在几乎所有的垂直领域找到落地使用场景。在IC生态里已经涌现出上百个项目，在金融，社交，游戏，生产力工具，企业服务，人工智能，元宇宙各个赛道里利用Web3的独特技术优势挑战行业寡头。想成为一名视野宽广，格局宏大，腾挪自如的CTO么？只有IC可以满足你旺盛的好奇心和求知欲。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
