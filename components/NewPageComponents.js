import {useRef, useEffect, useState} from 'react';
import styles from './NewPageComponents.module.scss';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const LeftMarquee = (props) => {
	const leftInnerMarquee1 = useRef(null);
	const leftEl1 = useRef(null);
	const leftEl2 = useRef(null); 
	const leftEl3 = useRef(null); 
	const leftEl4 = useRef(null); 
	const leftEl5 = useRef(null); 
	const leftEl6 = useRef(null); 
	const [height, setHeight] = useState(100);
	useEffect(() => {
		setHeight(() => {
			
			return (
				parseInt(leftEl1.current.scrollWidth) +
				parseInt(leftEl2.current.scrollWidth) +
				parseInt(leftEl3.current.scrollWidth) +
				parseInt(leftEl4.current.scrollWidth) +
				parseInt(leftEl5.current.scrollWidth) +
				parseInt(leftEl6.current.scrollWidth) + 70
			);
		})
	},[leftEl1]);
	console.log(height);
	gsap.fromTo(leftInnerMarquee1.current,{x: 0}, {x: -height, ease: "none", repeat: -1, duration: 20});
	
	return (
		<div className={styles.leftMarqueeWrap} ref={props.ref}>
			<div className={styles.innerMarqueeMask}>
				<div ref={leftInnerMarquee1} className={styles.innerMarquee}>
					<div ref={leftEl1} className={styles.marqueeItem}>Hire me to build your website</div>
					<div ref={leftEl2} className={styles.marqueeItem}>Hire me to fix your website</div>
					<div ref={leftEl3} className={styles.marqueeItem}>Hire me to design your brand</div>
					<div ref={leftEl4} className={styles.marqueeItem}>Hire me to create your ads</div>
					<div ref={leftEl5} className={styles.marqueeItem}>Hire me to speed up your website</div>
					<div ref={leftEl6} className={styles.marqueeItem}>Hire me to fix your ads</div>
					<div className={styles.marqueeItem}>Hire me to build your website</div>
					<div className={styles.marqueeItem}>Hire me to fix your website</div>
					<div className={styles.marqueeItem}>Hire me to design your brand</div>
					<div className={styles.marqueeItem}>Hire me to create your ads</div>
					<div className={styles.marqueeItem}>Hire me to fix your ads</div>
					<div className={styles.marqueeItem}>Hire me to speed up your website</div>
				</div>
			</div>
		</div>
	)
}

export const RightMarquee = (props) => {
	const rightInnerMarquee1 = useRef(null);
	const rightEl1 = useRef(null);
	const rightEl2 = useRef(null); 
	const rightEl3 = useRef(null); 
	const rightEl4 = useRef(null); 
	const rightEl5 = useRef(null); 
	const rightEl6 = useRef(null); 
	const [height, setHeight] = useState(100);
	useEffect(() => {
		setHeight(() => {
			
			return (
				parseInt(rightEl1.current.scrollWidth) +
				parseInt(rightEl2.current.scrollWidth) +
				parseInt(rightEl3.current.scrollWidth) +
				parseInt(rightEl4.current.scrollWidth) +
				parseInt(rightEl5.current.scrollWidth) +
				parseInt(rightEl6.current.scrollWidth) + 70
			);
		})
	},[rightEl1]);
	console.log(height);
	gsap.fromTo(rightInnerMarquee1.current, { x: 0 }, {
		x: -height, ease: "none", repeat: -1, duration: 20});
	return (
		<div className={styles.rightMarqueeWrap} ref={props.ref}>
			<div className={styles.innerMarqueeMask}>
			<div ref={rightInnerMarquee1} className={styles.innerMarquee}>
					<div ref={rightEl1} className={styles.marqueeItem}>Hire me to build your website</div>
					<div ref={rightEl2} className={styles.marqueeItem}>Hire me to fix your website</div>
					<div ref={rightEl3} className={styles.marqueeItem}>Hire me to design your brand</div>
					<div ref={rightEl4} className={styles.marqueeItem}>Hire me to create your ads</div>
					<div ref={rightEl5} className={styles.marqueeItem}>Hire me to speed up your website</div>
					<div ref={rightEl6} className={styles.marqueeItem}>Hire me to fix your ads</div>
					<div className={styles.marqueeItem}>Hire me to build your website</div>
					<div className={styles.marqueeItem}>Hire me to fix your website</div>
					<div className={styles.marqueeItem}>Hire me to design your brand</div>
					<div className={styles.marqueeItem}>Hire me to create your ads</div>
					<div className={styles.marqueeItem}>Hire me to fix your ads</div>
					<div className={styles.marqueeItem}>Hire me to speed up your website</div>
				</div>
			</div>
		</div>
	)
}

export const BookingModal = (props) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState(null);
	const Modal = useRef(null);

	// Book Consult Form Logic

	async function sendData() {
		let isFormComplete = (name !== '' && name !== null && typeof name !== 'undefined') && (email !== "" && email !== null && typeof email !== 'undefined');
		if (isFormComplete) {
			const headers = new Headers();
			const data = {
				name,
				email,
			}
			let req = {
				method: "POST",
				headers,
				body: JSON.stringify(data),
			};
			const response = await fetch('/api/consult', req).then(res => res.json());
			setMessage('Success');
		}
		else alert("Please complete the form before submitting.");
	}
	
	// Animation Logic

	// gsap.fromTo(Modal.current, {
	// 	opacity: 0,
	// 	y: -100,
	// }, {
	// 	opacity: 1,
	// 	y: 0,
	// 	duration: 1,
	// });

	return (
		<>
			{props.isOpen &&
				<>
				<div className={styles.bookingModalWrap} onClick={props.closeFunction}>
				</div>
				<div className={styles.bookingModal} ref={Modal}>
					{(message == null) ? 
						<>
							<label for="name">Name</label>
							<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
							<label for="email">Email</label>
							<input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
							<button onClick={sendData}>Book</button>
						</>
					: <h2>Thank you for requesting a consult.<br />I'll be in touch soon.</h2>
					}
				</div>
				</>
			}
		</>
	)
}

export const BookingButton = (props) => {
	
	return (
		<>
			<div className={styles.bookingButton} onClick={props.clickFunction}>
				Book Consult
			</div>
		</>
	)
}