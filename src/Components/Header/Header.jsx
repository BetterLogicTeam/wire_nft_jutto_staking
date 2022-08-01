import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

function CollapsibleExample() {
  return (
    <Navbar className="nev" collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand href="#home" className="home">
          <Link to="/">
            <img src="logo-3.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle>
          <AiOutlineMenu className="text-white"></AiOutlineMenu>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto alna">
            <Nav.Link href="#home" className="hxn text-white">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link href="#about" className="hxn text-white">
              <Link to="/About_main">About</Link>
            </Nav.Link>
            <Nav.Link href="#explore" className="hxn text-white">
              <Link to="/Explore_main">Explore</Link>
            </Nav.Link>
            <Nav.Link href="#how_to_play" className="hxn text-white">
              <Link to="/How_to_play_main">How To Play</Link>
            </Nav.Link>
            <Nav.Link href="#tokenomics" className="hxn text-white">
              <Link to="/Tokenomics_main">Tokenomics</Link>
            </Nav.Link>
            <Nav.Link href="#pricing" className="hxn text-white">
              Marketplace
            </Nav.Link>
          </Nav>
          <Nav className="mt-2 emn">
            <Nav.Link href="#login" className="text-white">
              <Link to="/Login_main">
                <span className="wallet">
                  <FaWallet></FaWallet>
                </span>
                Login
              </Link>
            </Nav.Link>
            <Nav.Link href="#register" className="text-white">
              <Link to="/Register_main">
                <span className="wallet">
                  <FaWallet></FaWallet>
                </span>
                Register
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <img src="metamask.png" width="40px" alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
