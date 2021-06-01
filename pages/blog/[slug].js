import Head from 'next/head';
import {getAllPostSlugs, getPostData} from '../../lib/posts';
import {serialize} from 'next-mdx-remote/serialize'
import {MDXRemote} from 'next-mdx-remote'
import {Page, Nav, Background, Block, BlogGrid, BlogCard} from '../../components/PageComponents';
import {
	BlogWrap, 
	Spacer, 
	Title, 
	Section, 
	Video} from '../../components/BlogComponents';
import {
	Button
} from '../../components/FormComponents';
import matter from 'gray-matter';

const components = {BlogWrap, Spacer, Title, Section, Video, Button};

export default function Post({ content, frontMatter }) {
	return(
		<>
		<Background>
		<Nav title={frontMatter.title}/>
		<Page>
			<Block>
				<div style={{padding: `1rem`}}>
					<h1>{frontMatter.title}</h1>
					<h3>published on {frontMatter.date} by {frontMatter.author}</h3>
					<Spacer height={`1rem`} />
					<p>{frontMatter.excerpt}</p>
					<Section>
					<MDXRemote {...content} components={components}/>
					</Section>
				</div>
			</Block>
		</Page>
		</Background>
		</>
	)
}

export async function getStaticPaths() {
	const paths = getAllPostSlugs();
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params}) {
	const postContent = await getPostData(params.slug);
	const { data, content } = matter(postContent);
	const mdxSource = await serialize(content, {scope: data});
	return {props: {content: mdxSource,frontMatter: data}};
}