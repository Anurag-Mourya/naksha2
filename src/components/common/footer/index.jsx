
import React from 'react'
import logo from '../../../assets/images/siteLogo/siteLogo.png'
import { Container } from 'react-bootstrap';
import './footer.css'
import { Facebook, Instagram, Twitter, Youtube, Whatsapp } from 'react-bootstrap-icons';
const Footer = () => {
    return (
        <div className='bgDark p-5'>
            <Container>
                <footer className="text-center text-lg-start text-white">
                    <div className="main">
                        <div className="main2">

                            <div className="">
                                <ul className='footerLinks'>
                                    <li className="list-group-item"><span className='hbold '>PACKAGES</span></li>
                                    <li className="list-group-item">Adventure</li>
                                    <li className="list-group-item">Celebration</li>
                                    <li className="list-group-item">Culinary</li>
                                    <li className="list-group-item">Family</li>
                                    <li className="list-group-item">Ultraluxe</li>

                                </ul>
                            </div>
                            <div className=" ">
                                <ul className='footerLinks'>
                                    <li className="list-group-item"><span className='hbold '>DESTINATIONS</span></li>
                                    <li className="list-group-item">Ireland</li>
                                    <li className="list-group-item">UK</li>
                                    <li className="list-group-item">Africa</li>
                                    <li className="list-group-item">Classic Europe</li>
                                </ul>
                            </div>

                            <div className=" ">
                                <ul className='footerLinks'>
                                    <li className="list-group-item"><span className='hbold '>OUR SERVICES</span></li>
                                    <li className="list-group-item">Castles</li>
                                    <li className="list-group-item">Estates</li>
                                    <li className="list-group-item">Villas & Houses</li>
                                </ul>
                            </div>
                            <div className=" ">
                                <ul className='footerLinks'>
                                    <li className="list-group-item"><span className='hbold '>ABOUT US</span></li>
                                    <li className="list-group-item">Why choose A&B</li>
                                    <li className="list-group-item">Our Team</li>
                                    <li className="list-group-item">Work with us</li>
                                </ul>
                            </div>
                        </div>
                        {/*  */}
                        <div className="logos  main_logo  ">
                            <img src={logo} alt="logo" width={170} />
                            <div className="text-white mt-4">
                                <u><h6 className='email'>nakshatravels@gmail.com</h6></u>
                                <p className='mt-4 phone' style={{ fontSize: '14px ' }} >TOLL FREE: 1-800-894-5543</p>
                                <div className='mt-4'>
                                    <p className='mainFont fw-bold'>SOCIAL MEDIA</p>
                                    <div className='mb-4'>
                                        <Youtube className="mx-2 fs-3 " />
                                        <Facebook className="mx-2 fs-3" />
                                        <Whatsapp className="mx-2 fs-3" />
                                        <Instagram className="mx-2 fs-3" />
                                        <Twitter className="mx-2 fs-3 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="foot_end">
                        <div className='left'>
                            <p className='mx-4'>Terms & Conditations</p>
                            <p className='mx-4'>Substainability Policy</p>
                            <p className='mx-4'>Privacy Policy</p>
                            <p className='mx-4'>Naksha @2023</p>
                        </div>
                        <div className='right'>
                            <p>Designed by   CODEQUARRY </p>
                        </div>
                    </div>
                </footer>
            </Container>
        </div >
    )
}

export default Footer