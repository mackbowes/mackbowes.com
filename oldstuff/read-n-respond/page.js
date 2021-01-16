import React from 'react';
import Nav from '../components/nav';
import styles from './page.module.css';

export default function Page({children}) {
  return (
    <div>
    <Nav />
      <div className={styles.wrapper}>
        {children}
      </div>
    </div>
  );
}
