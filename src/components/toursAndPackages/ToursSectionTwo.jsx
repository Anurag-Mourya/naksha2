import React from 'react'
import { Container } from 'react-bootstrap';
import './toursSection.css';
import img from '../../assets/images/bestPackage.png'
import img1 from '../../assets/images/offer.png'
import img2 from '../../assets/images/location.png'
import img3 from '../../assets/images/clock.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ToursSectionTwo = () => {
    return (
        <>
            <div style={{ background: 'rgba(245, 245, 245, 1)' }}>
                <div className='' style={{ padding: '100px' }}>

                    <div className="pb-4">
                        <h1 className="text-center mainColor">BEST OF THE PACKAGES</h1>
                        <p className='text-center font'>We offer the best of the tour packages around the globe and for around the globe locations in affordable prices and with best of the services.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className="card" style={{ width: '19rem', border: 'none' }}>
                                <div className='cardImg'>
                                    <div>
                                        <img src={img1} alt="offer" className="offerImg" />
                                        <p className='offerText text-white'>20% OFF</p>
                                    </div>
                                    <h4 className='text-white m-2'>From &#x20B9;4,500</h4>
                                </div>

                                <div className="card-body px-3">
                                    <h5 className="card-title"><span><img src={img2} alt="location" /></span > Turkey</h5>
                                    <hr></hr>
                                    <p className="card-text font1">NYC One World Observatory skip- The-
                                        Line Ticket</p>
                                    <hr></hr>


                                    <div>
                                        <div>
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                            <span className='mainColor fw-bold mainFont mx-1'>18 Reviews</span>
                                        </div>
                                        <div className=''>
                                            <div className='d-flex align-items-center'>
                                                <img src={img3} alt="clock" className='mx-3' />
                                                <h5>3 days & 2 night</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>



                </div>



            </div >

        </>
    )
}

export default ToursSectionTwo