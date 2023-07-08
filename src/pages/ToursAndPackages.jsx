import React from 'react'
import ToursSectionOne from '../components/toursAndPackages/ToursSectionOne'
import ToursSectionTwo from '../components/toursAndPackages/ToursSectionTwo'
import { Container } from 'react-bootstrap'
import ToursSectionThree from '../components/toursAndPackages/ToursSectionThree'
import ToursSectionFour from '../components/toursAndPackages/ToursSectionFour'



const ToursAndPackages = () => {
    return (
        <div>

            <ToursSectionOne />
            <Container>
                <ToursSectionTwo />
                <ToursSectionThree />
                <ToursSectionFour />
            </Container>

        </div>
    )
}

export default ToursAndPackages