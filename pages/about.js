import Layout, { siteTitle } from "../components/layout";
import { Carousel, CarouselItem } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
	const images = [
		"/images/carousel_1.jpg",
		"/images/carousel_2.jpg",
		"/images/carousel_3.jpg",
		"/images/carousel_4.jpg",
	];
	return (
		<Layout>
			<Head>
				<title>About - {siteTitle}</title>
			</Head>

			<div className={styles["about-container"]}>
				<div className={styles.about}>
					<h1>
						<span>Tentang</span>
						<br /> 25LabStudio
					</h1>
					<p>
						25 Lab Studio merupakan studio musik, tempat di mana guru dan murid
						berkolaborasi untuk bereksperimen mengenai segala hal yang berkaitan
						dengan musik.
					</p>
					<p>
						25 Lab Studio juga memiliki tujuan untuk menggali lalu mengembangkan
						minat dan bakat yang dimiliki oleh murid-murid 25 Lab Studio, baik
						bakat di bidang musik maupun di luar musik, baik di lingkungan
						internal, maupun ekternal.
					</p>
				</div>
				<div className={styles.slider}>
					<Carousel>
						{images.map((item, i) => (
							<CarouselItem key={i}>
								<Image
									className="d-block"
									src={item}
									width="600"
									height="400"
									objectFit="cover"
									alt="carousel-image"
								/>
							</CarouselItem>
						))}
					</Carousel>
				</div>
			</div>
		</Layout>
	);
}
