import React from 'react';
import img1 from '../../assets/images/Group.png'
import img2 from '../../assets/images/Mask group (1).png'
import img3 from '../../assets/images/Mask group2.png'
import './section.css'
import { Container } from 'react-bootstrap';

const SectionFoure = () => {
    return (
        <>

            <div style={{ backgroundColor: 'rgba(251, 251, 251, 1)' }} className='p-5 my-5' >
                <Container>
                    <div className="row ">
                        <div className="col-md-3  pt-5 my-5 px-4">
                            <h6 className=''>WORKING HOLIDAYS</h6>
                            <h3>PACKAGES</h3>
                            <div className="">
                                <p className='mainFont '>Working holidays around the world in
                                    Japan, China, Germany. Try
                                    something different!</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='contentStyle my-4 mx-2'></div>
                                <h6>EXPLORE ALL PACKAGES</h6>
                            </div>
                        </div>
                        <div className="col-md-3 my-1 hoverEffect">

                            <div className="image-container">
                                <img src={img1} alt="images" width={280} height={400} className='gap-3' />
                                <div class="overlay">
                                    <ul className='footerLinks text fw-bold text-center' style={{ width: '250px' }}>
                                        <li className="list-group-item"><span className='text-light fs-5' style={{ fontWeight: 'bold' }}>PACKAGES</span></li>
                                        <li className="list-group-item">Australla</li>
                                        <li className="list-group-item" style={{ fontSize: '15px' }} >3 to 5 days trip</li>
                                        <li className="list-group-item fw-bold" style={{ fontSize: '13px', marginTop: '40px', fontSize: '20px' }}>More Details 	&rarr;</li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-1 hoverEffect">

                            <div className="image-container">
                                <img src={img2} alt="images" width={280} height={400} className='gap-3' />
                                <div class="overlay">
                                    <ul className='footerLinks text fw-bold text-center' style={{ width: '250px' }}>
                                        <li className="list-group-item"><span className='text-light fs-5' style={{ fontWeight: 'bold' }}>PACKAGES</span></li>
                                        <li className="list-group-item">Australla</li>
                                        <li className="list-group-item" style={{ fontSize: '15px' }} >3 to 5 days trip</li>
                                        <li className="list-group-item fw-bold" style={{ fontSize: '13px', marginTop: '40px', fontSize: '20px' }}>More Details 	&rarr;</li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 my-1 hoverEffect">

                            <div className="image-container">
                                <img src={img3} alt="images" width={280} height={400} className='gap-3' />
                                <div class="overlay">
                                    <ul className='footerLinks text text-center' style={{ width: '250px' }}>
                                        <li className="list-group-item"><span className='text-light fs-5' style={{ fontWeight: 'bold' }}>PACKAGES</span></li>
                                        <li className="list-group-item">Australla</li>
                                        <li className="list-group-item" style={{ fontSize: '15px' }} >3 to 5 days trip</li>
                                        <li className="list-group-item fw-bold" style={{ fontSize: '13px', marginTop: '40px', fontSize: '20px' }}>More Details 	&rarr;</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>


        </>
    )
}

export default SectionFoure