import React from 'react'
import './Services.css'
import { BsCheck2 } from 'react-icons/bs'
const Services = () => {
    return (
        <section id='services'>
            <h5>Waht I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Ui/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*  UX/IX  */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development </h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*     Web Development */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Lorem ipsum dolor sit, amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/*   Content Creation*/}

            </div>
        </section >
    )
}

export default Services