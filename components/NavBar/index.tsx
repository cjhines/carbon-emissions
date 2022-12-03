import classNames from 'classnames';
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
    const className = classNames(styles.itemContainer, styles.underline);
    return (
      <div className={className} key={item.title}>
        {item.title}
      </div>
    );
  };

  return <div className={styles.container}>{items.map(renderItem)}</div>;
};

export default NavBar;
