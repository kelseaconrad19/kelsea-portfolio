import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar2 = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-75 text-light">
				<div className="container">
					<Link className="navbar-brand text-light font-bold" href="/">
						Finally Creative
					</Link>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link
									href="http://www.kelseaconrad.com/#about"
									className="nav-item nav-link text-light"
								>
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									href="#portfolio"
									className="nav-item nav-link text-light"
								>
									Portfolio
								</Link>
							</li>
							<li className="nav-item">
								<Link href="#contact" className="nav-item nav-link text-light">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar2;
