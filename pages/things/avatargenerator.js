import {useEffect, useState} from 'react';
import Head from 'next/head'
import {useRouter} from 'next/router';
import {Page, Nav, Background, Block, Spacer} from '../../components/PageComponents';
import {Section} from '../../components/BlogComponents';
import {Button} from '../../components/FormComponents';
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
					<div style={{padding: `1rem 0`}}>
						<h1>Avatar Generator</h1>
						<h3>Quickly generate an avatar to start building your ecommerce empire</h3>
						<Spacer height={`1rem`} />
						<Button clickFunction={() => ROLLTHEMBONES()}>Roll New Avatar</Button>
						<Spacer height={`1rem`} />
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
						<p>
							<b>{name}'s</b> focus phrases go directly into your social media and advertising.
						</p>
						</Box>
						<p>
							<h2>Enemies</h2>
							<b>{name}</b> really wants to avoid wasting time and money on <b>{enemyAdjective} {enemy}</b>. They're on a mission to succeed, and these other <b>{enemy}</b> are just getting in the way. 
							<br /><br />
							These <b>{enemyAdjective} {enemy}</b> are more than just <b>{enemyAdjective}</b>, too. They can be confusing, dishonest, greedy, self-serving, self-obsessed, inexperienced, or just straight up DISHONEST and are really just out for themselves and are more than happy to LIE to <b>{name}</b> to get the results that the <b>{enemy}</b> wants... even at <b>{name}'s</b> expense.<br /><br />
							It seems like everybody has some 'magic solution' that instantly works... but <b>{name}</b> knows better. These 'magic solutions' are just distractions from the truth about <b>{interest}</b> through <b>{niche}</b>. <b>{name}</b> is unique, with unique circumstances... how could there possibly be a magic 'one-size-cures-all' solution that works for everyone?<br /><br />
							<em>Where is the solution that works for {name}?</em>
							<br/><br />
							They've seen the ads promising instant results before, and may have even bought in to some other <b>{enemyAdjective} {enemy}</b> who really let <b>{name}</b> down on their journey to <b>{interest}</b> through <b>{niche}</b>.
						</p>
						<Box>
						<h3>How did previous <b>{enemy}</b> fail to help {name}?</h3><br />
						<p>Have previous <b>{enemy}</b> lied? Omitted crucial information? Failed to explain the details? Used technical jargon that makes no sense? Sold products that don't actually work?</p>
						<p>The answers to this question will help you build a <em>connection</em> with {name} and build better products for them. Call out these failures - <em>never blame {name}</em> - and address how you're different from all those other {enemyAdjective} {enemy}.</p>
						<p>The answers here go on to your <em>sales page.</em></p>
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
						<p>The answer to these questions will create the <em>secrets</em> you can provide to {name}, separating you from all the other {market} 'experts' that aren't serving {name}. They help create and position your product.</p>
						</Box>
						<h3>The Solution</h3>
						<h4>The Vehicle</h4>
						<p>
							<b>{name}</b> would be ecstatic to discover that there was some kind of <b>{vehicle}</b> to come across her radar and simple unlock the secrets of <b>{niche}</b>.
						</p>
						<p>
							But not just any kind of <b>{vehicle}</b> - <b>{name}</b> needs a <b>{vehicle}</b> that's been proven to work, developed by a professional through the same blood, sweat, and tears that <b>{name}</b> puts in to their life as a <b>{negativeState} {identity}</b>.
						</p>
						<h4>Internal Roadblocks</h4>
						<p>
							<b>{name}</b> really just needs a <b>{vehicle}</b> developed specifically for <b>{identity}s</b>, one that understands the problems that <b>{identity}s</b> go through every day and how that makes it so hard for them to finally solve <b>{niche}</b>.
						</p>
						<p>
							There are so many <b>{vehicle}s</b> out there already... but they've never worked for <b>{name}</b>. <b>{name}</b> is so frustrated to see so many other people enjoying their lives, having figured out <b>{niche}</b>, but <b>{name}</b> seems destined to sit on the sidelines and struggle.
						</p>
						<h4>External Roadblocks</h4>
						<p>
							Finally, <b>{name}</b> needs something that will work <em>fast</em> and <em>worth the money.</em> <b>{name}</b> is limited on their time and money - they can't continuously throw either at their problem of solving <b>{niche}</b> in order to get results, and for any <b>{vehicle}</b> to be a "No-Duh Instant Buy", <b>{name}</b> really needs to understand how that <b>{vehicle}</b> can solve <b>{niche}</b> quickly and easily so they can improve their <b>{market}</b> situation and become a <b>{positiveState} {identity}</b>.
						</p>
						<Box>
							<h3>How does your product relate to {name}'s roadblocks?</h3>
							<p>If you can show how your {vehicle} a) works, b) is specifically designed for {name}, and c) saves time or money (prioritize time bc broke customers are annoying) for {name}, there'll be no more objections and the sale can occur.</p>
						</Box>
					</Section>
					<Section>
					<h2>Hope you enjoyed spending time with your new friend, {name}.</h2>
					<p>If you're not feeling it, feel free to go again with the button below.</p>
					<Button clickFunction={() => ROLLTHEMBONES()}>Roll New Avatar</Button>
					</Section>
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