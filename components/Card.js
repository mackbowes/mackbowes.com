import {useState} from 'react';
import styles from './card.module.css';

export default function Card(props) {

    const [show, setShow] = useState(false);
    const [buttonContent, setButtonContent] = useState('read more');
    const [style, setStyle] = useState({  scrollbarWidth: `none`,
        scrollbarColor: `var(--text) #d166a8`, height: `100%`})

    const handleClick = e => {
        setShow(!show);
        if (buttonContent === 'read more') {
            setButtonContent('read less');
            setStyle({scrollbarWidth: `auto`,
            scrollbarColor: `var(--text) #d166a8`, height: `500px`})
        } else {
            setButtonContent('read more');
            setStyle({scrollbarWidth: `none`,
            scrollbarColor: `var(--text) #d166a8`, height: `100%`})
        }
    }

    const children = show => {
        if (show === true) {
            return props.children
        } else {
            return props.children[0]
        }
    }

    return(

        <article className={styles.card}>
        <h3 className={styles.cardTitle} onClick={handleClick}>{props.title}</h3>
        <h5 className={styles.cardInfo}>{props.info}</h5>
        <div className={styles.cardContent} style={style}>
          {children(show)}
        </div>
        <button className={styles.cardButton} onClick={handleClick}>{buttonContent}</button>
        <img src="/images/card-bottom-01.png" className={styles.bottomimg} />
        </article>

    )
}