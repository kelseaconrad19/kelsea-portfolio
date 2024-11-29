import React, { useEffect, useState } from "react";
import Image from "next/image";

const NavBar2 = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	// Add scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
			{/* Add the logo here */}
			<Image
				src="/assets/img/hero/logo4.png"
				alt="Logo"
				className="logo"
				width={50}
				height={40}
			/>
			<ul className="navbar-list">
				<li>
					<button
						className="navbar-link"
						onClick={() => scrollToSection("hero")}
					>
						Home
					</button>
				</li>
				<li>
					<button
						className="navbar-link"
						onClick={() => scrollToSection("about")}
					>
						About
					</button>
				</li>
				<li>
					<button
						className="navbar-link"
						onClick={() => scrollToSection("portfolio")}
					>
						Portfolio
					</button>
				</li>
				<li>
					<button
						className="navbar-link"
						onClick={() => scrollToSection("contact")}
					>
						Contact
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar2;
