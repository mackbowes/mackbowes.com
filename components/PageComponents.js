import Head from 'next/head';
import Image from 'next/image';
import styles from './PageComponents.module.scss';


export const Spacer = (props) => {

	const style = {
		display: `block`,
		height: props.height,
	}

	return (
		<div style={style}></div>
	)
}

export const Page = (props) => {

	return (
		<div className={styles.pageWrapper}>
			<div className={styles.innerContent}>
				{props.children}
			</div>
		</div>
	)
}

export const Background = (props) => {
	return (
		<div className={styles.background}>
			{props.children}
		</div>
	  )
}

export const Nav = (props) => {
	
	return (
		<>
		<Head>
        <title>mb | {props.title}</title>
        <link rel="icon" href="/mlogo.svg" />
      	</Head>
		  <Block>
			<div className={styles.nav}>
				<div className={styles.logo}><Image src="/SITELOGO-01.svg" height={45} width={80}/></div>
			</div>
		</Block>
		</>
	)
}

export const Block = (props) => {

	let style;
	if (props.isFixed) {
		style = {position: `fixed`}
	}

	return (
		<div className={styles.block} style={style}>
			{props.children}
		</div>
	)
}

export const BlogGrid = (props) => {

	return (
		<div className={styles.blogGrid}>
			{props.children}
		</div>
	)
}

export const BlogCard = (props) => {

	let excerpt = props.content;
	let category = props.category;
	if (category !== 'Programming' && category !== 'Marketing') {
		category = null;
	}
	return (
		<div className={styles.blogCard}>
			{(props.image) 
			? <img src={props.image.src} alt={props.image.alt} />
			: null}
			<a href={props.target}><h3>{props.title}</h3></a>
			<p>{excerpt}</p>
			<h4>Category: <a href={`/blog${(category) ? '/' + category.toLowerCase() : '/'}`}>{category || 'Miscellaneous'}</a></h4>
		</div>
	)
}