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
      <a href="pages/read-n-respond/rnr1-shopify-partner-sales-essentials-day-1"><h3>1: Read N Respond to Shopify Partner Academy Sales Essentials</h3></a>
      <p>December 29 2020 | Mackenzie Bowes</p>
      </main>
    </div>
  )
}
