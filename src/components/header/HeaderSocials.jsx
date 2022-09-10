import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import { SiVercel } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><GrGithub /></a>
            <a href="https://vercel.com" target="_blank"><SiVercel /></a>
        </div>
    )
}

export default HeaderSocials