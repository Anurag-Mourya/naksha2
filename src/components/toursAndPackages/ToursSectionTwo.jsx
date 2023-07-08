import React from 'react'
import { Container } from 'react-bootstrap';
import './toursSection.css';
import img from '../../assets/images/bestPackage.png'
import img1 from '../../assets/images/offer.png'
import img2 from '../../assets/images/location.png'
import img3 from '../../assets/images/clock.png'

const ToursSectionTwo = () => {
    return (
        <>
            <Container>
                <div className=''>
                    <div className='my-4'>
                        <div className="">
                            <h1 className="text-center mainColor my-4">BEST OF THE PACKAGES</h1>
                            <p className='text-center font'>We offer the best of the tour packages around the globe and for around the globe locations in affordable prices and with best of the services.</p>
                        </div>
                    </div>
                    <div >
                        <div className="card" style={{ width: '20rem' }}>
                            <div className='cardImg'>
                                {/* <img src={img} className="card-img-top relativeImg" alt="image" /> */}
                                <div>
                                    <img src={img1} alt="offer" className="offerImg" />
                                    <p className='offerText text-white'>20% OFF</p>
                                </div>
                                <h3 className='text-white'>From 4500</h3>

                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>
                    </div>
                </div>


            </Container>
        </>
    )
}

export default ToursSectionTwo