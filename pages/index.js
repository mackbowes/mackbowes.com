import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mack Bowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>
          <a>mackbowes.com</a>
        </h1>
      </Link>
      </header>
      <main className={styles.main}>
      <h2 className={styles.description}>
      hi, i'm mack bowes.</h2>
      <div className={styles.description}>
      i'm a:<br />
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration: .5},
        }}
        whileTap={{
          scale: 0.9
        }}><Link href="/development"><a onClick="()">developer &rarr;</a></Link></motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration: .5},
        }}
        whileTap={{
          scale: 0.9
        }}><Link href="/design"><a onClick="()">designer &rarr;</a></Link></motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration: .5},
        }}
        whileTap={{
          scale: 0.9
        }}><Link href="/advertising"><a>&amp; advertiser &rarr;</a></Link><br />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration: .5},
        }}
        whileTap={{
          scale: 0.9
      }}><Link href="/music"><a>&amp; musician (for fun) &rarr;</a></Link></motion.div>
      </div>
      </main>

      <footer className={styles.footer}>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: {duration: .5},
        }}
        whileTap={{
          scale: 0.9
        }}><Link href=""><h3><a>Connect on Discord &rarr;</a></h3></Link></motion.div>
      </footer>
    </div>
  )
}
