import React from 'react'
import img from '../../assets/images/hillHomes.png'
import './toursSection.css';

const ToursSectionFour = () => {
    return (
        <div style={{ background: 'rgba(245, 245, 245, 1)' }}>

            <div className="row">
                <div className="col-md-6 blueBg">

                </div>
                <div className="col-md-6">
                    <img src={img} alt="img" style={{ width: '100%' }} />
                </div>
            </div>

        </div>
    )
}

export default ToursSectionFour