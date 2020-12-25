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
          <h3>hello, nice to meet you.</h3><br />
          <p>my name is mackenzie bowes, you can call me mack, if you like.
          big mac, mac daddy, and daddy mac are also in rotation but I do prefer just 'mack'.<br /></p>
          <h3>i have done a lot of different things:</h3>
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
          <h3>and i'm actively looking for work to apply this experience.</h3>
          </article>

          <article className={styles.column} title="contactLinks">
          <h3>Contact Links:</h3>
          <ul>
          <li><a href="https://github.com/mackbowes">Github</a></li>
          <li><a href="https://twitter.com/mackenziepbowes">Twitter</a></li>
          <li><a href="https://discord.com/users/287285429546385408">Discord</a></li>
          </ul>
          </article>
        </section>
        <div className={styles.sectionHr}></div>
        <h2 className={styles.title}>mack bowes' resume</h2>
        <section title="resume" className={styles.sectionWrapper}>
        <article className={styles.column}>
        <h2>Overview</h2>
        <p>I deeply enjoy creative expression, problem solving, automation, and increasing efficiency. I work well in teams, yet also have put in the necessary effort to start and complete projects on my own. I also work from an underlying belief that the world around me and history as a wider idea are in constant flux so:</p><h4>shipped is better than perfect</h4>
        <h4>&amp; tried is better than planned.</h4><br/>
        <h3>I'm proud of my ability in the following skills:</h3>
        <ul className={styles.ulGrid}>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Git</li>
          <li>HTML - CSS - JS - PHP</li>
          <li>Express.js</li>
          <li>Demand-Driven Product Development</li>
          <li>Design</li>
          <li>Copywriting</li>
          <li>Marketing & Advertising</li>
          <li>MongoDB</li>
          <li>AWS S3 hosting</li>
          <li>GraphQL & RESTful APIs</li>
        </ul>
        <div className={styles.resumeHr}></div>
        <h2>Work History</h2><br />
          <div className={styles.ulGrid}>
            <aside className={styles.resumeBlock}>
              <h3>Metric Web Design - all 2020</h3>
              <h4>Role: Operations</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Delivered 5 high quality and SEO optimized websites for local businesses that provided a net positive Return on Investment</li>
                <li>&rarr; Directly repaired 100+ products in a retail client's inventory database, giving consumers direct access to previously unavailable product.</li>
                <li>&rarr; Successfully consumed Google Maps API on 25+ projects to enhance SERP position of clients' retail outlets</li>
              </ul>
              <p>Metric Web Design is a New Westminister, British Columbia based Web Design, Development, and Marketing service owned and operated by my good friend and only reference, Mitchell Schols.<br />
              I've worked with him throughout 2020 on various projects including some of his flagship retail clients generating millions in revenue as well as small service-based and ecommerce startups.</p>
            </aside>
            <aside className={styles.resumeBlock}>
              <h3>Wiggle Marketing - Spring 2020</h3>
              <h4>Role: Founder</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Developed 5+ $2000+/mo customer relationships through advertising and positioning</li>
                <li>&rarr; Directly produced 5+ Sales Funnels for clients' using Wordpress & featuring super fast load speeds and optimized sales copy.</li>
                <li>&mdash; Unfortunately, COVID-19 halted the economy at critical points of the customer lifecycle; customers abandoned us to conserve runway and consequently we abandoned the start up.</li>
              </ul>
              <p>Wiggle Marketing was an advertising focused startup founded by Mitchell Schols of Metric Web Design and myself. The premise of the product was to provide skilled entreprenuers with an all-in-one solution for Sales Funnels and Digital Advertising, giving my team enhanced access to Conversion Rate Optimization tools that most advertising teams typically do not have access to.</p>
            </aside>
            <aside className={styles.resumeBlock}>
              <h3>GetGoing.ca - Summer 2020</h3>
              <h4>Role: Operations</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Developed robust marketing automations hooking Facebook advertising, Hubspot CRM, and Programmatic Auto Diallers to handle lead flows beyond 100+ leads per day for a new profit center.</li>
                <li>&rarr; Developed and Implemented 6+ Management & Training Systems for sales staff that helped increase monthly revenue from $140k/m to $240k/m between June and August.</li>
                <li>&rarr; Created 40+ high quality, engaging advertising assets that are still profitably in use by GetGoing.ca today (December 2020).</li>
              </ul>
              <p>GetGoing.ca is an automotive lead generation company based in Langley, British Columbia, founded by George Raymond. He brought me on to assist with automating his business as he was looking for a way to scale without bottlenecking the business around himself; George is a preternatural salesman and leader, so he usually solved problems of scale by working harder. Eventually, friction was produced - my role was to avoid bottlenecking and he preferred bottlenecking, I can't force someone into a behaviour, and so I left this role.</p>
            </aside>
            <aside className={styles.resumeBlock}>
              <h3>Marley Jaxx Media - Spring to Winter 2019</h3>
              <h4>Role: Marketing</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Developed advertising strategies and products that accelerated yearly runrate from $500k to $1m+ in my first 6 months.</li>
                <li>&rarr; Directly managed $80,000 in ad spend and achieved a massively profitable ROI.</li>
                <li>&rarr; Oversaw all marketing efforts including social, content, advertising, and joint ventures.</li>
              </ul>
              <p>Marley Jaxx Media is a 'solopreneur' marketing startup run by a woman publicly named Marley Jaxx. Marley had been offering a $50,000 service to script, film, and edit content for other solopreneurs in America, earning about $500k/y or less than 1 sale per month. She brought me on as a strategist to help scale her operation (which I executed flawlessly) before leaving to achieve similar revenues for myself. COVID-19, of course, squashed such plans, and I've had a serious attitude adjustment regarding my personal revenue goals.</p>
            </aside>
            <aside className={styles.resumeBlock}>
              <h3>Willowbrook Chrysler - Winter 2018 to Spring 2019</h3>
              <h4>Role: Operations (IT, Marketing, HR)</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Delivered 10,000+ leads through digital marketing channels</li>
                <li>&rarr; Marketing efforts contributed over $1m/mo in revenue</li>
                <li>&rarr; Developed and implemented 12+ employee management automation systems to reduce friction in onboarding and accelerate sales pipelines</li>
                <li>&rarr; Developed 3+ landing pages to capture and remarket car-buying leads</li>
              </ul>
              <p>Willowbrook Chrysler is an FCA Dealership based in my hometown of Langley, British Columbia. This dealership is a smallish family owned business (Owned by Doug Seale and operated by his son-in-law, Curtis Thompson) with nearly 100 employees. I was originally brought on for IT support - maintaing printer drivers, replacing keyboards, onboarding new users to the inventory management system and so on. The team was impressed with my technical ability and demeanor at work and quickly added responsibilities to my role including digital advertising (that they helped train me in performing) and human resources activites including hiring, firing, and interfacing with employee focused government bodies such as WorkSafeBC. By the time I left, I was instrumental in managing inventory, had 3 direct reports, had delivered tens of thousands of car buying leads, and directly contributed millions in revenue through my marketing efforts.</p>
            </aside>
            <aside className={styles.resumeBlock}>
              <h3>StudioThink - Fall 2017</h3>
              <h4>Role: FrontEnd Intern</h4>
              <ul className={styles.flatUl}>
                <li>&rarr; Developed 10+ Responsive HTML Emails</li>
                <li>&rarr; Assisted in the development of $100,000+ worth of client website projects</li>
                <li>&rarr; Honed my coding skills in transferring 5+ designs from PSDs to Code</li>
                <li>&rarr; Introduced to complex server-side processing with PHP</li>
              </ul>
              <p>StudioThink is a branding agency based in the nearby Surrey, British Columbia suburb locally referred to as Cloverdale. They took me on as a front-end intern which I'm grateful for - I was studying HTML, CSS, and Javascript on my own and was wondering how those skills translated into a working environment. StudioThink used a somewhat rare PHP based content management system called Concrete5 to develop their websites which was a difficult learning curve after primarily working with Wordpress - however embarrasing it was for me to not 100% understand the code, they were nonetheless impressed with my dedication to learning and have provided me with a lovely reference letter.</p>
            </aside>
          </div>
        <div className={styles.resumeHr}></div>
        <h2>Education</h2><br />
          <div className={styles.ulGrid}>
          <div>
          <h3>Kwantlen Polytechnic University</h3>
          <h4>Computer Science, BSc. | Summer 2017 - Spring 2018</h4>
          <p>I had to leave my program to go to work to help support my household due to an injury in the family. Been working in IT roles since then and plan to pursue my degree part time when I find stable work.</p>
          </div>
          <div>
          <h3>FreeCodeCamp</h3>
          <h4>Spring 2017 - Responsive Web Design Certification</h4>
          <h4>Winter 2020 - Front End Libraries Certification</h4>
          <p>What a terrific resource this is! I've finished the Responsive Web Design & Front End Intern Sections and I'm currently switching between the APIs and Microservices &amp; Javascript Algorithms and Data Structures Certifications.</p>
          </div>
          <div>
          <h3>LeetCode</h3>
          <h4>Winter 2020 - Algorithms & Data Structures</h4>
          <p>Another terrific resources. The practice challenges are quite challenging and very satisfying to solve - I'm an especially big fan of ranking solutions in terms of speed and memory which gives me a reason to go back and refactor solutions until I've maximized them.</p>
          </div>
          <div>
          <h3>The Odin Project</h3>
          <h4>Winter 2020 - Ongoing Front End / Back End Exploration</h4>
          <p>I just started with The Odin Project in December 2020 - grateful for them teaching me how to use Git/Github, it's a wonderful tool.</p>
          </div>
          </div>
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
