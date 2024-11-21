import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Portfolio from "../portfolio/Portfolio";
import { poppins } from "../navBar";
import classNames from "classnames";

const index = () => {
	return (
		<section className="main-content">
			<div className="container" style={{ width: "100%" }}>
				<div className="row">
					{/* Personal Info Starts */}

					<div className="col-xl-6 col-lg-4 col-12">
						<div className="row">
							<div className="col-12">
								<h3
									className={classNames(
										poppins.className,
										"text-uppercase",
										"mb-0",
										"ft-wt-600"
									)}
								>
									personal info
								</h3>
								<p
									className={poppins.className}
									style={{
										marginTop: "10px",
										fontSize: "1.1rem",
										color: "eee",
										lineHeight: "1.8",
									}}
								>
									Hi, I’m Kelsea Conrad, a full-stack developer with a passion
									for creating user-friendly and impactful digital experiences.
									With a strong foundation in both front-end and back-end
									development, I specialize in transforming complex ideas into
									intuitive and visually engaging solutions.{" "}
								</p>
								<p
									className={poppins.className}
									style={{
										marginTop: "10px",
										fontSize: "1.1rem",
										color: "eee",
										lineHeight: "1.8",
									}}
								>
									I started my journey in tech through hands-on projects, where
									I honed my skills in technologies like React, Next.js, Python,
									Flask, and SQL. I also have extensive experience with
									WordPress from the first time I started Finally Creative.{" "}
								</p>
								<p
									className={poppins.className}
									style={{
										marginTop: "10px",
										fontSize: "1.1rem",
										color: "eee",
										lineHeight: "1.8",
									}}
								>
									Before diving into software development, I worked as an
									educator, which sharpened my abilities to communicate
									effectively, manage projects, and think critically—skills that
									I now apply to building efficient, scalable applications.{" "}
								</p>

								<p
									className={poppins.className}
									style={{
										marginTop: "10px",
										fontSize: "1.1rem",
										color: "eee",
										lineHeight: "1.8",
									}}
								>
									Feel free to explore my projects, and don’t hesitate to reach
									out—I’d love to connect and collaborate on your next idea.
								</p>
							</div>
							{/* End .col */}

							{/* End personal info */}

							<div className="col-12 mt-1">
								<a
									className="button dark-bg"
									href="/assets/resume.pdf"
									download
								>
									<span
										className={classNames(poppins.className, "button-text")}
									>
										Download CV
									</span>
									<span className="button-icon fa fa-download"></span>
								</a>
							</div>
							{/* End download button */}
						</div>
					</div>
					{/*  Personal Info Ends */}

					{/*  Boxes Starts */}
					<div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
						<Achievements />
					</div>
					{/* Achievements Ends */}
				</div>
				{/* End .row */}
			</div>

			{/* <hr className="separator" /> */}
		</section>
	);
};

export default index;
