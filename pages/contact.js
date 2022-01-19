import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Contact.module.css";

export default function Contact() {
	return (
		<Layout>
			<Head>
				<title>Contact - {siteTitle}</title>
			</Head>

			<div className={styles["contact-container"]}>
				<div className={styles.placeholder}></div>
				<div className={styles.map}>
					<iframe
						className="w-100 h-100 p-2"
						id="gmap_canvas"
						src="https://maps.google.com/maps?q=Jl.%20Baros,%20Sukataris,%20Karangtengah,%20Kabupaten%20Cianjur,%20Jawa%20Barat%2043281&t=&z=13&ie=UTF8&iwloc=&output=embed"
						frameBorder={0}
						scrolling="no"
						marginHeight={0}
						marginWidth={0}
					/>
				</div>
				<div className={styles.contact}>
					<h1>Contact</h1>
					<div className="d-flex my-3">
						<Image
							src="/Instagram_simple_icon.svg"
							alt="Instagram Icon"
							height={15}
							width={15}
						/>
						<p className="ms-1 m-0">ferldyvy</p>
					</div>

					<p>
						Jl. Baros, Sukataris, Karangtengah, Kabupaten Cianjur, Jawa Barat
						43281
					</p>
				</div>
				<footer className={styles.footer}>
					<div>
						<a
							className={styles["social-item"]}
							href="https://www.instagram.com/25labstudios/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/Instagram_simple_icon.svg"
								alt="Instagram Icon"
								height={33}
								width={33}
							/>
						</a>
					</div>
					<p>© {new Date().getFullYear()} 25LabStudio</p>
				</footer>
			</div>
		</Layout>
	);
}
