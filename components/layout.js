import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = '25LabStudio'

export default function Layout({ children }) {
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"></link>
            </Head>

            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        {''}
                    </Link>
                </div>
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