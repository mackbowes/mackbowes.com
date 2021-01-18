import {useState} from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import IL from '../components/InlineLink';
import styles from '../styles/home.module.css';

export default function Home() {

  const [alertStyle, setAlert] = useState({display: `none`});

  const giveEmail = e => {
    e.preventDefault();
    navigator.clipboard.writeText('mackbowes@pm.me');
    setAlert({display: `block`, textAlign: `center`});
    setTimeout(setAlert, 2500,{display: `none`});
  }

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
        <h3><a href="mailto:mackbowes@pm.me" target="_blank" onClick={giveEmail}>mackbowes@pm.me</a></h3>
        <p style={alertStyle}>email address copied to clipboard</p>
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
        <Card
        title="RSS Round Up 2"
        info="january 17 2021 / mack bowes / cool stuff">
          <p>In this edition of yesterday's news today, I'm going to tell you about some really cool stuff I found. The theme of the day is decidedly more optimistic than yesterday with about 80% less existential anxiety. We'll be talking about mnm, an open-source 10x secure replacement for the SMTP protocol, New York's plans to retrofit old developments for new uses, Veblen Goods, and remoteclub.com.</p>
          <ul>
            <li><IL href="https://mnmnotmail.org/" tooltip="mnm's project site">mnm is not mail,</IL> but an open source legitimate email replacement design for everyone, but especially organizations that require:
            <ul>
              <li>security because a successful phishing attack would be catastrophic and rely on internal email (i.e. every damn body)</li>
              <li>people interacting with sites that discuss sensitive information (legal affairs, health care, job search, family stuff) that don't want their email scanned by big g, michealsoft, et cetera and so on. (once again, that's everybody.)</li>
            </ul>  
            It also provides a ton of new features that are bizarrely missing from traditional email like inline forms, data-driven charts (instead of images)[this is in development], slide decks, hashtagging, hyperlinking to other messages, markdown formatting, and more. It's open source! Sky's the limit!<br />
            <ul>
              <li>You could probably build a solid career out of learning this technology and setting it up for corps.</li>
              <li>I see this technology being leveraged by SaaS startups very soon - could be me, could be you, but this tech is definitely work that needs doing and a very exciting development.</li>
            </ul>
            </li>
            <li><IL href="https://www.ny-engineers.com/blog/adaptive-reuse-financial-feasibility-for-developers" tooltip="Adaptive Reuse: Financial feasibility for developers by Micheal Tobias, January 15, 20201">Adaptive Reuse</IL> is the current chatter in MEP world, and for good reason. Even without the pandemic, our society was trending towards demand patterns discussed in the article - remote work means less travel means less demand for offices and hotels while at exactly the same time demand for apartment space is rising. A fella needs a seperate room for his home office for psychology purposes.<br />
            <br />This discussion comes on the heels of ny Governor Cuomo proposing a 5 Year plan (interesting name) to support adaptive resuse initiatives in the state of new york, especially focused in nyc.<br /><br />
            The article discusses demand levels for different building types and mentions the following:
            <ul>
              <li>Commercial demand is down</li>
              <li>Demand for apartments is rising</li>
              <li>demand for warehousing is rising</li>
              <li>demand for mixed-use (ie <IL href="https://en.wikipedia.org/wiki/Vancouverism" tooltip="Vancouverism urban planning on Wikipedia">vancouverism</IL>) is rising</li>
              <li>industrial real estate is in high demand (this is tremendous news!)</li>
              <li>healthcare space is in high demand (duh - however, this is not a long term demand as vaccines roll out)</li>
              <li>data center space is in high demand</li>
            </ul>
            mixed-use vancouverism is a terrific urban planning policy, which I know because I live near vancouver and it is a lovely place to visit despite the lower east side feeling like level from Doom. live work play communities provide a high quality of living for inhabitants and do allow for higher rents not only in that community, but in nearby communities that are accessible by public transit. <br /><br />
            Personally, I noticed that retail space was missing from this discussion. retail spaces have been trying to juggle two very different parts of the supply chain and sales cycle - they demonstrate their brand's products and warehouse their brand's products. I believe that trying to do both is increasingly becoming unsustainable, and many of these placements need to focus on one or the other. I'd love to see more <IL href="https://www.museumoficecream.com/" tooltip="The Legendary Museum of Ice Cream">Museum of Ice Cream</IL> style interactive experiences that help consumers emotionally connect with product in ways that are impossible when mediated through a web browser, a paradigm that falls directly into the 'mixed use' development strategy. 
            </li>
          <li><IL href="https://en.wikipedia.org/wiki/Veblen_good" tooltip="Veblen Good on Wikipedia">Veblen Goods</IL> is a new-to-me handle for an observed and somewhat unintuitive economic phenomenon / consumer behaviour. This is the name for luxury goods for which demand for that good rises as the price increases - in apparent contradiction to the law of demand.<br/>
          This is what <IL href="https://en.wikipedia.org/wiki/Virgil_Abloh" tooltip="Virgil Abloh's biography on Wikipedia">Virgil Abloh</IL> was discussing when he tweeted that 'design is the freshest scam' all those long years ago. x-post under 'marketing stuff'. related concepts &amp; further reading:
          <ul>
            <li><IL href="https://en.wikipedia.org/wiki/Snob_effect" tooltip="The Snob Effect on Wikipedia">The snob effect</IL>, a phenomenon in microeconomics where demand for a good by individuals of a higher income is inversely related to its demand by those at a lower income level. The phenomenon comes from the desire (and concurrant ability) to own unusual, expensive, or unique goods.</li>
            <li><IL href="https://en.wikipedia.org/wiki/Common_law_of_business_balance" tooltip="Common law of business balance on Wikipedia">The common law of business balance</IL>, usually expressed as 'you get what you pay for,' or the idea that cheap prices indicate poor quality.</li>
            <li><IL href="https://en.wikipedia.org/wiki/Hot_hand" tooltip="'Hot Hand' on wikipedia">The hot hand 'fallacy'</IL>, which I learned today is no longer considered a fallacy after some fancy-schmancy statistical analysis. It was originally observed in sports, particularly basketball, where a player who had just successfully completed a shot on net was rated as more likely to succeed in his next attempt. While it may be true in sports, it's definitely a cognitive bias that is preyed upon in gambling activities like blackjack, roulette, and stock picking (finance bros btfo.) as related to veblen goods, this idea is used as evidence to support a consumers agreement that an expensive product is expensive because it's in high demand.</li>
            <li>Harvey Leibenstein's <IL href="https://www.jstor.org/stable/1882692?seq=1" tooltip="Bandwagon, Snob, and Veblen Effects in the Theory of Consumers' Demand by H. Leibenstien on J Stor, May 1950">'Bandwagon, Snob, and Veblen Effects in the Theory of Consumers' Demand'</IL>, a super serious and definitely scientific treatise of the idea.</li>
            <li><IL href="https://en.wikipedia.org/wiki/Giffen_good" tooltip="Giffen Good on Wikipedia">Giffen Goods</IL>, the theoretical inverse of Veblen Goods where increases in price increase demand in inferior goods. A good example is to imagine someone who eats inferior staples like white bread and supplements with the occaisonal normal good like veg. If the price of bread rises, they purchase more bread because they can't afford all of their normal diet.</li>
          </ul>
          </li>
          <li><IL href="https://remoteclub.com/" tooltip="Remote Club's Site">remote club</IL>, just a fun little resource for anyone who works remote like me to explore moving to different parts of the world.</li>
          </ul>
          <p>I really need to figure out a CMS, typing all this out in jsx is a dangerous game.</p>
        </Card>
      </main>
      <footer style={{
        display: `flex`,
        flexDirection: `row`,
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
