import React from 'react';
import styles from './button.module.css';

export default function Button(props) {
  return (
    <div className={styles.buttonWrap}>
    <a className={styles.button} href={props.href}>{props.text}</a>
    </div>
  )
}
