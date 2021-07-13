import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/home.module.scss';
import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { getSortedPosts } from "../lib/posts";
import { LeftMarquee, RightMarquee, BookingModal, BookingButton} from '../components/NewPageComponents';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Home({ allPostsData }) {
	

	// State controls
	const [isModalOpen, setIsModalOpen] = useState(false);


	// Refs
	const Image1 = useRef(null);
	const Indicator1 = useRef(null);
	const Content1 = useRef(null);
	const Paragraph1 = useRef(null);
	const Section1 = useRef(null);
	const Section2 = useRef(null);
	const Section3 = useRef(null);
	const Section4 = useRef(null);
	
	// Intro animations
	gsap.fromTo(Image1.current, { opacity: 0, y: 100 }, { opacity: 0.5, y: 0, duration: 1, delay: 1.5 });
	gsap.fromTo(Indicator1.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
	gsap.fromTo(Content1.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
	gsap.fromTo(Paragraph1.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 1 });

	// Section 1 Scroll animations
	useEffect(() => {
		gsap.to(Section1.current, {
			scrollTrigger: {
				trigger: Section1.current,
				start: 'top top',
				scrub: true,
				pin: true,
			},
			opacity: 0,
		});
		gsap.to(Section2.current, {
			scrollTrigger: {
				trigger: Section2.current,
				start: 'top top',
				scrub: true,
				pin: true,
			},
			opacity: 0,
		});
		gsap.to(Section3.current, {
			scrollTrigger: {
				trigger: Section3.current,
				start: 'top top',
				scrub: true,
				pin: true,
				snap: 1,
			},
			opacity: 0,
		});
		gsap.to(Section4.current, {
			scrollTrigger: {
				trigger: Section4.current,
				start: 'top top',
				scrub: true,
				pin: true,
				snap: 1,
			},
			opacity: 0,
		});
	},[]);


  	return (
		<>
			<LeftMarquee/>
			<RightMarquee/>
				<BookingModal isOpen={isModalOpen} closeFunction={() => {setIsModalOpen(false)}}/>
				<BookingButton clickFunction={() => {setIsModalOpen(true)}}/>
			<div className={styles.page}>
			<div ref={Section1} className={styles.section}>
				<img ref={Image1} draggable="false" className={styles.meRight} src="/images/meweird.png" />
				<div ref={Indicator1} className={styles.indicator} style={{top: '49%'}}>
					<div className={styles.dot} style={{backgroundColor: 'black' }}></div>
					<div className={styles.line} style={{backgroundColor: 'black', height: '48vh'}}></div>
				</div>
				<div ref={Content1} className={styles.content}>
					<div>
						<h2>Howdy, I'm</h2>
						<h1>Mackenzie Bowes.</h1>
						<p ref={Paragraph1}>I’m a front-end developer, marketing &amp; creative strategist, and digital advertising consultant. </p>
					</div>
				</div>
			</div>
			<div className={styles.section}></div>
			<div ref={Section2} className={styles.section}>
			<img draggable="false" className={styles.meLeft} src="/images/mewkeyboard.png" />
			<div className={styles.indicator} style={{top: '18%'}}>
				<div className={styles.dot} style={{backgroundColor: 'black'}}></div>
				<div className={styles.line} style={{backgroundColor: 'black', height: '77vh'}}></div>
			</div>
			<div className={styles.content}>
				<div>
					<h2>Front End Development</h2>
					<p>“Front End Development” is the process of writing computer code to create user interfaces for programs delivered through the internet.</p>
					<p>Programs can vary in scale based on the back end provided from simple local service lead generation to cryptocurrency banking.</p>
					<p>Front Ends are constantly maintained and updating to provide delightful and engaging brand touchpoints for every business.</p>
					<p>Neglecting your Front End leaves you open to losing out on new customers to more tech savvy competition.</p>
					<p>In certain cases, a neglected or outdated Front End even exposes your customer base to security risks.</p>
					<p>If you’ve been wondering if your website is working right for you...<br />... or you need somebody with technical chops to make your vision come to life...</p>
					<p>I’d be happy to help.</p>
				</div>
			</div>
			</div>
			<div className={styles.section}></div>
			<div ref={Section3} className={styles.section}>
				<img draggable="false" className={styles.meRight} src="/images/mesmrt.png" />
				<div className={styles.indicator} style={{top: '32%'}}>
					<div className={styles.dot} style={{backgroundColor: 'black' }}></div>
					<div className={styles.line} style={{backgroundColor: 'black', height: '63vh'}}></div>
				</div>
				<div className={styles.content}>
					<div>
						<h2>Marketing &amp; Creative Strategy</h2>
							<p>We’re living through an industrial revolution that is changing society and culture at an unprecedented speed and at an unprecedented scale.</p>
							<p>Barriers to entry to business are lower than ever which has lead to massive competition... for people using standard and outdated marketing models.</p>
							<p>Competing on price has driven thousands of would-be entreprenuers into debt and frustration.</p>
							<p>If you’re looking to improve revenue or add users, a strong digital native marketing and strategy is key.</p>
					</div>
				</div>
			</div>
			<div className={styles.section}></div>
			<div ref={Section4} className={styles.section}>
				<img draggable="false" className={styles.meLeft} src="/images/mesrs.png" />
				<div className={styles.indicator} style={{top: '36%'}}>
					<div className={styles.dot} style={{backgroundColor: 'black'}}></div>
					<div className={styles.line} style={{backgroundColor: 'black', height: '60vh'}}></div>
				</div>
				<div className={styles.content}>
					<div>
						<h2>Digital Advertising Consultancy</h2>
							<p>Digital advertising is notoriously opaque. That industry is quickly moving towards requiring a degree in statistics to interpret, analyse, and understand.</p>
							<p>On top of that, with new privacy laws coming online that prevent tracking, remarketing, and audience segementation, costs are skyrocketing.</p>
							<p>A good advertising strategy is difficult to implement, but still necessary for good, consistent growth.</p>
							<p>P.S. I've achieved 56x ROAS on Facebook in the past. Are your campaigns hitting targets like that?</p>
					</div>
				</div>
			</div>
			<div className={styles.section}>
			<img draggable="false" className={styles.meRight} src="/images/mesmrt.png" />
				<div className={styles.content}>
					<div>
						<h2>So hire me to fix stuff.</h2>
							<p>From improving site speed to increasing conversions to developing products to repairing broken advertising campaigns, I'm here to help.</p>
							<p>Just hit Book Consult above to get started.</p>
					</div>
				</div>
			</div>
			</div>
	</>
  )
}

export async function getStaticProps() {
	const allPostsData = getSortedPosts();
	return {
		props: {
			allPostsData,
		},
	};
}