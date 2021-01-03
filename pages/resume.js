import Head from 'next/head'
import Link from 'next/link'
import Resume from '../components/Resume'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function ResumePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Resume | Mack Bowes</title>
        <link rel="icon" href="/mlogo.svg" />
      </Head>
      <Nav />
      <Resume />
    </div>
  )
}
