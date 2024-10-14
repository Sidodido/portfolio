

import React from 'react'
import "./testimonials.css"
import Image1 from '../../assets/image4.jpg'
import Image2 from '../../assets/image5.jpg'
import Image3 from '../../assets/image6.jpg'
import Image4 from '../../assets/image7.jpg'
import Image5 from '../../assets/image8.jpg'


import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id:1,
    image:Image1,
    title:'amira benkhaldi',
    subtitle:'Fondateur startup AI-HLA',
    comment:"J'ai aimé le look et les fonctionnalités de ce logiciel, merci beaucoup",

  },

  {
    id:2,
    image:Image2,
    title:'meziani rezkallah',
    subtitle:'Fondateur startup HOUSE TRUST.DZ',
    comment:"Je suis reconnaissant pour l'efficacité de cette application, merci beaucoup",

  },

  {
    id:3,
    image:Image3,
    title:'Abdelbasset Megraoui',
    subtitle:'Organisateur hackathon innobyte de bedjaia',
    comment:'Je suis très impressionné par votre équipe',

  },

  {
    id:4,
    image:Image4,
    title:'Rayen Houari',
    subtitle:'Organisateur hackathon hackfest de telemcen',
    comment:'Je vous félicite, vous et votre équipe, pour avoir obtenu la deuxième place nationale et pour votre victoire malgré tous les défis.',

  },

  {
    id:5,
    image:Image5,
    title:'Yacine Laribi',
    subtitle:"Organisateur hackathon telehack d'oran",
    comment:'Je vous félicite, vous et votre équipe, pour avoir obtenu la première place au niveau national, et votre victoire est un travail merveilleux.',

  },
];





const testimonials = () => {
  return (
    <section className="testimonials container section">
      <h2 className="section__title">Clients & Reviews</h2>
      <Swiper className="testimonials__container grid"
      
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      grapCursor={true}
      pagination={{ clickable: true }}
      
      
      >
{data.map(({id,image,title,subtitle,comment}) => {
  return (
    <SwiperSlide className="testimonials__item" key={id}>
      <div className="thumb">
        <img src={image} alt="" className="thumb__img" />
      </div>
      <h3 className="testimonials__title">{title}</h3>
      <span className="subtitle">{subtitle}</span>
      <div className="comment">{comment}</div>
    </SwiperSlide>
  )
})}
      </Swiper>
    </section>
  )
}

export default testimonials
