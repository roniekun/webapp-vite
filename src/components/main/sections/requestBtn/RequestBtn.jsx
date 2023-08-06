import React from 'react';
import { ReactComponent as TrendingFlat } from './trending_flat.svg';
import './RequestBtn.css';

const RequestBtn = () => {

  const email = 'roniebenitez01@gmail.com';
  const subject = 'Request Project';

  const handleClick = () => {

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='request_btn_container'>
           <b className='request_btn shadow' data-copy-text='roniebenitez01@gmail.com'  onClick={handleClick}>
          Request Project <span className="material-symbols-outlined"><TrendingFlat/></span>
        </b>
    </div>
  )
}

export default RequestBtn