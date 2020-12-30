import React from 'react';
import styles from './nav.module.css';

export default function Nav() {
  return (
  <header className={styles.nav}>
    <h1 className={styles.title}><a href="/">mackbowes.com</a></h1>
    <div className={styles.blog}><a href="/read-n-respond">Read And Respond</a></div>
  </header>
  )
}
