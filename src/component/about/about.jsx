import React from 'react';
import "./about.css"
import  Image from "../../assets/avatar-2.jpg"


const about = () => {
  return (
   <section className="about container section" id="about">

    <h2 className="section__title">

      About Me
    </h2>

    <div className="about__container grid">
<img src={Image} alt="" className="home__img" />

<div className="about__data grid">
  <div className="about__info">
    <p className="about__description">

    Développeur frontend et programmeur en système embarqué, je suis le fondateur de la startup House Trust. Spécialisée dans l'innovation technologique, House Trust propose des solutions de confiance pour la maison. Mon expertise englobe la création d'interfaces utilisateur intuitives et le développement de systèmes embarqués performants.      <a href="https://drive.google.com/file/d/1VwlxpcPoIAtcPU9qiJxVptpPdiNezUo1/view?usp=sharing" className="btn">Download cv</a>
    </p>
  </div>
<div className="about__skills grid">

<div className="about__skills ">

  <div className="skills__data ">
    <div className="skills__titles">
      <h3 className="skils__name">ui-ux design</h3>
      <span className="skills__number ">40%</span>
    </div>

  <div className="skills__bar" id='ui__desing' >
     
      <span className="skills__percentage ui__design"></span>
    </div>
  </div>

  <div className="skills__data ">
    <div className="skills__titles">
      <h3 className="skils__name">developpment</h3>
      <span className="skills__number  ">45%</span>
    </div>

  <div className="skills__bar" id='developpment'>
     
      <span className="skills__percentage developpment " ></span>
    </div>
</div>
 

<div className="skills__data ">
    <div className="skills__titles">
      <h3 className="skils__name">systemes embarques</h3>
      <span className="skills__number ">50%</span>
    </div>

  <div className="skills__bar" id='ese'>
     
      <span className="skills__percentage ese"></span>
    </div>
  </div>


  <div className="skills__data ">
    <div className="skills__titles">
      <h3 className="skils__name">programation robotics</h3>
      <span className="skills__number ">70%</span>
    </div>

  <div className="skills__bar"  id='robotics'>
     
      <span className="skills__percentage robotics"></span>
    </div>
  </div>







    </div>
  </div>
</div>
    </div>
   </section>
  )
}

export default about
