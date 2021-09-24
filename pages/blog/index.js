import Head from 'next/head'
import { getSortedPosts } from "../../lib/posts";
import { Page, Nav, Background, Block, Spacer, BlogGrid, BlogCard } from '../../components/PageComponents';

const BlogIndex = ({ allPostsData }) => {


	return (
		<>
			<Background>
				<Nav />
				<Page>
					<Head>
						<title>All Posts | Mack Bowes</title>
					</Head>
					<Spacer height={`4rem`} />
					{allPostsData.map((post) => {
						return (
							<>
								<Block>
									<div key={post.slug}>
										<h1><a href={`/blog/${post.slug}`}>{post.title}</a></h1>
										<h2>{post.author} | {post.date}</h2>
										<p>{post.excerpt}</p>
										<button><a href={`/blog/${post.slug}`}>Read More</a></button>
									</div>
								</Block>
								<Spacer height={`2rem`} />
							</>
						)
					})}
				</Page>
			</Background>
		</>
	)
}

export default BlogIndex;

export async function getStaticProps() {
	const allPostsData = getSortedPosts();
	return {
		props: {
			allPostsData,
		},
	};
}