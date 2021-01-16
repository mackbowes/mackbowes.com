import Head from 'next/head';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import IL from '../components/InlineLink';
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
          <a href="https://twitter.com/mackenziepbowes" target="_blank">twitter</a>{' '}
          <a href="https://go.tinder.com/KUbZnmACVMo-big%20mac" target="_blank">tinder</a>
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
        <Card
        title="RSS Roundup 1"
        info="january 16 2021 / mack bowes / dev stuff">
          <p>In an effort to stay consistent with my writing, I'm launching a new series of reading and summarizing the coolest things I saw in my rss feed on any given morning.<br />
          Today, we're looking at the breadth and depth of big g's cyber barony, a new client-side js framework, economics of coding, and automated atomic CSS.</p>
          <p>this has the added benefit of crystallizing the information consumed and increasing the likelihood that the content can be used in active recall for future problem solving... as well as being searchable by future mac.</p>
          <p>So... the cool things I saw today</p>
          <ul>
            <li>
              <IL href="https://mithril.js.org/" tooltip="mithril.js documentation">mithril.js</IL>, a tiny modern client-side JavaScript framework for building Single Page Applications.
            <ul>
              <li>Additionally, it provides routing and XHR out of the box... I don't know what XHR is right now but I'll look it up soon.</li>
              <li>The routing is cool, usually you have to add a package like react-router-dom or vue-router.</li>
              <li>This is really cool because it has an average response speed of 6.4ms compared to react's 12.1ms - twice as fast (and react is already b&nbsp;l&nbsp;a&nbsp;z&nbsp;i&nbsp;n&nbsp;g.)</li>
            </ul>
            </li>
            <li><IL href="https://gomox.medium.com/google-safe-browsing-can-kill-your-startup-7d73c474b98d" tooltip="a medium article by Gonzalo Sainz Trápaga">This horror story</IL> in a saas startup's interaction with big g's automated 'user-protecting' blacklist feature called <IL href="https://en.wikipedia.org/wiki/Google_Safe_Browsing" tooltip="GSB's wikipedia page">Google Safe Browsing.</IL>
            <ul>
              <li>This is extra cool for reasons we'll see in the next summary</li>
              <li>IT Ticketing System starts showing a super scary red page with security warnings to users</li>
              <li>Support gets flooded, customers think their entire network has been hacked</li>
              <li>Turns out the issue was one subdomain got flagged by an AI at big g</li>
              <li>Once the issue was discovered, it was resolved in 2 hours</li>
              <li>The spooky part: g never revealed why the subdomain was flagged.</li>
              <li>Basically, it's a cautionary tale in saas architecture. X-post under /startup-stuff.</li>
              <li>New best practices: business stuff goes on domain.com, app stuff goes on app.domain.net, subdomain domain.net by region ie EW customers get eurowest.domain.net</li>
              <li>Also, try your best not to play in other peoples sandboxes because you will piss yourself and it will get ugly.</li>
            </ul>
            </li>
            <li>
              So we just saw the scary behemoth side of big g with a chilling visual of a corporate ai so big that it could destroy the livelihoods of you and everyone you know by accident and not notice... at the same time that g's new <IL href="https://jigsaw.google.com/" tooltip="jigsaw by google">jigsaw initiative</IL> won an <IL href="https://www.awwwards.com/" tooltip="The awwwards website">awwward</IL> for their <IL href="https://jigsaw.google.com/the-current/white-supremacy/" tooltip="The Current / White Supremacy on jigsaw.google.com">newest article</IL>.
              <ul>
                <li>no cap the site is well designed - crystal clear hierarchy, content-forward, delightful ui interactions, and advanced ui tech like a fluid clip-path on hover... definitely play with the site on desktop</li>
                <li>I just think it's funny how g is this giganormous automated machine that can accidentally shut down million dollar a year businesses without noticing but pretends it's their job to protect the little guy</li>
                <li>biiiiig <IL href="https://locusmag.com/2021/01/cory-doctorow-neofeudalism-and-the-digital-manor/" tooltip="Neofeudalism and the Digital Manor by Cory Doctorow, Jan 4, 2021">feudalist / manorialist</IL> vibes here, with g essentially saying "I am here to protect you, I'm the only one you can trust to protect you, and I do my best to make sure your life is pleasant and worth while" on the one hand, with a hanging sword of "but if you fuck with me you are <span className={styles.wide}>dead meat</span>..." without clear or responsive guidelines on what is or isn't 'fucking with them.'</li>
              </ul>
            </li>
            <li>That's probably enough 'punk' for one day, let's get back to 'cyber' stuff and discuss <IL href="https://css-tricks.com/on-auto-generated-atomic-css/" tooltip="On Auto-Generated Atomic CSS by Chris Coyier, Jan 15, 2021">automated atomic css.</IL>
              <ul>
                <li>Atomic Css is just cool. Everyone, although this will probably change soon, learns 'semantic' web development when they're getting started.</li>
                <li>Semantic CSS is great for sharing codebases - naming your class 'hero-title' leaves little question about where the class appears and is meant to be implemented.</li>
                <li>If you're not familiar, atomic css uses a 1:1 map of property/value pairs to class names. eg: .mt-8 would contain 'margin-top: 8px'</li>
                <li>generally, you'd pull from a library that contains a <span className={styles.wide}>bunch</span> of such classes, pick and choose what you need to build your UI, then use a compiler to remove any unused classes to deliver super tiny, super clean, super fast css to the client.</li>
                <li>there's tension here, obviously: reading css like 'hero-title' is just way easier than reading css like 'mt-8'... so you have to trade one for the other, right?</li>
                <li>Well, no. The hard work of translating semantic classes to atomic css is a problem that has been solved by 
                  <ul>
                    <li><IL href="https://fela.js.org/" tooltip="Fela's homepage">Fela</IL></li>
                  <li><IL href="https://www.styletron.org/" tooltip="Styletron's homepage">Styletron</IL></li>
                  <li><IL href="https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page" tooltip="a Storybook for React Native Web">React Native Web</IL></li>
                  <li><IL href="https://github.com/kripod/otion" tooltip="Otion's github repo">otion</IL></li>
                  <li><IL href="https://github.com/giuseppeg/style-sheet" tooltip="StyleSheet's github repo">stylesheet</IL></li>
                  </ul>
                </li>
                <li>and they all deserve a little exploration over time.</li>
              </ul>
            </li>
            <li>Finally, code economics. <IL href="https://danielbmarkham.com/code-budgets/" tooltip="Daniel B. Markham's site">Daniel B. Markham</IL> explored the economics of code and programming on january 7, and I thought it was a neat little analysis. Here are the concepts, quickly:</li>
            <ul>
              <li>what does a line of code cost? the time it takes to write? the man-hours that went into it's design, preparation, training, etc etc?</li>
              <li>what is a line of code worth? all the money an app makes in a month / total lines of code? the value of the application to the end user?</li>
              <li>daniel posits that the cost of a line of code grows without bound - it can be poked, prodded, massaged, refactored, rewritten, and so on repeatedly by different engineers ad nauseum &amp; ad infinitum. I agree, that makes sense.</li>
              <li>he also posits that the worth of a line of code is static - once a line of code works in an application to solve a user's issue, further prodding does not increase the value. I somewhat disagree - a line can certainly be refactored to improve speed (yet, not forever) or to remove confusing side effects (yet, not forever).</li>
              <li>from this line of reasoning he posits that engineers and product managers should attempt to enforce budgets on their applications and we should explore minmaxing the relationship of lines of code to produced value.</li>
              <li>this is kind of an industry trend, we're seeing a rise of investing into 'no-code' services like bubble and webflow, both of which are sucky to use yet their creators are millionaires, which seeks to minmax the time and labour cost (via reducing the required user expertise) it takes to produce softwares that solve a user issue.</li>
              </ul>
          </ul>
          <p>the 21st century theme of automation (oft violently) replacing labour, and the surplus value of automation going directly to monolithic corporations rather than the labourers whose labour is being replaced, continue at an accelerating pace. it's highly troubling.</p>
        </Card>
      </main>
      <footer style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignContent: `center`,
        overflowY: `scroll`,
      }}>
        <code style={{
          fontFamily: `monospace`,
          whiteSpace: `pre`,
          margin: `0 auto`,
        }}>
          &nbsp;       |\      _,,,---,,_<br />
          &nbsp; ZZZzz /,`.-'`'    -.  ;-;;,_<br />
          &nbsp;      |,4-  ) )-,_. ,\ (  `'-'<br />
          &nbsp;     '---''(_/--'  `-'\_)<br />
          &nbsp;                                         
        </code>
        <code style={{
          fontFamily: `monospace`,
          whiteSpace: `pre`,
          margin: `0 auto`,
          color: `#d166a8`,
        }}>
          &nbsp;       |\      _,,,---,,_<br />
          &nbsp; ZZZzz /,`.-'`'    -.  ;-;;,_<br />
          &nbsp;      |,4-  ) )-,_. ,\ (  `'-'<br />
          &nbsp;     '---''(_/--'  `-'\_)<br />
          &nbsp;                                         
        </code>
        <code style={{
          fontFamily: `monospace`,
          whiteSpace: `pre`,
          margin: `0 auto`,
          color: `#d19f1f`
        }}>
          &nbsp;       |\      _,,,---,,_<br />
          &nbsp; ZZZzz /,`.-'`'    -.  ;-;;,_<br />
          &nbsp;      |,4-  ) )-,_. ,\ (  `'-'<br />
          &nbsp;     '---''(_/--'  `-'\_)<br />
          &nbsp;                                         
        </code>
      </footer>
    </div>
  )
}
