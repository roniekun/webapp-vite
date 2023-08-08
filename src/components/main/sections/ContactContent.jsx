import React from 'react'
import ContactForm from './elements/ContactForm'
import  './ContactContent.css'
import SocialLinks from '../../icons/SocialLinks'


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

        <div className='form_header'>
        <h1 className='form_heading'><span> Have an awesome idea?</span>  <br />Let's Talk!</h1>
        <br />
          <p>
          If you're in need of a dedicated and innovative web developer who can bring your digital vision to life, 
          I'm ready to embark on the next exciting journey.
          Whether it's a complete website overhaul, responsive design enhancements, or seamless backend integrations, 
          I'm eager to contribute my skills to your project's success.</p>
          
          </div>   
          <div className='form'>
          <ContactForm/>
          </div>     
          
          <div className='contact'>
          <h3> Contact Details</h3> <br/>
         <h4 onClick={handleClick} className='email' 
         style={{ cursor: 'pointer'}}>  
        roniebenitez01@gmail.com <br />
        09453924586
          </h4>
          </div>
        <div className='digital_spaces'>
        <h4>My Digital Spaces</h4> <br />
         <SocialLinks flexDirection={'column'} fontSize={'18px'} displayNames={true} displayIcons={false}/>

        </div>

        
       

    </div>
  )
}

export default ContactContent