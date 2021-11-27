import Layout, {siteTitle} from "../components/layout"
import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About - {siteTitle}</title>
            </Head>
            
            <div className={styles["about-container"]}>
                <div className={styles.about}>
                    <h1><span>Tentang</span><br /> 25LabStudio</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus scelerisque risus urna erat enim fames. Aliquam tortor purus sed vitae pellentesque ultricies aliquam euismod. Quis eget justo ultricies leo facilisi posuere pretium sed. Id gravida egestas aliquet aliquam, sit nibh elit malesuada ac.</p>
                </div>
                <div className={styles.slider}>
                    <Image
                        src="/images/andreas-forsberg-rMdOHpO3h5E-unsplash.jpg"
                        width="600"
                        height="400"
                    />
                </div>
            </div>
        </Layout>        
    )
}