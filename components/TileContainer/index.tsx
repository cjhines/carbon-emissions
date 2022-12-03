import { FunctionComponent } from 'react';

import styles from './TileContainer.module.css';

interface Item {
  title: string;
}

interface Props {
  items: Item[];
}

const TileContainer: FunctionComponent<Props> = ({ items }) => {
  const onClick = (index: number) => {
    console.log(`Clicked item ${index}`);
  };

  const renderItem = (item: Item, index: number) => (
    <div className={styles.item} onClick={() => onClick(index)}>
      {item.title}
    </div>
  );

  return <div className={styles.container}>{items.map(renderItem)}</div>;
};

export default TileContainer;
