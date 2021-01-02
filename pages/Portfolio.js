import Head from 'next/head'
import Link from 'next/link'
import Nav from '../components/nav'
import Button from '../components/Button.js';
import PortfolioCard from '../components/portfoliocard.js';
import { motion } from "framer-motion"
import styles from '../styles/Home.module.css'

export default function Home() {
  return(
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Mack Bowes</title>
      </Head>
      <Nav />
      <div className={styles.portfolioWrapper}>
        <PortfolioCard
        image="https://via.placeholder.com/800"
        link="/"
        alt="Placeholder image"
        title="Placeholder"
        body="Placeholder image"
        />
        <PortfolioCard
        image="https://via.placeholder.com/250"
        alt="Placeholder image"
        title="Placeholder image"
        body="Placeholder image"
        />
        <PortfolioCard
        image="https://via.placeholder.com/250"
        alt="Placeholder image"
        title="Placeholder image"
        body="Placeholder image"
        />
        <PortfolioCard
        image="https://via.placeholder.com/500x250"
        alt="Placeholder image"
        title="Placeholder image"
        body="Placeholder image"
        />
        <PortfolioCard
        image="https://via.placeholder.com/250"
        alt="Placeholder image"
        title="Placeholder image"
        body="Placeholder image"
        />
      </div>
    </div>
  )
}
