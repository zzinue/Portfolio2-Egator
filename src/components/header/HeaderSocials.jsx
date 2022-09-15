import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { GrGithub } from 'react-icons/gr'
import { SiVercel } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/zzinue/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/zzinue" target="_blank"><GrGithub /></a>
            <a href="https://vercel.com/zzinue" target="_blank"><SiVercel /></a>
        </div>
    )
}

export default HeaderSocials