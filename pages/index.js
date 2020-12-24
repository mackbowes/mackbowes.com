import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mack bowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className={styles.title}><a href="/">mackbowes<span className={styles.subtle}>.com</span></a></h1>
      </header>
      <main>
        <section title="splash" className={styles.sectionWrapper}>
          <article className={styles.column}>
          <h2>hello, nice to meet you.</h2><br />
          <h3>my name is mackenzie bowes, you can call me mack, if you like.</h3><br />
          <h4>big mac, mac daddy, and daddy mac are also in rotation but I do prefer just 'mack'.</h4><br />
          <h2>i have done a lot of different things:</h2>
          <ul>
            <li>Digital Marketing</li>
            <ul>
              <li>Content Writing</li>
              <li>Copy Writing</li>
              <li>Analytics</li>
              <li>Programmatic Remarketing</li>
              <li>Marketing Automation</li>
              <li>Lead Generation</li>
              <li>Facebook Ads</li>
              <li>Google Ads</li>
              <li><span className={styles.strike}>eCommerce advertising</span></li>
            </ul>
            <li>Web Development</li>
            <ul>
              <li>React</li>
              <li>Express</li>
              <li>Wordpress</li>
              <li>Shopify</li>
            </ul>
            <li>Design</li>
            <ul>
              <li>Print, Posters, &amp; Brochures</li>
              <li>Packaging</li>
              <li>UX / UI</li>
            </ul>
          </ul>
          <h2>and i'm actively looking for work to apply this experience.</h2>
          </article>
          <article className={styles.column}>
          <h2>Important information for using this site:</h2>
          <ul>
          <li>This site is dark-mode default. I prefer using dark mode and assume you do, too. You can switch it to light mode here. ##TODO: implement lightmode switch lol</li>
          <li>This site is built with React and Framer motion. I tried to include some delightful interactions like tooltips and animated page transitions. ##TODO implement tooltips and animated page transitions</li>
          </ul>
          </article>
        </section>
        <div className={styles.sectionHr}></div>
        <h2 className={styles.title}>mack bowes' resume</h2>
        <section title="resume" className={styles.sectionWrapper}>
        <article className={styles.column}>
        <h3>Overview</h3>
        <p>I deeply enjoy creative expression, problem solving, automation, and increasing efficiency. I work well in teams, yet also have put in the necessary effort to start and complete projects on my own. I also work from an underlying belief that the world around me and history as a wider idea are in constant flux so:</p><h4>shipped is better than perfect</h4>
        <h4>&amp; tried is better than planned.</h4>
        <div className={styles.resumeHr}></div>
        </article>
        </section>
        <section title="links">
        </section>
      </main>
      <footer>
      </footer>
    </div>
  )
}
