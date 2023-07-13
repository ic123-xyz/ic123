import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    background: '#FBB03B',
    title: '追随业界大牛的脚印，加入最具颠覆新的行业技术前沿阵营',
    /* Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, */
    description: (
      <>
        Jan Camenisch, Ben Lynn, Jens Groth, Victor Shoup, Andreas Rossberg 这些世界顶流的密码学家，计算机专家过去四年都在做什么？他们都在DFINITY，研发最具颠覆性的下一代区块链技术 - ICP。
      </>
    ),
  },
  {
    background: '#ED1E79',
    title: '直接在区块链上部署网络应用前端，降低网络开发成本',
    /* Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, */
    description: (
      <>
        不需要支付高昂的中心化云服务平台费用，不需要自己搭建节点，不需要处理庞大臃肿的数据库，不需要考虑负载均衡，不需要从头搭建用户身份体系，不需要担心网络应用的安全性。
      </>
    ),
  },
  {
    background: '#29ABE2',
    title: '传统互联网开发经验无缝迁移，真正的Web3全栈式平台',
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        熟悉Kubernetes和actor模式？欢迎了解一下IC的容器型智能合约，除了分布式账本，还可以提供数据储存和算力。以太坊的Gas费用太贵？IC使用反向手续费模式，用户交易成本为0.04美分。
      </>
    ),
  },
  {
    background: '#F15A24',
    title: '使用场景涵盖互联网所有垂直领域，解锁广阔职业发展空间',
    /* Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, */
    description: (
      <>
        数据，算力和账本的三合一，使得ICP可以在几乎所有的垂直领域找到落地场景。生态里已经涌现出上百个项目，在金融，社交，游戏，生产力工具，企业服务，人工智能各个赛道里挑战行业寡头。
      </>
    ),
  },
];

function Feature({Svg, background, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md" style={{background: background, padding: 20}}>
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
