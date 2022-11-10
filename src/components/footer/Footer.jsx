import React from 'react'
import './Footer.css'
import { RiFacebookFill } from 'react-icons/ri'
import { BsInstagram } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Victor Guerrero</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a> </li>
                <li><a href="#about">About</a> </li>
                <li><a href="#experience">Experience</a> </li>
                <li><a href="#services">Services</a> </li>
                <li><a href="#portfolio">Portfolio</a> </li>
                {/* <li><a href="#testimonials">Testimonials</a> </li> */}
                <li><a href="#contact">Contact</a> </li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/victorzzinue/"><RiFacebookFill /></a>
                {/*   <a href="https://instagram.com"><BsInstagram /></a> */}
                <a href="https://twitter.com/zzinueleon"><SiTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Victor Guerrero. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer