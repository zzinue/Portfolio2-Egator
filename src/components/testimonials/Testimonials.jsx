import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper stylesob

import 'swiper/css';
import 'swiper/css/pagination';
const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est ipsam numquam. Ab, qui perspiciatis explicabo saepe alias accusantium mollitia voluptatibus modi ea quia quo perferendis eaque, minus numquam animi.',
    },
    {
        avatar: AVTR2,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est ipsam numquam. Ab, qui perspiciatis explicabo saepe alias accusantium mollitia voluptatibus modi ea quia quo perferendis eaque, minus numquam animi.',
    },
    {
        avatar: AVTR3,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est ipsam numquam. Ab, qui perspiciatis explicabo saepe alias accusantium mollitia voluptatibus modi ea quia quo perferendis eaque, minus numquam animi.',
    },
    {
        avatar: AVTR4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est ipsam numquam. Ab, qui perspiciatis explicabo saepe alias accusantium mollitia voluptatibus modi ea quia quo perferendis eaque, minus numquam animi.',
    },
]
const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review, index }) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client_name'>{name}</h5>
                                <small className='client__review'> {review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Testimonials