import React from 'react'
import './section.css'
import img from '../../assets/images/Mask group (2).png'
const SectionThree = () => {
    return (
        <div id="technology p-0">

            <div className="row px-5 sectionImg">
                <div className="col-md-7" style={{ padding: '3%', marginTop: '8%' }}>
                    <h1 className='mainColor'>Tailor Made Journeys</h1>
                    <p className='mainFont'>One of Southwest Airlines’s most popular content pieces is based on a customer’s interaction with the airline from a vantage point that is about as grounded as you can get: the tarmac. Airplane-loving boy Hudson received the surprise of his life when a pilot stopped his plane to wave to him through the cockpit window. Hudson’s mom posted about the exchange on Facebook, and Southwest’s social listening team ran with it. It contacted the pilot, set up a tour of the plane for the little boy and his family, and recorded the touching experience to share with the internal team and fellow aviation enthusiasts, and, according to Brooks Thomas, social business advisor for Southwest, to train new employees about the power of going the extra mile for their customers.</p>
                    <div><u><h6 className='spacing mainFont pointer fw-bold'>OUR EXPERIENCES </h6></u></div>
                </div>
                <div className="col-md-5"><img src={img} alt="img" /></div>
            </div>

        </div >
    )
}

export default SectionThree