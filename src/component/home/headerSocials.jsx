import React from 'react'

const headerSocials = () => {
  return (
   <div className="home__socials"> 

    <a href="https://www.facebook.com/sido.dido.581525?locale=fr_FR" className="home__socials__link" target='_blank'>
    <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://www.youtube.com/watch?v=TkAiVKfWtjI" className="home__socials__link" target='_blank'>
    <i class="fa-brands fa-facebook"></i>
    </a>

    <a href="#alert-phone" className="home__socials__link" target='_blank'>
    <i class="fa-brands fa-whatsapp"></i>
    </a>

    <a href="#alert-phone" className="home__socials__link" target='_blank'>
    <i class="fa-regular fa-envelope"></i>
    </a>

    <a href="shareee" className="home__socials__link" target='_blank'>
    <i class="fa-regular fa-share-from-square"></i>
    </a>
   </div>
  )
}

export default headerSocials
