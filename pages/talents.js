import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import styles from "../styles/Talents.module.css";

export default function Talents() {
	const talents = [
		{ url: "/images/talent_1.jpg", nama: "Orion", role: "Band" },
		{ url: "/images/talent_2.jpg", nama: "Rion", role: "Band" },
		{ url: "/images/talent_3.jpg", nama: "Davvero", role: "Band" },
		{ url: "/images/talent_4.jpg", nama: "Blackout", role: "Band" },
	];
	return (
		<Layout>
			<Head>
				<title>Talents - {siteTitle}</title>
			</Head>

			<div className={styles["talents-container"]}>
				<h1>talents</h1>
				<div className={styles.talents}>
					{talents.map((item, i) => (
						<div
							key={i}
							className={styles["talents-item"] + " rounded"}
							style={{
								backgroundImage: `linear-gradient(180deg, rgba(191, 52, 203, 0.1), rgba(54, 57, 141, 0.7)), url(${item.url})`,
								backgroundSize: "cover",
							}}
						>
							<div className={styles["talents-info"]}>
								<h2>{item.nama}</h2>
								<p>{item.role}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}
