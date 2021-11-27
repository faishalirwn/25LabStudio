import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = '25LabStudio'

export default function Layout({ children }) {
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />                
            </Head>

            <nav className={styles.nav}>
                <Link href="/">
                    <a className={styles.logo} target="_blank" rel="noopener noreferrer">
                        
                    </a>
                </Link>
                <ul className={styles["nav-right"]}>
                    <li><Link href="/">home</Link></li>
                    <li><Link href="/about">about</Link></li>
                    <li><Link href="/talents">talents</Link></li>
                    <li><Link href="/contact">contact</Link></li>
                </ul>
            </nav>

            <main>
                {children}
            </main>
        </div>
    )
}