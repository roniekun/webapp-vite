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
         <h2 className='contact'> Contact Details</h2> <br/>
         <h4 onClick={handleClick} className='email' 
         style={{ cursor: 'pointer'}}>  
        roniebenitez01@gmail.com <br />
        </h4>
        <div className='form'>        
          <ContactForm/>
        </div>

    </div>
  )
}

export default ContactContent