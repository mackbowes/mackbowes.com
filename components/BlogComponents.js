import {useEffect} from 'react';
import styles from './BlogComponents.module.scss';


export const Spacer = (props) => {

	const style = {
		display: `block`,
		height: props.height,
	}

	return (
		<div style={style}></div>
	)
}

export const Title = (props) => {

	return (
		<h1 className={styles.title}>
			{props.children}
		</h1>
	)
}

export const Section = (props) => {

	return (
		<div className={styles.section} id={props.id}>
			{props.children}
		</div>
	)
}

export const BlogWrap = (props) => {

	return (
		<div className={styles.blogWrap}>
			{props.children}
		</div>
	)
}

export const Video = (props) => {

	let src = props.src;
	let title = props.title;

	return (
		<div className={styles.videoComponent} id={props.id}>
			<h2><a href={`https://www.youtube.com/watch?v=${src}`} target="_blank">{title}</a></h2>
			<div className={styles.videoWrapper}>
				<iframe width="1600" height="900" src={`https://www.youtube.com/embed/${src}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
			</div>
			{(props.children) 
			? <caption>{props.children}</caption>
			: null}
		</div>
	)
}

