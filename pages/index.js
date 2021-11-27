import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        
        <div className={styles.main}>
          <div className={styles.intro}>
            <h2>Introducing</h2>
            <h1>25LabStudio</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <Link href="/about">
              <a className={styles.about}>
                tentang kami
              </a>
            </Link>
          </div>
        </div>
    </Layout>
  )
}
