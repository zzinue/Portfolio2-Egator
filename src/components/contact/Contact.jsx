import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>zzinue@gmail.com  </h5>
                        <a href="mailto:zzinue@gmail.com" target='_blank' >Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Victor Zzinue </h5>
                        <a href="https://m.me/victorzzinue/" target='_blank'>Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+123456789 </h5>
                        <a href="https://wa.me/525566646249" target='_blank'>Send a Message</a>
                    </article>
                </div>
                {/* End of contact options */}
                <form action="">
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' />
                    <textarea type="message" rows='7' placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact 