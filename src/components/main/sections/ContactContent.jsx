import React from 'react'
import ContactForm from './elements/ContactForm'
import  './ContactContent.css'


const ContactContent = () => {
  6
  const email = 'roniebenitez01@gmail.com';
  const subject = 'Request Project';

  const handleClick = () => {

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='contact__content__container'>
         <h2 className='contact'> CONTACT</h2> <br/>
         <a onClick={handleClick} className='email' href="#" style={{textDecoration:'none', color: '##FFB600', fontWeight:'700'}}>  
        roniebenitez01@gmail.com</a>
        <div className='form'>        
          <ContactForm/>
        </div>

    </div>
  )
}

export default ContactContent