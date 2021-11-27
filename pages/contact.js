import Layout, {siteTitle} from "../components/layout"
import Head from 'next/head'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact - {siteTitle}</title>
            </Head>
            
            <div className={styles["contact-container"]}>
                <div></div>
                <div className={styles.rect}></div>
                <div className={styles.contact}>
                    <h1>Contact</h1>
                    <p>email@gmail.com</p>
                    <p>Jl. Baros, Sukataris, Karangtengah, Kabupaten Cianjur, Jawa Barat 43281</p>
                </div>
                <footer className={styles.footer}>
                    <div>
                        <a className={styles["social-item"]} href="https://www.instagram.com/25labstudio/" target="_blank" rel="noopener noreferrer">
                            <img src="/Instagram_simple_icon.svg" alt="Instagram Icon" />
                        </a>
                    </div>
                    <p>© 2021 25LabStudio</p>                    
                </footer>
            </div>
        </Layout>        
    )
}