import React from 'react'
import CV from '../../assets/CV.pdf'


const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className="btn" target='_blank'>View CV</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    )
}

export default CTA