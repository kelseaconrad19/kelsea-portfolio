import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Poppins } from "@next/font/google";
import { useEffect, useState } from "react";

// import Logo from "../../public/assets/img/hero/logo.png";

const poppins = Poppins({
	weight: "400",
	style: "normal",
	subsets: ["latin"],
});

function NavBar() {
	const [navbarBg, setNavbarBg] = useState("transparent");

	useEffect(() => {
		const handleScroll = () => {
			console.log("Scroll position:", window.scrollY); // Debugging log
			if (window.scrollY > 50) {
				setNavbarBg("#eee");
			} else {
				setNavbarBg("transparent");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Navbar
			fixed="top"
			expand="lg"
			className="nav-bar custom-navbar"
			// bg="transparent"
			data-bs-theme="light"
			style={{
				paddingTop: "3px",
				paddingBottom: "3px",
				fontSize: "1.2rem",
				backgroundColor: navbarBg,
			}}
		>
			<Container>
				<Navbar.Brand href="/">
					<Image
						src="/assets/img/hero/logo2.png"
						alt="logo"
						width={65}
						height={40}
						className="logo"
						style={{
							paddingRight: "10px",
						}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className={poppins.className} href="/">
							Home
						</Nav.Link>
						<Nav.Link
							className={poppins.className}
							href="#about"
							style={{ marginLeft: "12px" }}
						>
							About
						</Nav.Link>
						<Nav.Link
							className={poppins.className}
							href="#portfolio"
							style={{ marginLeft: "12px" }}
						>
							Portfolio
						</Nav.Link>
						{/* <Nav.Link
							className={poppins.className}
							href="#blog"
							style={{ marginLeft: "12px" }}
						>
							Blog
						</Nav.Link> */}
						<Nav.Link
							className={poppins.className}
							href="#contact"
							style={{ marginLeft: "12px" }}
						>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export { poppins };
export default NavBar;
