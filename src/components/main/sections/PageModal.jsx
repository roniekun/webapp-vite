import React, { useState, useEffect } from 'react';

const PageModal = ({zIndex, showContactForm}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (showContactForm) {
     
        setIsVisible(true);
      } 

    else{
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [showContactForm]);



  return isVisible ? (
    <div
      style={{
        position:'fixed',
        top: '0',
        width: '100%',
        height: '100vh',
        position:'fixed',
        zIndex:zIndex,
        transition: 'all 1s ease',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(15px)',
      }}
    ></div>
  ) : null;
};

export default PageModal;
