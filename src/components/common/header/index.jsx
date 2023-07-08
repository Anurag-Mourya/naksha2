import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/images/siteLogo/siteLogo.png'
import './header.css'
import { useState } from 'react';
import ScrollHeader from '../../constants/ScrollHeader';
import { NavLink } from 'react-router-dom';
import loginBar from '../../../assets/images/loginbar.png'

const Header = () => {
    const [scroll, setScroll] = useState(false);
    return (
        <>
            <ScrollHeader setScroll={setScroll} />
            <Navbar expand="lg" className={`header navbar ${scroll ? 'is-fixed' : ''}`}>
                <Container>
                    <Navbar.Brand href="/"><img src={logo} alt="Naksha" width={100} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ color: 'transparent' }}>
                        <div className="custom-toggle-icon" ></div>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
                        <Nav>
                            <NavLink className='mx-4 text-white fw-bold nav-link' href="/#home">HOME</NavLink>
                            <NavLink className='mx-4 text-white fw-bold nav-link' to="/tours-packages">
                                TOURS & PACKEGES
                            </NavLink>
                            <NavLink className='mx-4 text-white fw-bold nav-link' href="/about-us">
                                ABOUT US
                            </NavLink>
                            <NavLink className='mx-4 text-white fw-bold nav-link' to="/contact-us   ">
                                CONTACT US
                            </NavLink>
                        </Nav>
                        <NavLink className='ml-5 text-white nav-link fw-bold nav-link' to="/">LOGIN <img src={loginBar} alt="loginBar" width={25} /></NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;