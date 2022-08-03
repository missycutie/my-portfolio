import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank"><FaInstagram/></a>

    </div>
  )
}

export default HeaderSocials