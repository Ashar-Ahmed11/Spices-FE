import React from 'react'
const SpicesVideo = ({ title, video }) => {
    return (
        <div>
            <div className="upGradient">
                <div className="container">
                    <p data-aos="fade-up" data-aos-duration="1000" className="h1 text-center my-5" style={{ fontFamily: 'Sagrantino' }}>{title}</p>

         
                    <video className='card-img-top rounded-4' playsInline loop muted autoPlay src={`${video}`} />
                </div>
            </div>
        </div>
    )
}

export default SpicesVideo