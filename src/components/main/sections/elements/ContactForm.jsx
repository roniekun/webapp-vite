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

    

    if (formData.firstname  && formData.email && formData.message && isChecked) {
      
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
      <h1 className='form__heading'><span> Bring to us your idea,</span>  <br />Let's Talk</h1>
      <form className='form' onSubmit={handleSubmit}>


        <div className='first__layer'>
          
            <input
              className='text__input'
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              placeholder='Your name'
            />



            <input
              className={'text__input'}
              placeholder='Lastname (Optional)'
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
        
            />
      
        </div>

         <div className='second__layer'>
          <input
            className='email__input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Your email address'
            required
          />
        </div>
        <div className='second__layer'>
       
          <textarea
            className='text__area'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Your message'
            required
          />
        </div>
        <div style={{display: 'flex',
                   justifyContent: 'center',
                    alignItems: 'center'
      }}>
        <input type="checkbox" id="privacyAgreement" name="privacyAgreement" required  onChange={handleCheckboxChange}/> 
      <label htmlFor="privacyAgreement" style={{marginLeft:'5px', color:'#181818', fontSize: '12px'}}>
       
          By submitting the form, you agreed to the
 
        
         <NavLink to="/policy"

            onClick={() => window.scrollTo({ top: 0 })}
            style={{fontSize:'12px', color: '#0A1F44', paddingInline:'3px'}}>
            Privacy Policy.</NavLink>
            </label>

      </div>
        <button className={`submit__button ${isSubmitting ? 'loading' : ''}`} 
                  type="submit">
          {isSubmitting? 'please wait' : 'Send Message' }</button>
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
