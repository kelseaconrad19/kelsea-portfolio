import React from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Portfolio from "../portfolio/Portfolio";
import { poppins } from "../navBar";
import classNames from "classnames";

const index = () => {
	return (
		<section className="main-content ">
			<div className="container">
				<div className="row">
					{/* Personal Info Starts */}

					<div className="col-xl-6 col-lg-5 col-12">
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
									This will be information about my story!
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
