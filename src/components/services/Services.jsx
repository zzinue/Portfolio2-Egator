import React from 'react'
import './Services.css'
import { BsCheck2 } from 'react-icons/bs'
const Services = () => {
    return (
        <section id='services'>
            <h5>What Can I Do</h5>
            <h2>For you</h2>
            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>Ui/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Gathering and evaluating user requirements, in collaboration with product managers and engineers.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Designing graphic user interface elements, like menus, tabs and widgets.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Build page navigation buttons and search fields.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Develop UI mockups and prototypes that clearly illustrate how sites function and look like.</p>
                        </li>
                    </ul>
                </article>
                {/*  UX/IX  */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Frontend Development </h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Maintaining and improving website.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p>Collaborate with back-end developers and web designers to improve usability.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Ensure high quality graphic standards and brand consistency.</p>
                        </li>
                    </ul>
                </article>
                {/*     Web Development */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Backend Development</h3>
                    </div>
                    <ul className='service__list'>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Gather and address technical and design requirements.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Participate in the entire application lifecycle, focusing on coding and debugging.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Manage cutting-edge technologies to improve legacy applications.</p>
                        </li>
                        <li><BsCheck2 className='service__list-icon' />
                            <p> Data Management Systems and Web Hosting Platforms.</p>
                        </li>

                    </ul>
                </article>
                {/*   Content Creation*/}

            </div>
        </section >
    )
}

export default Services