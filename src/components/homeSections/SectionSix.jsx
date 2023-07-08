import React from 'react'
import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imgLogo from '../../assets/images/Mask group (9).png'
import { Star } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const SectionSix = () => {
    return (
        <div style={{ backgroundColor: 'rgba(251, 251, 251, 1)' }} className='my-5' >
            <div className="review text-center">
                <div><h6 className='spacing mainFont pointer fw-bold mb-3'>CUSTOMER REVIEWS </h6></div>

                <div className=""><h1 className='mainColor'>THE PEOPLE WHO KNOW BEST</h1></div>
                <div><p className='mainFont px-5 py-4'>Our team of highly experienced travel designers will guide you from beginning to end as you embark on a tailor-made journey of distinction,
                    enjoying truly exclusive and authentic cultural experiences. We can fulfil your bucket-list dreams.</p></div>

            </div>
            <Container>

                <Swiper
                    spaceBetween={25}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    navigation={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                    className="text-dark"
                >
                    <SwiperSlide>
                        <div className="card mb-3 py-2" style={{ maxWidth: '18rem', border: 'none' }}>
                            <div className="px-4 py-2"><img src={imgLogo} alt="logo" width={60} /><span className='mx-3'>Manoj</span></div>
                            <div className="card-body">
                                <p className="card-text mainFont">Few things command more respect than hand
                                    work, imgreite, dedication and the ability so
                                    follow through. These are among the many
                                    attribute are experienced them start to finish
                                    when organ ting oru trip to india with travel
                                    agent.</p>
                            </div>
                            <div className="px-4 d-flex justify-content-between align-items-center mt-4"><h6 className='heading-1 mt-2'>March 23</h6>
                                <div className=''>
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3 py-2" style={{ maxWidth: '18rem', border: 'none' }}>
                            <div className="px-4 py-2"><img src={imgLogo} alt="logo" width={60} /><span className='mx-3'>Manoj</span></div>
                            <div className="card-body">
                                <p className="card-text mainFont">Few things command more respect than hand
                                    work, imgreite, dedication and the ability so
                                    follow through. These are among the many
                                    attribute are experienced them start to finish
                                    when organ ting oru trip to india with travel
                                    agent.</p>
                            </div>
                            <div className="px-4 d-flex justify-content-between align-items-center mt-4"><h6 className='heading-1 mt-2'>March 23</h6>
                                <div className=''>
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3 py-2" style={{ maxWidth: '18rem', border: 'none' }}>
                            <div className="px-4 py-2"><img src={imgLogo} alt="logo" width={60} /><span className='mx-3'>Manoj</span></div>
                            <div className="card-body">
                                <p className="card-text mainFont">Few things command more respect than hand
                                    work, imgreite, dedication and the ability so
                                    follow through. These are among the many
                                    attribute are experienced them start to finish
                                    when organ ting oru trip to india with travel
                                    agent.</p>
                            </div>
                            <div className="px-4 d-flex justify-content-between align-items-center mt-4"><h6 className='heading-1 mt-2'>March 23</h6>
                                <div className=''>
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3 py-2" style={{ maxWidth: '18rem', border: 'none' }}>
                            <div className="px-4 py-2"><img src={imgLogo} alt="logo" width={60} /><span className='mx-3'>Manoj</span></div>
                            <div className="card-body">
                                <p className="card-text mainFont">Few things command more respect than hand
                                    work, imgreite, dedication and the ability so
                                    follow through. These are among the many
                                    attribute are experienced them start to finish
                                    when organ ting oru trip to india with travel
                                    agent.</p>
                            </div>
                            <div className="px-4 d-flex justify-content-between align-items-center mt-4">
                                <h6 className='heading-1'>March 23</h6>
                                <div className=''>
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card mb-3 py-2" style={{ maxWidth: '18rem', border: 'none' }}>
                            <div className="px-4 py-2"><img src={imgLogo} alt="logo" width={60} /><span className='mx-3'>Manoj</span></div>
                            <div className="card-body">
                                <p className="card-text mainFont">Few things command more respect than hand
                                    work, imgreite, dedication and the ability so
                                    follow through. These are among the many
                                    attribute are experienced them start to finish
                                    when organ ting oru trip to india with travel
                                    agent.</p>
                            </div>
                            <div className="px-4 d-flex justify-content-between align-items-center mt-4"><h6 className='heading-1 mt-2'>March 23</h6>
                                <div className=''>
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning mx-1 fs-5' />
                                    <FontAwesomeIcon icon={faStar} className='text-warning fs-5' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </Container>
        </div>
    )
}

export default SectionSix