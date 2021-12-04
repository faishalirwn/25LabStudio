import Layout, { siteTitle } from "../components/layout";
import { Carousel, CarouselItem } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
	const images = [
		"/images/andreas-forsberg-rMdOHpO3h5E-unsplash.jpg",
		"/images/andreas-forsberg-rMdOHpO3h5E-unsplash.jpg",
		"/images/andreas-forsberg-rMdOHpO3h5E-unsplash.jpg",
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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
						scelerisque risus urna erat enim fames. Aliquam tortor purus sed
						vitae pellentesque ultricies aliquam euismod. Quis eget justo
						ultricies leo facilisi posuere pretium sed. Id gravida egestas
						aliquet aliquam, sit nibh elit malesuada ac.
					</p>
				</div>
				<div className={styles.slider}>
					<Carousel>
						{images.map((item, i) => (
							<CarouselItem key={i}>
								<Image
									className="d-block w-100"
									src={item}
									width="600"
									height="400"
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
