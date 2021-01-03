import React from 'react'
import styles from './portfoliocard.module.css'
import Button from './Button.js';

export default function PortfolioCard(props) {
  return(
    <div className={styles.cardWrapper}>
      <div>
      <a href={props.link}><img src={props.image} alt={props.alt} className={styles.image}/></a>
      </div>
      <div>
      <h2 className={styles.cardTitle}>{props.title}</h2>
      <p className={styles.cardBody}>{props.body}</p>
      {(props.gitHub)
      ? <Button href={props.gitHub} text={props.gitHubText} />
      : ''}
      
      </div>
    </div>
  )
}
