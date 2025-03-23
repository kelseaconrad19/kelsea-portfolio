import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Image from "next/image";
import ModalMain from "./modal/ModalMain";

const techClassMapping = {
	Python: "bg-green",
	MySQL: "bg-blue",
	APIs: "bg-purple",
	Javascript: "bg-blue",
	HTML5: "bg-green",
	CSS: "bg-orange",
	Bootstrap: "bg-purple",
	React: "bg-purple",
	NextJS: "bg-orange",
	GraphQL: "bg-purple",
	Swagger: "bg-blue",
	PyTest: "bg-green",
	Pandas: "bg-blue",
	Vercel: "bg-purple",
	Flask: "bg-orange",
	SQLAlchemy: "bg-green",
	Marshmallow: "bg-blue",
	"Flask-Caching": "bg-blue",
	"JWT Authentication": "bg-orange",
	SocketIO: "bg-purple",
	API: "bg-purple",
	HTML: "bg-green",
	Django: "bg-purple",
};

const Portfolio = () => {
	const [getModal, setGetModal] = useState(false);
	const [modalId, setModalId] = useState(1);

	const handleModal = (id) => {
		setGetModal(true);
		setModalId(id);
	};

	return (
		<>
			<div className="portfolio-main">
				<Tabs>
					{/* <TabList className="portfolio-tab-list" data-aos="fade-up">
						<Tab>ALL</Tab>
						<Tab>FRONTEND</Tab>
						<Tab>BACKEND</Tab>
					</TabList> */}

					<div className="container">
						<TabPanel>
							<div className="tab-container">
								{PortfolioData.map((item) => {
									const {
										id,
										type,
										image,
										description,
										techUsed,
										skillsRequired,
										mainTech,
										delayAnimation,
									} = item;

									return (
										<div
											key={id}
											data-aos="fade-right"
											data-aos-delay={delayAnimation}
											className="portfolio-card"
										>
											<div
												className="portfolio-content"
												onClick={() => handleModal(id)}
											>
												{/* Project Image */}
												<div className="image-container">
													<Image
														src={image}
														alt="portfolio project demo"
														className="project-image"
													/>
												</div>
												{/* Project Description */}
												<div className="description-layout">
													<div className="margin-bottom margin-xxsmall">
														<h3 className="project-title">{type}</h3>
													</div>

													<div className="margin-bottom margin-small">
														<div className="project-tech-pills">
															{Array.isArray(mainTech) &&
																mainTech.map((tech, index) => (
																	<span
																		key={index}
																		className={`text-style-pill-small ${techClassMapping[tech]}`}
																	>
																		{tech}
																	</span>
																))}
														</div>
														<div className="project-description">
															<p>{description}</p>
														</div>
													</div>
													<div className="project-list">
														<div className="list-item">
															<div className="list-icon-wrapper">
																<div className="icon-embed-xsmall text-color-blue w-embed">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		x="0px"
																		y="0px"
																		width="100"
																		height="100"
																		viewBox="0 0 32 32"
																	>
																		<path d="M 4 4 L 4 28 L 28 28 L 28 12.1875 L 26 14.1875 L 26 26 L 6 26 L 6 6 L 25.8125 6 L 27.8125 4 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"></path>
																	</svg>
																</div>
															</div>
															<div className="list-text-wrapper">
																<p>
																	<strong>Technology: </strong>
																	{techUsed}
																</p>
															</div>
														</div>
														<div className="list-item">
															<div className="list-icon-wrapper">
																<div className="icon-embed-xsmall text-color-yellow w-embed">
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		x="0px"
																		y="0px"
																		width="100"
																		height="100"
																		viewBox="0 0 32 32"
																	>
																		<path d="M 4 4 L 4 28 L 28 28 L 28 12.1875 L 26 14.1875 L 26 26 L 6 26 L 6 6 L 25.8125 6 L 27.8125 4 Z M 27.28125 7.28125 L 16 18.5625 L 11.71875 14.28125 L 10.28125 15.71875 L 15.28125 20.71875 L 16 21.40625 L 16.71875 20.71875 L 28.71875 8.71875 Z"></path>
																	</svg>
																</div>
															</div>
															<div className="list-text-wrapper">
																<p>
																	<strong>Skills: </strong>
																	{skillsRequired}
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</TabPanel>
					</div>
				</Tabs>
			</div>
			{getModal && <ModalMain modalId={modalId} setGetModal={setGetModal} />}{" "}
		</>
	);
};

export default Portfolio;
