import React from 'react'
import { Container } from 'react-bootstrap'
import img1 from '../../assets/images/Mask group 3.png';
import img2 from '../../assets/images/Mask group 4.png';
import img3 from '../../assets/images/Rectangle.png';
import img4 from '../../assets/images/Group 2.png';
import img5 from '../../assets/images/Mask group 6.png';
import './section.css';

const SectionFive = () => {
    return (
        <div className='my-5'>
            <Container>
                <div className="row p-4">
                    <div className='text-center mb-5'><h1 className='mainColor'>Luxury Destinations</h1>
                        <p className='px-5'>Of course, as a travel industry marketer, you know your job involves a lot more than just posting some inspirational picturesque snapshots and telling tales
                            of fun in the sun. You face significant challenges when it comes to successful storytelling in this space, not to mention plenty of competition.
                        </p>
                    </div>
                    <div className="col-md-8 my-1">
                        <div className="image-container">
                            <img src={img1} alt="img1" className='luxuryImg' />
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="image-container">
                            <img src={img2} alt="img1" className='luxuryImg' />
                        </div>
                    </div>
                </div>
                <div className="row p-4">
                    <div className="col-md-4 my-1">
                        <div className="image-container">
                            <img src={img5} alt="img1" className='luxuryImg' />
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="image-container">
                            <img src={img3} alt="img1" className='luxuryImg' />
                        </div>
                    </div>
                    <div className="col-md-4 my-1">
                        <div className="image-container">
                            <img src={img4} alt="img1" className='luxuryImg' />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default SectionFive