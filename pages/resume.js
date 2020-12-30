import Head from 'next/head'
import Link from 'next/link'
import Resume from '../components/resume'
import styles from '../styles/Home.module.css'

export default function ResumePage() {
  return (
    <div className={styles.container}>
    <Resume />
    </div>
  )
}
