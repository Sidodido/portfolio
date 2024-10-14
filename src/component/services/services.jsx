import React from 'react'
import "./services.css"
import Image1 from '../../assets/design.png';
import Image2 from '../../assets/dev.png';
import Image3 from '../../assets/robot.png';
import Image4 from '../../assets/elecronic-logo.png';

const data =[
  {
    id:1,
    image: Image1,
    title:"ui-ux design",
    description:"utilisation de Figma pour le design de sites web, applications mobiles et logiciels permet de créer des interfaces visuellement attrayantes et intuitives grâce à ses outils de vectorisation, de typographie et de gestion des couleurs avancés."

},

{
  id:2,
  image: Image2,
  title:"Developpment",
  description:"Maîtrise du développement web et logiciel grâce à une expertise en HTML, CSS, et JavaScript pour des interfaces interactives, et en React, C, et C++ pour des applications robustes et performantes.",
 
},


{
  id:3,
  image: Image3,
  title:"Programmation robotique",
  description:"Expertise en développement de logiciels pour robots, incluant la création et l'optimisation de comportements autonomes, l'intégration de capteurs et actuateurs, et la mise en œuvre d'algorithmes de navigation et de vision artificielle.",

},

{
  id:4,
  image: Image4,
  title:"systemes embarques",
  description:"Compétence avancée en développement de logiciels pour systèmes embarqués, incluant la programmation de microcontrôleurs et la conception de circuits intégrés. Titulaire d'un diplôme en systèmes embarqués, assurant une maîtrise des techniques de conception, optimisation et implémentation de systèmes électroniques embarqués dans divers appareils. ",

},


];



const services = () => {
  return ( <section className="services container section" id='services'>
<h2 className="section__title">Services</h2>

<div className="services__container grid">
  {data.map(({id,image,title,description}) =>{
    return(
      <div className="services__card" key={id}>
<img src={image} alt="" className="services__img" />
<h3 className="services__title">{title}</h3>
<p className="services__description">{description}</p>
      </div>
    )

  })}
</div>
  </section>
  );
};
export default services
