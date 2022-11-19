import { ReactNode, useState } from 'react';
import ControlPanelNav from './ControlPanelNav/ControlPanelNav';

import styles from './ControlPanel.module.scss';

const ControlPanel = ({ className = '' }: { className?: string }) => {
  const [activeId, setActiveId] = useState('1');
  const navItems : {
    id: string;
    label: string;
    content: ReactNode;
  }[] = [{
    id: '1',
    label: 'Hierarchy',
    content: <Challenge1 />,
  }, {
    id: '2',
    label: 'Shapes creation',
    content: <Challenge2 />,
  }, {
    id: '3',
    label: 'Lights, camera and orbit controls',
    content: <Challenge3 />,
  }, {
    id: '4',
    label: 'Dat GUI',
    content: <Challenge4 />,
  }, {
    id: '5',
    label: 'Mesh and textures',
    content: <Challenge5 />,
  }, {
    id: '6',
    label: 'Physics',
    content: <Challenge6 />,
  }, {
    id: '7',
    label: 'Interactions',
    content: <Challenge7 />,
  }];

  const activeItem = navItems.find((item) => item.id === activeId);

  const changeContent = (id: string) => {
    setActiveId(id);
  };

  return (
    <section className={`${styles.ControlPanel} ${className} d-flex`}>
      <ControlPanelNav
        onItemClick={changeContent}
        className={styles.ControlPanelNav}
        items={navItems.map((item) => ({
          ...item,
          active: activeId === item.id,
        }))}
      />
      <main className={styles.main}>
        {activeItem.content}
      </main>
    </section>
  );
};

const Challenge1 = () => (
  <>
    <h1 className="mt-0"> Hierarchy </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge2 = () => (
  <>
    <h1 className="mt-0"> Shapes creation </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge3 = () => (
  <>
    <h1 className="mt-0"> Lights, camera and orbit controls </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge4 = () => (
  <>
    <h1 className="mt-0"> Dat GUI </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge5 = () => (
  <>
    <h1 className="mt-0"> Mesh and textures </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const FirstChallenge = () => (
  <>
    <h1 className="mt-0"> Challenge </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge6 = () => (
  <>
    <h1 className="mt-0"> Physics </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

const Challenge7 = () => (
  <>
    <h1 className="mt-0"> Interactions </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Pariatur, neque! Odit voluptas similique eos blanditiis iusto,
      magni dolor repellendus ipsam omnis autem aut nam, consequatur
      debitis eaque alias, aliquid doloremque?
    </p>
  </>
);

export default ControlPanel;
