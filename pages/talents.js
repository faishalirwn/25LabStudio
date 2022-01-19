import Layout, {siteTitle} from "../components/layout"
import Head from 'next/head'
import styles from '../styles/Talents.module.css'

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
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/lilas.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Lilas</h2>
                            <p>Vocalist</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/kenshi.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Kenshi</h2>
                            <p>Vocalist</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/drummer.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>John Doe</h2>
                            <p>Drummer</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/violinist.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>Shakira</h2>
                            <p>Violinist</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/guitarist.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>John Doe</h2>
                            <p>Guitarist</p>
                        </div>
                    </div>
                    <div className={styles["talents-item"]}
                        style={{
                            backgroundImage: "linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url('/images/talents/pianist.jpg')"
                        }}
                    >
                        <div className={styles["talents-info"]}>
                            <h2>John Doe</h2>
                            <p>Pianist</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}