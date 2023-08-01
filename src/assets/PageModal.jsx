import React, { useState, useEffect } from 'react';

const PageModal = ({ showNavbar }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (showNavbar) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 200); // 500 milliseconds (half second delay)

    }
    else{
      setIsVisible(false);
    }
    return () => clearTimeout(timer);
  }, [showNavbar]);



  return isVisible ? (
    <div
      style={{
        position:'fixed',
        top: '0',
        width: '100vh',
        height: '100vh',
        position:'fixed',
        zIndex: '9999',
        transition: 'all 1s ease',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(15px)',
      }}
    ></div>
  ) : null;
};

export default PageModal;
