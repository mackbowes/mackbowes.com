import {useEffect, useState} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';
import {Page, Nav, Background, Block, Spacer} from '../../components/PageComponents';
import {Section} from '../../components/BlogComponents';
import {Age, Demographics, NegativeStates, Identities, Markets, HealthNiches, HealthAdjectives, HealthVehicles, WealthNiches, WealthAdjectives, WealthVehicles, RelationshipNiches, RelationshipAdjectives, RelationshipVehicles, EnemyAdjectives, Enemies} from '../../lib/avatars';
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
	let state = {};

	useEffect(() => {
		state = JSON.parse(localStorage?.state);
	},[])

	const [age, setAge] = useState(Age());
	const [isAgeLocked, setIsAgeLocked] = useState(state.isAgeLocked || false);
	const [demographic, setDemographic] = useState(Demographics[0]);
	const [name, setName] = useState(demographic?.name);
	const [gender, setGender] = useState(demographic?.gender);
	const [negativeState, setNegativeState] = useState(Randomize(NegativeStates));
	const [identity, setIdentity] = useState(Randomize(Identities));
	const [market, setMarket] = useState(Randomize(Markets));
	const [interest, setInterest] = useState('');
	const [niche, setNiche] = useState();
	const [positiveState, setPositiveState] = useState();
	const [vehicle, setVehicle] = useState();
	const [enemyAdjective, setEnemyAdjective] = useState(Randomize(EnemyAdjectives));
	const [enemy, setEnemy] = useState(Randomize(Enemies));


	const rollMarket = () => {
		setMarket(Randomize(Markets));
	}
	const rollAge = () => {
		if (!isAgeLocked) {
			setAge(Age());
		}
	}
	const rollDemographic = () => {
		setDemographic(Randomize(Demographics));
	}

	const rollNegativeState = () => {
		setNegativeState(Randomize(NegativeStates));
	}

	const rollIdentity = () => {
		setIdentity(Randomize(Identities));
	}

	const rollEnemyAdjective = () => {
		setEnemyAdjective(Randomize(EnemyAdjectives));
	}
	const rollEnemy = () => {
		setEnemy(Randomize(Enemies));
	}

	const rollNiche = () => {
		switch (market) {
			case 'Health':
				setNiche(Randomize(HealthNiches));
				setPositiveState(Randomize(HealthAdjectives));
				setVehicle(Randomize(HealthVehicles));
				break;
			case 'Wealth':
				setNiche(Randomize(WealthNiches));
				setPositiveState(Randomize(WealthAdjectives));
				setVehicle(Randomize(WealthVehicles));
				break;
			case 'Relationships':
				setNiche(Randomize(RelationshipNiches));
				setPositiveState(Randomize(RelationshipAdjectives));
				setVehicle(Randomize(RelationshipVehicles));
				break;
			default:
				break;
		}
	}

	const ROLLTHEMBONES = () => {
		rollAge();
		rollDemographic();
		rollNegativeState();
		rollIdentity();
		rollMarket();
		rollNiche();
		rollEnemyAdjective();
		rollEnemy();

		router.push('#statusAndNiche');
	}

	useEffect(() => {
		setName(demographic.name);
		setGender(demographic.gender);
		switch (market) {
			case 'Health':
				setInterest('improving their health');
				setNiche(Randomize(HealthNiches));
				setPositiveState(Randomize(HealthAdjectives));
				setVehicle(Randomize(HealthVehicles));
				break;
			case 'Wealth':
				setInterest('getting more money');
				setNiche(Randomize(WealthNiches));
				setPositiveState(Randomize(WealthAdjectives));
				setVehicle(Randomize(WealthVehicles));
				break;
			case 'Relationships':
				setInterest('building better relationships');
				setNiche(Randomize(RelationshipNiches));
				setPositiveState(Randomize(RelationshipAdjectives));
				setVehicle(Randomize(RelationshipVehicles));
				break;
			default:
				setInterest('improving themselves');
				break;
		}
	},[demographic, market])

	useEffect(() => {
		state.isAgeLocked = isAgeLocked;
		state.age = age;

		localStorage.state = JSON.stringify(state);
	},[isAgeLocked]);

	return (
		<>
		<Background>
			<Nav />
			<Page>
				<Head>
					<title>Avatar Generator | Mack Bowes</title>
				</Head>
				<Block>
					<div style={{padding: `1rem`}}>
						<h1>Avatar Generator</h1>
						<h3>published on May 31 2021 by Mack Bowes</h3>
						<Spacer height={`1rem`} />
					</div>
					<div style={{maxWidth: `70ch`}}>
						<h4>Preamble</h4>
						<p>I wrote this generator to help me come up with ideas for funnels to build and attract my ideal client: people who have a product to market, and need funnels built to sell it.<br />
						I'm not super interested in inventing products - I like to code, do copywriting, and set up automations. So this generator makes it dead simple to invent 'dummy products' that I can build example funnels around.<br />
						I included it on my website to help any other developer who is in the same boat.</p>
						<p>Sometimes, the language isn't exactly right. Consider the copy produced here to be a starting block that you can edit to perfection later if you choose.</p><br />
						<p>All you have to do to get started is hit the button below.</p>
						<button style={{padding: `1ex 1em`, fontSize: `1rem`, margin: `1ex 0`}} onClick={() => ROLLTHEMBONES()}>Roll a new avatar</button>
						<br /><br />
					</div>
					<Section>
						<h2 id="statusAndNiche">Status and Niche</h2>
						<p>
							Your avatar is <b>{name}</b>, a <b>{age}</b> year old <b>{gender}</b>. <br />Currently, they are a <b>{negativeState} {identity}</b> interested in <b>{interest}</b>.
							<br />
							Specifically, <b>{name}</b> thinks that getting <b>{niche}</b> is exactly what they need to achieve their goals, but they're not quite sure where to get started.<br />
						</p>
						<p>
							<b>{name}</b> strongly believes that <b>{interest}</b> is the key to living a better life. By <b>{interest}</b>, <b>{name}</b> will feel safer and more secure in their body, in their home, have more hope for the future, be able to enjoy their free time more, make their parents proud, improve their family life, and in general... <em>achieve true happiness</em>. And as far as <b>{name}</b> is concerned, <b>{niche}</b> is the fastest and easiest way to get it.
						</p>
						<p>
							<b>{name}</b> desperately wants to shed their identity as a <b>{negativeState} {identity}</b> and simply become a <b>{positiveState} {gender}</b>. Their attachment to the <b>"{negativeState} {identity}"</b> identity is temporary and frankly gets in their way... so the faster they can shed it by <b>{interest},</b> <em>the better!</em>
						</p>
						<p>
							There's a problem, though: <b>{interest}</b> through <b>{niche}</b> is a big and complicated topic with a lot of side-paths and distractions, and making the right decision is really important to <b>{name}</b>. They can't wait around forever for inefficient solutions to work! <b>{name}</b> may have even tried a few methods to figure out <b>{interest}</b> in the past, and for whatever reason it didn't work... or they're looking for the next thing to get <em>more of the same!</em> They're always on the look-out for information that can help them understand <b>{niche}</b> on a deeper level so they can make a decision without getting burnt and achieve success.<br />
						</p>
						<Box>
						<h3>What are some little known aspects of {niche} that {name} might be looking for?</h3>
						<br />
						<p>The answers to this question become your avatar's <em>focus.</em><br />Your avatar's <em>focus</em> is the keyword phrase that's <em>always on their mind</em> and will capture their attention anywhere. Like calling their name, {name}, out in a crowded room.</p>
						</Box>
						<p>
							<h2>Enemies</h2>
							<b>{name}</b> really wants to avoid wasting time and money on <b>{enemyAdjective} {enemy}</b>. They're on a mission to succeed, and these other <b>{enemy}</b> are just getting in the way. <br />
							It seems like everybody has some 'magic solution' that instantly works... but <b>{name}</b> knows better. These 'magic solutions' are just distractions from the truth about <b>{interest}</b> through <b>{niche}</b>. <b>{name}</b> is unique, with unique circumstances... how could there possibly be a magic 'one-size-cures-all' solution that works for everyone?<br /><br />
							<em>Where is the solution that works for {name}?</em>
							<br/><br />
							They've seen the ads promising instant results before, and may have even bought in to some other <b>{enemyAdjective} {enemy}</b> who really let <b>{name}</b> down on their journey to <b>{interest}</b> through <b>{niche}</b>.
						</p>
						<Box>
						<h3>How did previous <b>{enemy}</b> fail to help {name}?</h3><br />
						<p>The answers to this question will help you build a <em>connection</em> with {name} and build better products for them. Call out these failures - <em>never blame {name}</em> - and address how you're different from all those other {enemyAdjective} {enemy}.</p>
						</Box>
						<h2>Secret Sauce</h2>
						<p>
							<b>{name}</b> is convinced that there's actually a secret to unlocking the true potential of <b>{niche}</b>, but for one reason or another <b>{name}</b> has failed to unlock it. This is really frustrating for <b>{name}</b> because they can see so many examples of people online living the life that <b>{name}</b> wants... If they can figure it out, why not <b>{name}</b>!?<br /><br />
							<em>There must be some way... maybe one more late-night search...</em><br /><br />
							When <b>{name}</b> is researching <b>{niche}</b>, they can't quite shake the feeling that all of the <b>{enemyAdjective} {enemy}</b> are keeping this secret from them and happiness is destined to be just out of reach forever.<br />
							Or, even more frustrating, the answer is right in front of <b>{name}'s</b> face but there's so much noise from other <b>{market} "Experts"</b> that <b>{name}</b> can't see it!<br />
							And... perhaps it's difficult for <b>{name}</b> to admit, but sometimes the information they find is so dense that they simply <em>don't understand it.</em>
						</p>
						<p>
							The truth is... <b>{name}</b> just doesn't have the time, money, or energy to continue on this path of doing research themselves. They're already so <em>busy making ends meet</em> that they can't run expensive experiments, develop or test new products only to find out they fail, or risk losing their current hard-won achievements by making a mistake. <b>{name}</b> really just wants <b>{niche}</b> to make sense so it's easy to make a decision about how to achieve better <b>{market}</b>.
						</p>
						<Box>
						<h3>What isn't {name} understanding about {niche}?</h3><br />
						<p>→ Which commonly held myth is <b>{name}</b> working under that's SEWERING their results?</p><br />
						<p>→ What confusing part of <b>{niche}</b> have all the other <b>{enemy}</b> failed to explain to <b>{name}</b> in a way they <em>actually understand?</em></p><br />
						<p>→ What aspect of <b>{niche}</b> worked a few years ago but is no longer relevant or working?</p><br />
						<p>The answer to these questions will create the <em>secrets</em> you can provide to {name}, separating you from all the other {market} 'experts' that aren't serving {name}.</p>
						</Box>
						<h3>The Solution</h3>
						<p>
							What <b>{name}</b> really needs is some kind of <b>{vehicle}</b> to come along and unlock the secrets of <b>{niche}</b> so they can STOP being just another <b>{negativeState} {identity}</b> and finally become a <b>{positiveState} {gender}</b>. <br />
							<b>{name}</b> needs a <b>{vehicle}</b> developed specifically for <b>{identity}s</b>, one that understands the problems that <b>{identity}s</b> go through every day and how that makes it so hard for them to finally solve <b>{niche}</b>.
						</p>
					</Section>
					<button onClick={() => ROLLTHEMBONES()}>Roll</button>
				</Block>
			</Page>
		</Background>
		</>
	)
}

const LockingVariable = (props) => {

	const style = {
		display: `inline-block`,
		fontWeight: 900,
		border: 'none',
		backgroundColor: `transparent`,
		width: `2ch`,
		marginRight: `1ch`,
		borderBottom: `1px dotted rgba(0,0,0,0.66)`,
		fontSize: `1rem`,
	}

	const buttonStyle = {
		outline: `none`,
		border: `none`,
		backgroundColor: `transparent`,
		fontSize: `1rem`,
		cursor: `pointer`,
	}

	return (
		<>
		<input type="text" style={style} onChange={props.changeFunction} value={props.value}/>
		<button style={buttonStyle} onClick={props.lockFunction}>{props.isLocked ? <RiLockLine /> :  <RiLockUnlockLine />}</button>	
		</>
		)
}

const Box = (props) => {

	const style = {
		border: `1px dotted rgba(0,0,0,0.25)`,
		padding: `1ex 1em`,
	}

	return (
		<div style={style}>{props.children}</div>
	)
}