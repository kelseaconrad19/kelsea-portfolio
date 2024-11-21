import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../navBar";
import { Comforter } from "@next/font/google";

const comforter = Comforter({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const heroContent = {
	heroImage: "assets/img/hero/sticker1.png",
	heroMobileImage: "/assets/img/hero/grinSmile.png",
	heroTitleName: "Finally Creative",
	heroDesignation: "Where Function Meets Imagination",
	heroDescriptions: ``,
	heroBtn: "Let’s Create Together!",
};

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	// Log when the component is rendered
	console.log("Hero component rendered");

	function toggleModalOne() {
		// Log the state change on button click
		console.log("Button clicked, toggling isOpen. Current value:", isOpen);
		setIsOpen(!isOpen);
	}

	return (
		<>
			<div className="hero-section">
				<div
					className="row home-details-container align-items-center"
					style={{
						marginTop: "5px",
					}}
				>
					<div
						className="col-lg-4 bg position-fixed d-none d-lg-block"
						style={{
							backgroundImage: `url(${heroContent.heroImage})`,
						}}
					></div>
					<div className="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
						<div>
							{/* Log the heroMobileImage to make sure it's correct */}
							{console.log("Hero mobile image:", heroContent.heroMobileImage)}

							<Image
								src={heroContent.heroMobileImage}
								className="img-fluid main-img-mobile d-sm-block d-lg-none"
								alt="hero man"
								width={500}
								height={500}
							/>

							<h1
								className={comforter.className}
								style={{
									fontSize: "5.2rem",
									lineHeight: "1.5",
									letterSpacing: "0.2rem",
									fontWeight: "400",
									textShadow: "10px 5px 20px #D8D8D5",
								}}
							>
								{console.log("Hero title name:", heroContent.heroTitleName)}
								{""} {heroContent.heroTitleName}.
								<span>{heroContent.heroDesignation}</span>
							</h1>
							<p className="open-sans-font">{heroContent.heroDescriptions}</p>
							<button className="button" onClick={toggleModalOne}>
								<span className="button-text">{heroContent.heroBtn}</span>
								<span className="button-icon fa fa-arrow-right"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
