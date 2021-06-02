import {useEffect, useState} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';
import {Page, Nav, Background, Block, Spacer} from '../../components/PageComponents';
import {Section} from '../../components/BlogComponents';
import {Button} from '../../components/FormComponents';
import {aesthetics, colors, products, values} from '../../lib/products.js';
import {RiLockLine, RiLockUnlockLine} from 'react-icons/ri';



/**
 * 
 * @param {array} array Which array do you want to get a random value from?
 * @returns The contents of a random index of an array
 */
const Randomize = (array) => {
	const index = Math.floor(Math.random() * array.length);
	return array[index]
}

export default function ThisPage() {
	const router = useRouter();

	const [aesthetic, setAesthetic] = useState('');
	const [color, setColor] = useState('');
	const [product, setProduct] = useState('');
	const [value, setValue] = useState('');

	const ROLLTHEMBONES = () => {
		setAesthetic(Randomize(aesthetics));
		setColor(Randomize(colors));
		setProduct(Randomize(products));
		setValue(Randomize(values));
	}

	useEffect(() => {
		ROLLTHEMBONES();
	},[])



	return (
		<>
		<Background>
			<Nav />
			<Page>
				<Head>
					<title>Brand Generator | Mack Bowes</title>
				</Head>
				<Block>
					<div style={{padding: `1rem 0`}}>
						<h1>Brand Generator</h1>
						<h3>Quickly generate a brand to start building your ecommerce empire</h3>
						<Spacer height={`1rem`} />
						<Button clickFunction={() => ROLLTHEMBONES()}>Roll New Avatar</Button>
						<Spacer height={`1rem`} />
					</div>
					<Section>
						<h2 id={'Product'}>Your Product</h2>
						<p>
							Your destiny is calling. You will unlock untold riches and become a true sigma boss by creating a business that sells <b>{product}</b> to people who value <b>{value}</b>, love the <a href={aesthetic.link}><b>{aesthetic.name}</b></a> aesthetic, and prefer the color <b>{color}</b>.
						</p>
					</Section>
				</Block>
			</Page>
		</Background>
		</>
	)
}


