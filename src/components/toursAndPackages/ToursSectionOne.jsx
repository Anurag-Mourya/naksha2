import React from 'react'
import '../homeSections/section.css';
import Header from '../common/header';
import { Container } from 'react-bootstrap';

const ToursSectionOne = () => {
    return (
        <div>
            <div className='packegeBgImg' id="automobile">
                <Header />
                <Container >
                    <div className="headings headingspac">
                        <h1 className='display-6 spacing'>Package List</h1>
                        <span className='spacing'>PACKAGES <span className='nextCircle text-center'>&gt;</span></span>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ToursSectionOne