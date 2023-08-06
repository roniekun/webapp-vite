import React from 'react';
import { ReactComponent as TrendingFlat } from './trending_flat.svg';
import { ReactComponent as Mail } from './mail.svg';
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
          Request Project <span><Mail className='mail_svg'/></span> <span><TrendingFlat className='trendingflat_svg'/></span>
        </b>
    </div>
  )
}

export default RequestBtn