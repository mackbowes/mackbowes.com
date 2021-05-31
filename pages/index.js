import Head from 'next/head';
import styles from '../styles/home.module.scss';
import { getSortedPosts } from "../lib/posts";
import {Page, Nav, Background, Block, Spacer, BlogGrid, BlogCard} from '../components/PageComponents';

export default function Home({allPostsData}) {


  return (
	<>
	<Background>
		<Nav title={'Home'}/>
		<br />
			<Block>
				<h1>Hi, I'm Mack Bowes.</h1>
				<br />
				<p>There could be more stuff here but I'm not quite sure what to put.</p>
			</Block>
			<br />
			<BlogGrid>
				{allPostsData.map((post) => {
					let content = post?.excerpt;
					content = content?.toString();
					let length = 100;
					content = content?.substring(0, length);
					content = content + '...';
					let returnedContent = (content !== 'undefined...') ? content : post.excerpt
					return (
						<>
						<BlogCard 
						key={post.slug} 
						title={post.title} 
						content={returnedContent} 
						category={post.category} 
						target={`/blog/${post.slug}`}/>
						</>
					)
				})}
			</BlogGrid>
	</Background>
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