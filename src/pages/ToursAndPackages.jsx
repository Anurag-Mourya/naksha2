import React from 'react'
import ToursSectionOne from '../components/toursAndPackages/ToursSectionOne'
import ToursSectionTwo from '../components/toursAndPackages/ToursSectionTwo'
import { Container } from 'react-bootstrap'
import ToursSectionThree from '../components/toursAndPackages/ToursSectionThree'



const ToursAndPackages = () => {
    return (
        <div>

            <ToursSectionOne />
            <Container>
                <ToursSectionTwo />
                <ToursSectionThree />
            </Container>

        </div>
    )
}

export default ToursAndPackages