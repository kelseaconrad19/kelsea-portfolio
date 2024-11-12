import React, { useState } from "react";
import heroImgMobile from "../../../public/assets/img/hero/grinSmile.png";
import AboutMain from "../about";
import Image from "next/image";
import NavBar from "../navBar";

const heroContent = {
	heroImage: "assets/img/hero/sticker1.png",
	heroMobileImage: heroImgMobile,
	heroTitleName: "Finally Creative",
	heroDesignation: "Where Function Meets Imagination",
	heroDescriptions: ``,
	heroBtn: "Let’s Create Together!",
};

const Hero = () => {
	const [isOpen, setIsOpen] = useState(false);
	function toggleModalOne() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<NavBar />
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
							// width: "30%",
							// height: "80%",
							// marginLeft: "5%",
						}}
					></div>
					<div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
						<div>
							<Image
								src={heroContent.heroMobileImage}
								className="img-fluid main-img-mobile d-sm-block d-lg-none"
								alt="hero man"
								// style={{ width: "50%", height: "50%" }}
							/>
							<h1
								className="text-uppercase rock-salt-font"
								style={{
									fontSize: "3.4rem",
									lineHeight: "1.9",
									letterSpacing: "0.3rem",
									fontWeight: "800",
									textShadow: "10px 5px 20px #D8D8D5",
								}}
							>
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
				<div class="gradient-line"></div>
				<div className="about-section">
					<h2 className="about-heading rock-salt-font">About Me</h2>
					<AboutMain />
				</div>
			</div>
			{/* End home-details-container */}
			{/* <div>
				<AboutMain />
			</div> */}
			{/* Start Modal for About More– */}
			{/* <Modal
				isOpen={isOpen}
				onRequestClose={toggleModalOne}
				contentLabel="My dialog"
				className="custom-modal dark hero"
				overlayClassName="custom-overlay dark"
				closeTimeoutMS={500}
			>
				<div>
					<button className="close-modal" onClick={toggleModalOne}>
						<Image src={cancelImg} alt="close icon" />
					</button> */}
			{/* End close icon */}

			{/* <div className="box_inner about">
						<div data-aos="fade-up" data-aos-duration="1200">
							<div className="title-section text-start text-sm-center">
								<h1>
									ABOUT <span>ME</span>
								</h1>
								<span className="title-bg">Resume</span>
							</div> */}
			{/* End title */}
			{/* <AboutMain />
						</div>
					</div>
				</div> */}
			{/* End modal box news */}
			{/* </Modal> */}
			{/* End  Modal for About More */}
		</>
	);
};

export default Hero;
