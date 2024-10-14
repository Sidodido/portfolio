import React from 'react'
import "./contact.css"

const contact = () => {
  return (
    <section className="contact container section" id='contactt'>
      <h2 className="section__title">Entrer en contact</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Parlons</h3>
          <p className="contact__details">Si vous n'aimez pas les formulaires, envoyez-moi un mail</p>

        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="contact__form">
<input type="hidden"  name='access_key' value="cbe3f7ff-f00f-4d25-9ed2-d27f4397756e" />

<div className="contact__form-group" >


    
   
   <div className="contact__form-div">
    <input type="text" name='name' className="contact__form-input" placeholder='Entrez votre nom' />
   </div>

   <div className="contact__form-div">
    <input type="email" name='email' className="contact__form-input" placeholder='Entrez votre email' />
   </div>

   <div className="contact__form-div ">
    <input type="text" name='subject' className="contact__form-input" placeholder='Entrez votre sujet' />
   </div>
</div>


<div className="contact__form-div  contact__form-area" >
  <textarea name="" id="" cols="30" rows="10" 
  className='contact__form-input' placeholder='write your message'></textarea>
   </div>

<button type='submit' className='btn' >Envoyer le message</button>


        </form>
      </div>
    </section>
  )
}

export default contact
