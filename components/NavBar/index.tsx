import React, { FunctionComponent } from 'react';

import styles from './NavBar.module.css';

const items = [
  {
    title: 'Home',
  },
  {
    title: 'Organisations',
  },
  {
    title: 'Read more',
  },
];

interface NavBarItem {
  title: string;
  link?: string;
}

const NavBar: FunctionComponent = () => {
  const renderItem = (item: NavBarItem) => {
    return <div className={styles.itemContainer}>{item.title}</div>;
  };

  return <div className={styles.container}>{items.map(renderItem)}</div>;
};

export default NavBar;
