import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Resume from '../components/resume'
import Button from '../components/Button.js';
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mack bowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <section title="splash" className={styles.sectionWrapper}>
          <article className={styles.column}>
          <h3>hello, nice to meet you.</h3><br />
          <p>my name is mackenzie bowes, you can call me mack, if you like.
          big mac, mac daddy, and daddy mac are also in rotation but I do prefer just 'mack'.<br /></p>
          <Link href='/resume'><Button href="/resume" text="View Resume"></Button></Link><br />
          <Button href="/Portfolio" text="View Portfolio" />
          </article>
          <article className={styles.column} title="contactLinks">
          <h3>Contact Links:</h3>
          <div style={{paddingLeft: `2.5vmin`, borderLeft: `2px solid white`, marginTop: `2.5vmin`}}>
          <a href="https://github.com/mackbowes">
          <div style={{display: `block`, padding: `2.5vmin 5vmin`, margin: `0 0 0 0`, backgroundColor: `black`, color: `white`, cursor: `pointer`}}>Github</div>
          </a>
          <a href="https://twitter.com/mackenziepbowes">
          <div style={{display: `block`, padding: `2.5vmin 5vmin`, margin: `2.5vmin 0 0 0`, backgroundColor: `#1DA1F2`, color: `#F5F8FA`, cursor: `pointer`}}>Twitter</div>
          </a>
          <a href="https://discord.com/users/287285429546385408">
          <div style={{display: `block`, padding: `2.5vmin 5vmin`, margin: `2.5vmin 0 0 0`, backgroundColor: `#7289da`, color: `#F5F8FA`, cursor: `pointer`}}>Discord</div>
          </a>
          </div>
          </article>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}
