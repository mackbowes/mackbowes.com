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
        image="/RSD-portfolio.png"
        link="http://realsupport.digital"
        alt="Realsupport.digital project image"
        title="Realsupport.digital marketing site [WIP]"
        body="RealSupport.digital (RS.D) is a service startup for the real estate industry. Eventually, I'm going to integrate the API's for Stripe to manage payments and automatically route orders to some sort of Print on Demand API."
        gitHub="https://github.com/mackbowes/rsd"
        gitHubText="View On github"
        />
        <PortfolioCard
        image="/WeatherApp-01.png"
        link="https://weather-demo-6ef43.web.app/"
        alt="An image of a Hurricane from above used to represent the concept of weather"
        title="Restful, Responsive Weather App"
        body="This is a demonstration app that consumes a RESTful API to provide data to the front end and modulates the front end using Hooks and Conditionals."
        gitHub="#"
        gitHubText="Not Yet on Github"
        />
        
      </div>
    </div>
  )
}


