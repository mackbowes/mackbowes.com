import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mackbowes.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <h1 className={styles.title}>
        mack bowes
      </h1>
      </header>
      <main className={styles.main}>

      <p className={styles.description}>
      developer / advertiser <br /> designer / musician
      </p>

        <div className={styles.grid}>
          <a href="/developer" className={styles.card}>
            <h3>Development &rarr;</h3>
            <p>Take an in depth look at my development work - Github, Portfolio, Development Blog &amp; so on.</p>
          </a>

          <a href="/advertising" className={styles.card}>
            <h3>Advertising &rarr;</h3>
            <p>Access Advertising focused work - Blog, Guides, &amp; Templates.</p>
          </a>

          <a
            href="/design"
            className={styles.card}
          >
            <h3>Design &rarr;</h3>
            <p>View delightful design resources I've discovered or created.</p>
          </a>

          <a
            href="/music"
            className={styles.card}
          >
            <h3>Music &rarr;</h3>
            <p>
              I love music - maybe someday I'll share my work, for now it's a collection of songs I love.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="" className={styles.card}>
        <h3>Connect on Discord &rarr;</h3>
        <p>Instantly open a discord chat.</p>
        </a>
      </footer>
    </div>
  )
}
