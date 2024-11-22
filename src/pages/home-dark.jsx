import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";
import { Comforter } from "@next/font/google";
import NavBar2 from "../components/navBar2";

const comforter = Comforter({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

const menuItem = [
	{ icon: "fa-home", menuName: "Home" },
	{ icon: "fa-user", menuName: "About" },
	{ icon: "fa-briefcase", menuName: "Portfolio" },
	{ icon: "fa-envelope-open", menuName: "Contact" },
	// { icon: "fa-comments", menuName: "Blog" },
];

const HomeDark = () => {
	useEffect(() => {
		document.querySelector("body").classList.remove("rtl");
	}, []);
	return (
		<Wrapper>
			<SEO pageTitle={`Kelsea Conrad`} />

			<div className="yellow">
				{/* <NavBar2 /> */}
				<Tabs>
					<div className="header"></div>
					{/* End Menu Content */}

					<div className="tab-panel_list">
						{/* Hero Content Starts */}
						<TabPanel className="home">
							<div
								className="container-fluid main-container container-home p-0 g-0"
								data-aos="fade-up"
								data-aos-duration="1200"
								id="hero"
							>
								<div className="color-block d-none d-lg-block"></div>
								<Hero />
							</div>
							<section id="about">
								<div className="gradient-line"></div>
								<div className="about-section">
									<h2
										className={`about-heading ${comforter.className}`}
										style={{
											fontSize: "4rem",
											marginBottom: "3.5rem",
										}}
									>
										About Me
									</h2>
									<AboutMain />
								</div>
							</section>
							<section id="portfolio">
								<div className="gradient-line"></div>

								<div
									className="about-section"
									style={{
										backgroundColor: "#FCFCFC",
									}}
								>
									<h2
										className={`about-heading ${comforter.className}`}
										style={{
											fontSize: "4rem",
											marginBottom: "2rem",
											color: "#353531",
											textAlign: "left",
											marginLeft: "10%",
										}}
									>
										Recent Projects
									</h2>
									<p
										style={{
											fontSize: "1.3rem",
											marginBottom: "3.5rem",
											color: "#353531",
											textAlign: "left",
											marginLeft: "10%",
											maxWidth: "45%",
											fontFamily: "Poppins",
										}}
									>
										I will continuously update this section with a variety of
										projects I am currently working on as a web and digital
										designer. From website redesigns to business automation
										systems and side projects, this section provides a snapshot
										of my current work and the types of projects I am focused
										on.
									</p>
									<Portfolio />
									{/* <div className="color-block2"></div> */}
								</div>
							</section>

							<section id="contact">
								<div className="gradient-line"></div>

								<div
									className="contact-section padding-global"
									style={{
										backgroundColor: "#e9d2f4",
									}}
								>
									<div className="container-large padding-section-large">
										<h2
											className={`contact-heading ${comforter.className}`}
											style={{
												fontSize: "4.3rem",
												marginBottom: "2rem",
												color: "#353531",
												textAlign: "left",
												fontFamily: "Poppins",
												fontWeight: "800",
												letterSpacing: "-.1rem",
											}}
										>
											Get in Touch
										</h2>

										<Contact />
										{/* <div className="color-block2"></div> */}
									</div>
								</div>
							</section>
						</TabPanel>
						{/* Hero Content Ends */}
					</div>
				</Tabs>
			</div>
		</Wrapper>
	);
};

export default HomeDark;
