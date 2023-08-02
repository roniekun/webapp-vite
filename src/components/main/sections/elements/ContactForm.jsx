import React, { useState } from 'react';
import './ContactForm.css';
import ContactModal from './ContactModal';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { NavLink, useLocation} from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDCbfEVWBnQQ0LtWmWQdomUifl8QOncSDM",
  authDomain: "netlify-project-contact-form.firebaseapp.com",
  projectId: "netlify-project-contact-form",
  storageBucket: "netlify-project-contact-form.appspot.com",
  messagingSenderId: "1062242217772",
  appId: "1:1062242217772:web:29e9de0bf9c2f49f5d4689"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ContactForm = () => {
 
  const initialFormData = {
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);}

  const handleChange = e => {

    e.preventDefault();
    const { name, value } = e.target;
  
    // Update the formData state with the new value
    setFormData({ ...formData, [name]: value });

  };
  

  const handleSubmit = async e => {
    e.preventDefault();

    

    if (formData.firstname && formData.lastname && formData.email && formData.message && isChecked) {
      
      formData.name = formData.firstname + ' ' + formData.lastname;
      setIsSubmitting(true);


      try {
        const submissionData = {
          ...formData,
          date: firebase.firestore.Timestamp.fromDate(new Date())
        };
        await db.collection('contact-form').add(submissionData);
        // Save the form data to Firebase
        setIsSuccess(true);
        setModalMessage('Form submitted successfully!');
        setIsSubmitting(false);
      } catch (error) {
        setIsSuccess(false);
        setModalMessage('Failed to submit the form. Please try again later.');
        console.error('Error submitting form:', error);
      } finally {
        setShowModal(true);
        setFormData(initialFormData);
      }
    } else {
      setIsSuccess(false);
      setModalMessage('Failed to submit the form. Please fill in all fields.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };



  return (
    <div className='form__container'>
      <h1 className='form__heading'>Get in touch</h1>
      <form className='form' onSubmit={handleSubmit}>


        <div className='first__layer'>
          <div>
            <label htmlFor="firstname" 
            style={{color: '#687076',
            fontWeight:'bold',
            fontSize: '14px',
             marginLeft: '5px'}}>
              Firstname <br/>
              </label>
            <input
              className='text__input'
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastname" 
            style={{color: '#687076',
             fontWeight:'bold',fontSize: '14px', 
             marginLeft: '5px'}}>

              Lastname <br/>
              </label>
            <input
              className={'text__input'}
     
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
         <div className='second__layer'>
          <label htmlFor="email"  
                  style={{color: '#687076',
                  fontWeight:'bold',
                  fontSize: '14px',
                  marginLeft: '5px'}}>
                 Email <br/> </label>
          <input
            className='email__input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='example@gmail.com'
            required
          />
        </div>
        <div className='second__layer'>
          <label htmlFor="message" 
                  style={{ color: '#687076',fontWeight:'bold',
                  fontSize: '14px', marginLeft: '5px'}}> 
                  Message <br/> </label>
          <textarea
            className='text__area'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Start typing here...'
            required
          />
        </div>
        <div style={{display: 'flex',
                   justifyContent: 'center',
                    alignItems: 'center'
      }}>
        <input type="checkbox" id="privacyAgreement" name="privacyAgreement" required  onChange={handleCheckboxChange}/> 
      <label for="privacyAgreement" style={{marginLeft:'5px', color:'#181818', fontSize: '12px'}}>
       
          By submitting the form, you agreed to the
         </label>
        
         <NavLink to="/policy"
             onClick={(e) => {
            if (location.pathname === '/policy') {
             e.preventDefault();     
              }
            }}  
            style={{fontSize:'12px', color: '#0A1F44', paddingInline:'3px'}}>
            Privacy Policy.</NavLink>
      </div>
        <button className={`submit__button ${isSubmitting ? 'loading' : ''}`} 
                  type="submit">
          {isSubmitting? 'please wait' : 'Submit' }</button>
      </form>
      {showModal && (
        <ContactModal
          isSuccess={isSuccess}
          message={modalMessage}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ContactForm;
