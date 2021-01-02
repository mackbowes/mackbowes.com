import Head from 'next/head'
import Nav from '../../components/nav.js';

import { motion } from "framer-motion"
import styles from './home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mack bowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h2>I'm working on the blog locally for a bit</h2>
        <h4>Considering headless cms's as well till I get a bit more scratch</h4>
      </main>
    </div>
  )
}
