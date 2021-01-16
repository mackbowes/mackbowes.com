import Head from 'next/head';
import Card from '../components/Card';
import styles from '../styles/home.module.css';

export default function Home() {



  return (
    <div>
      <Head>
        <title>mack bowes</title>
        <link rel="icon" href="/mlogo.svg" />
      </Head>
      <header className={styles.header}>
        <div>
        <h1>mack bowes</h1>
        <h2>development / marketing / start-up stuff</h2>
        <div style={{display: `block`, alignSelf: `center`, textAlign: `center`,}}>
          <a href="https://github.com/mackbowes" target="_blank">github</a>{' '}
          <a href="https://twitter.com/mackenziepbowes">twitter</a>{' '}
          <a href="https://go.tinder.com/KUbZnmACVMo-big%20mac">tinder</a>
        </div>
        </div>
      </header>
      <main className={styles.main}>
        <Card 
        title="My First React Development Job"
        info="january 15 2021 / mack bowes / dev stuff"
        >
          <p>I'm very proud to report that I have been extended a job offer from an excellent studio in Toronto, Ontario, to join their team as a junior full-stack developer. Unfortunately, I can't share more details and the NDA is fairly extensive, so I won't be able to blog about the projects that I'm working on.</p>
          <p>I can discuss the nature of the work in an abstract way: I'll be working directly on web and mobile apps with a small team of talented, prolific developers.</p>
          <p>I'll be using React, React Native, and NodeJs to build my projects.</p>
          <p>The work is remote as I'm currently living in Langley, British Columbia, which is a bit of a walk (3 timezones) away from Toronto.</p>
          <p>Additionally, I'll be working largely on my own, and that's what gives value to a platform like this =&gt; I'll need a forum for rubber-duck debugging (while taking care to not leak my NDA) and be consuming a wide variety of new API's, techniques, and standards.</p>
          <p>Now that I'm a 'professional developer' rather than a 'hermetic hobbyist,' I feel like I have a story worth sharing and following, and maybe even looking back on at some point in the future.</p>
        </Card>
        <Card 
        title="2021 Goals"
        info="january 15 2021 / mack bowes / dev stuff"
        >
          <p>I haven't been super active in discussing my goals because I've been primarily focused on finding development work... now that i've completed that step, i can start to think about the future, make plans, and set goals.</p>
          <p>I have a bunch of app ideas, some more feasible than others, that I'd eventually like to build and launch. In no particular order, they are:</p>
          <ul>
            <li>OneStop, an 'anti-amazon' social media / ecommerce marketplace that allows users to 'One Stop Shop' merchants in their local area / provide merchants better access to the market they're paying rent to serve.
              <ul>
                <li>The consumer UI should be access through either web or mobile app</li>
                <li>Merchant UI should be separated and accessed either through web or mobile app (a la SkipTheDishes)</li>
                <li>user authentication</li>
                <li>database to store consumers, merchants, posts, storefronts, items</li>
                <li>CRUD backend</li>
                <li>merchant dashboard</li>
                <li>Stripe marketplace integration</li>
              </ul>
            </li>
            <li>Homestead, a social media / ecommerce marketplace (i have a lot of marketplace ideas...) focused on microfarms and recolonizing rural Canada... hopefully to install permaculture and build a new Northern Amazon (rainforest).
              <ul>
                <li>Map all unincorporated/non-municipal land in each canadian province</li>
                <li>Wiki of homesteading/permaculture techniques</li>
                <li>Facilitate trade and barter between microfarms, hobby farms, homesteaders, tool suppliers, and end-consumers of artisan goods like ethical honey, wool, preserves etc.</li>
              </ul>
            </li>
            <li>Gilly, a social media app for anglers... I don't think it would be popular, just would be fun.
              <ul>
                <li>Pull GPS metadata from user's photos to mark a pin on a map of where they caught that fish</li>
                <li>User can share details on fly used, casting technique, time caught etc etc.</li>
              </ul>
            </li>
            <li>For something simpler, a CBN ecommerce store. Apparently there's a new cannabinoid that will trend this year and developing an ecommerce store around this new product will be a good way to keep my branding skills sharp.
              <ul>
                <li>Single page store</li>
                <li>build a brand</li>
                <li>develop a product with a supplier</li>
                <li>sell rundles</li>
                <li>???</li>
                <li>profit, ideally.</li>
              </ul>
            </li>
          </ul>
          <p>I also really need to start working out. I turn 27 this year, and I've been overweight &amp; doughy since I was 18. I think I've more than made up for my extra skinny teen years, and now I have the emotional maturity to put down the candy and pick up some iron.</p>
          <p>famous fat guy words, of course.</p>
          <p>It'd be nice to get a partner again if the right person comes along. It's now been 18 months since I broke up with my fiance which is about half the duration of that relationship, and I think i'm ready for something new :)</p>
        </Card>
      </main>
      <footer>
      </footer>
    </div>
  )
}
