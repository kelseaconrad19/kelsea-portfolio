import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
// import Logo from "../../public/assets/img/hero/logo.png";

function NavBar() {
	return (
		<Navbar
			fixed="top"
			expand="lg"
			className="nav-bar custom-navbar"
			bg="transparent"
			data-bs-theme="light"
			style={{
				paddingTop: "3px",
				paddingBottom: "3px",
				fontSize: "1.3rem",
			}}
		>
			<Container>
				<Navbar.Brand href="#home">
					<Image
						src="/assets/img/hero/logo1.png"
						alt="logo"
						width={65}
						height={40}
						class="logo"
						style={{
							paddingRight: "10px",
						}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto" style={{ fontFamily: "poppins" }}>
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link" style={{ marginLeft: "12px" }}>
							About
						</Nav.Link>
						<Nav.Link href="#link" style={{ marginLeft: "12px" }}>
							Portfolio
						</Nav.Link>
						<Nav.Link href="#link" style={{ marginLeft: "12px" }}>
							Blog
						</Nav.Link>
						<Nav.Link href="#link" style={{ marginLeft: "12px" }}>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
