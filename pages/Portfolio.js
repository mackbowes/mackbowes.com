import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Resume from '../components/resume'
import Button from '../components/Button.js';
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Mack Bowes</title>
      </Head>
      <Nav />
    </div>
  )
}
