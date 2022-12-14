import React from 'react'
import './About.css'
import victor3 from '../../assets/victor3.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={victor3} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>Kodemia Bootcamp 2022</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Frontend</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Frameworks</h5>
                            <small>React</small>
                        </article>
                    </div>
                    <p>
                        I'm Victor, a passionate web developer bringing you programming and projects for the future. I've buil many Frontend web aplications from design to implementation. This includes prototyping, logic, request api and renderized.
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About