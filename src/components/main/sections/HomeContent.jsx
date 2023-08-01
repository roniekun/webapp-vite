// import React, { useState } from 'react';
import './HomeContent.css';
import { ReactComponent as TrendingFlat } from './trending_flat.svg'
// import ContactForm from './elements/ContactForm';
// import PageModal from './PageModal';

const HomeContent = () => {
  // const [showContactForm, setShowContactForm] = useState(false);


  const email = 'roniebenitez01@gmail.com';
  const subject = 'Request Project';
  
  const handleClick = () => {

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='home__content__container'>
      <div className='first_container'>
        <h1 className='hero'> 
          Unlock your visual story:<br /> 
          </h1>
          <h3 className='sub_hero'>Transforming Visions into Digital Masterpiece</h3>
   
        <b className='request_btn shadow' data-copy-text='roniebenitez01@gmail.com'  onClick={handleClick}>
          Request Project <span className="material-symbols-outlined"><TrendingFlat/></span>
        </b>
      </div>
      <div className='second_layer'>
      <div className='second_container'>
        <h4 className='ptag_home_title'>Web Development</h4>
        <p className='ptag_home'>
          He creates websites using React and is currently expanding his expertise in front-end development.
        </p>
      </div>
      <div className='third_container'>
        <p className='ptag_home_title'>Photography</p>
        <p className='ptag_home qoute'>
          I find joy in the art of Photography.
          While I don't limit myself to a specific niche,
          my portfolio reflects a diverse array of captivating shots.
        </p>
      </div>
      </div>

      <div className='forth__container'>
        <p className='ptag_home'>
          <span>Stay awhile </span><br /> immerse yourself in the fusion of technology and artistic expression.<br />
          Whether you're intrigued by coding wizardry or drawn to the beauty of visual storytelling,<br />
          I hope this leaves you inspired and eager to embark on future collaborations.
        </p>
      </div> 
      {/* {showContactForm && <PageModal zIndex={'9999'} showContactForm={showContactForm}/>}
      {showContactForm &&
       <div className= {showContactForm  ? 'contact_form_container' : 'hidden'}>
        <span  onClick={handleClick} style={{color: 'white', position: 'absolute', right: '0', cursor: 'pointer', margin: '5%', 
        background:'black'}} className="material-symbols-outlined">
        close
        </span>
       <ContactForm /></div> 
     } */}
     {/* <div className='fifth_container'>

          <h1 className='ptag_title'>Technology I use </h1> 
          <div className='tech_lists'>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Git</li>
        <li>npm</li>
         <li>Vite</li>
        <li>Firebase</li>
        <li>Sony Alpha</li>
        <li>Adobe Ligthroom</li>
    </ul>
</div>
     
        </div> */}
    </div>
  );
};

export default HomeContent;
