import Layout, {siteTitle} from "../components/layout"
import Head from 'next/head'
import styles from '../styles/Talents.module.css'
import Image from 'next/image'

export default function Talents() {
    return (
        <Layout>
            <Head>
                <title>Talents - {siteTitle}</title>
            </Head>
            
            <div className={styles["talents-container"]}>
                <h1>talents</h1>
                <div className={styles.talents}>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/dummy/lilas.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Laila S Ukhtita</h2>
                            <p>Vokalis</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/dummy/kenshi.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Mamang Kenshi</h2>
                            <p>Vokalis</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/dummy/lilmamat.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Lil Mamat</h2>
                            <p>LIL MAMAT ARTIST TERBAIK DI TATA SURYA MEMBAWAKAN KEUNIKAN DAN KENIKMATAN ASLI MUSIK.</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/luwadlin-bosman-pD1KUHCZ9Yc-unsplash.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Shakira</h2>
                            <p>Pianis</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}