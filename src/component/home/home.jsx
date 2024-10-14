import React from 'react';
import "./home.css"
import Me from "../../assets/avatar-1.jpg"
import HeaderSocials from './headerSocials';
import ScrollDown from './scrollDown';



const home = () => {
  return (
    <div className="home-container" id="home">
<div className="intro">
  <img src={Me} alt="" className="home__img" />
  <h1 className="home__name">
    zidane sidahmed
  </h1>
  <span className="home__education">
  Développeur frontend et programmeur en système embarqué
  </span>

  
  
  <HeaderSocials />


    <a href="#contactt" className="btn" id="">Click ici</a>


</div>

    </div>
  )
}

export default home
