import Head from 'next/head';

import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

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
          <h1 className={styles.title}>Coming soon</h1>

          <h2 className={styles.description}>
            Direct, frontline support for environmental and climate justice
          </h2>
        </main>
      </div>
    </>
  );
}
