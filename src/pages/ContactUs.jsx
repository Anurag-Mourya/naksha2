import React from 'react';
import { Container } from 'react-bootstrap';
import './contect.css'
import SectionSix from '../components/homeSections/SectionSix';
import ContectForm from '../components/contectForm';

// import { AiOutlineRightCircle } from 'react-bootstrap-icons'
const ContactUs = () => {
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Form submission logic goes here
    // };

    return (
        <>

            <div className='packegeBgImg' id="automobile">
                <Container>
                    <div className="headings headingspac">
                        <h1 className='display-6 spacing'>Contect US</h1>
                        <span className='spacing'>PLAN YOUR JOURNEY <span className='nextCircle text-center'>&gt;</span></span>
                    </div>
                </Container>
            </div>
            <div className="input_heding">
                <h1>Get in Touch</h1>
            </div>
            <div className="input_heding">
                <p>Use the form below to drop us an e-mail. Old fashioned phone calls work too.</p>
            </div>
            <ContectForm/>
            <SectionSix/>
        </>
    );
};

export default ContactUs;
