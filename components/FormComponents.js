import styles from './FormComponents.module.scss';

export const TextInput = (props) => {


	let element;
	if (props.value && props.changeFunction) {
		element = <input type="text" id={props.title} value={props.value} onChange={props.onChange}/>;
	} else {
		element = <input type="text" id={props.title}/>;
	}

	return (
		<div className={styles.textInput}>
			<div className={styles.formTitle}>
				{props.title}
			</div>
			{element}
		</div>
	)
}

export const PhoneInput = (props) => {

	return (
		<div className={styles.textInput}>
			<div className={styles.formTitle}>
				{props.title}
			</div>
			<input 
			placeholder="Enter Your Phone"
			type="tel" 
			id={props.title} 
			pattern={/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/}/>
		</div>
	)
}

export const PasswordInput = (props) => {

	let element;
	if (props.changeFunction !== '') {
		element = <input 
		placeholder="Enter Your Password"
		type="password" 
		id={props.title} value={props.value} onChange={props.changeFunction}/>;
	} else {
		element = <input 
		placeholder="Enter Your Password"
		type="password" 
		id={props.title} />;
	}

	return (
		<div className={styles.textInput}>
			<div className={styles.formTitle}>
				{props.title}
			</div>
			{element}
		</div>
	)
}

export const EmailInput = (props) => {

	let element;
	if (props.changeFunction !== '') {
		element = <input 
		placeholder="Enter Your Email"
		type="email" 
		id={props.title} 
		pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/} 
		value={props.value}
		onChange={props.changeFunction}/>;
	} else {
		element = <input 
		placeholder="Enter Your Email"
		type="email" 
		id={props.title} 
		pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/}/>;
	}

	return (
		<div className={styles.textInput}>
			<div className={styles.formTitle}>
				{props.title}
			</div>
			{element}
		</div>
	)
}

/**
 * 
 * @param {bool} isActive Controls the appearance of the button
 * @param {function} clickFunction Provide a function that happens when you click da button
 * @returns A button
 */

export const Button = (props) => {

	const isActive = props.isActive;
	let className;
	if (isActive) {
		className = `${styles.button} ${styles.active}`;
	} else {
		className = `${styles.button}`;
	}

	const handleClick = (e) => {
		e.preventDefault();
		props.clickFunction();
	}

	return (
		<button className={className} onClick={handleClick}>
			{props.children}
		</button>
	)

}

export const Row = () => {
	return (
		<div className={styles.row}>

		</div>
	)
}