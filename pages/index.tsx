import Head from 'next/head';

import NavBar from '../components/NavBar';
import TileContainer from '../components/TileContainer';
import styles from '../styles/Home.module.css';

const items = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>Coming soon</title>
          <meta
            name="description"
            content="Direct, frontline support for environmental and climate justice"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main className={styles.main}>
          <h2 className={styles.description}>
            Direct, frontline support for environmental and climate justice
          </h2>

          <TileContainer items={items} />
        </main>
      </div>
    </>
  );
}
