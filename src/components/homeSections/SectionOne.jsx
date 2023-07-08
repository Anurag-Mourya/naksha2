import React from 'react'
import './section.css'
import Header from '../common/header'
import { Container } from 'react-bootstrap'
import iataLogo from '../../assets/images/IATAlogo.svg.png'
import { Facebook, Instagram, Twitter, Whatsapp, Youtube } from 'react-bootstrap-icons'

const SectionOne = () => {
    return (
        <>
            <div className='bgImg' id="automobile">
                <Header />
                <Container >
                    <div className="headings">
                        <h1>NAKSHA</h1>
                        <h2 className='display-6 spacing'>Hallmark of Luxury Travel</h2>
                        <span className='spacing'>OUR EXPERIENCES <span className='nextCircle text-center'>	&gt;</span></span>
                        <span className='spacing mx-4'>PLAYN YOUR JOURNEY <span className='nextCircle text-center'>	&gt;</span></span>
                    </div>
                </Container>

            </div>
            <div className="socials">
                <img src={iataLogo} alt="iataLogo" width={80} />
                <div className="text-white">
                    <Youtube />
                    <Facebook className='mx-4' />
                    <Whatsapp />
                    <Instagram className='mx-4' />
                    <Twitter />
                </div>
            </div>
        </>


    )
}

export default SectionOne