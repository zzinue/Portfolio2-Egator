import React from 'react'
import './Portfolio.css'
import ecomerce from '../../assets/ecommercesanity.png'
import fitness from '../../assets/fitnessapp.png'
import bankModern from '../../assets/bankmodern.png'
import webdev from '../../assets/webdev.png'
import departmentApp from '../../assets/departmentapp.png'
import memorygames from '../../assets/memorygames.png'
const data = [
    {
        id: 1,
        image: ecomerce,
        title: "FullStack Ecommerce with Sanity Platform",
        github: 'https://github.com/zzinue/ecommerce-sanity-stripe/tree/main',
        demo: 'https://ecommerce-sanity-stripe-teal-nine.vercel.app/'
    },
    {
        id: 2,
        image: fitness,
        title: "FullStack Fitness App",
        github: 'https://github.com/zzinue/Fitness-app',
        demo: 'https://fitness-26m8bby5f-zzinue.vercel.app/'
    },
    {
        id: 3,
        image: bankModern,
        title: "Modern Bank interface With Tailwind",
        github: 'https://github.com/zzinue/bank_modern_app',
        demo: 'https://bank-modern-app.vercel.app/'
    },
    {
        id: 4,
        image: webdev,
        title: "Bootstrap Landing Page Bootcamp",
        github: 'https://github.com/zzinue/boostrapBootcampPage',
        demo: 'https://boostrap-bootcamp-page.vercel.app/'
    },
    {
        id: 5,
        image: departmentApp,
        title: "FullStack Management Departmetn App",
        github: 'https://github.com/zzinue/Cotoappfront',
        demo: 'https://cotoappfront.vercel.app/'
    },
    {
        id: 6,
        image: memorygames,
        title: "Memory game with Vanilla JavaScript",
        github: 'https://github.com/zzinue/memory-games',
        demo: 'https://zzinue.github.io/memory-games/'
    },
]
const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-imgae">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio