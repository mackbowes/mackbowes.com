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
							Your destiny is calling. You will unlock untold riches by creating a business that sells <b>{product}</b> to people who value <b>{value}</b>, love the <a href={aesthetic.link} target="_blank"><b>{aesthetic.name}</b></a> aesthetic, and prefer the color <b>{color}</b>.
						</p>
						<h2>Your Results Explained</h2>
						<h3>Your Product is <b>{product}</b></h3>
						<p>
							What the product is doesn't really matter. I chose basic commodities that people can incorporate into their identity. Sometimes it's a one time purchase, sometimes it's something that someone has to buy every month or quarter. If you get a one time purchase thing, that's totally fine because you can build an audience profitably and sell the other products to them.
						</p>
						<h3>Your audience values <b>{value}</b></h3>
						<p>
							Your audience's value informs your brands images, photography style, design style, and so on. It also informs your copy - focus on your audiences value on each touch point, relate every post and ad back to {value}, and your audience will feel totally understood by you.
						</p>
						<h3>Your audience loves the <b>{aesthetic.name}</b> aesthetic</h3>
						<p>
							People strive to be part of a group. Use that. Make purchasing your product put them in with the 'in-crowd' of this aesthetic, giving them a sense of status and connection to a community they admire but don't quite feel like they're a part of (hint: no one really feels welcome in any aesthetic group).
						</p>
						<h3>Your audience prefers <b>{color}</b></h3>
						<p>
							Maybe they don't. Don't get hung up on this color, or assumy that they will betray your brand if you don't use this color. There are other colors, especially if your aesthetic is color specific rather than ethos specific or multi-colored. Use the color preference to choose a direction with audiences whose values and aesthetic don't demand a specific palette.
						</p>
					</Section>
				</Block>
			</Page>
		</Background>
		</>
	)
}


