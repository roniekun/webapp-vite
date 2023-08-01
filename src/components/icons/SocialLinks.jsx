import React from 'react';
import './SocialLinks.css';
import { ReactComponent as FacebookIcon } from './svg/facebook.svg'; // https://simpleicons.org/
import { ReactComponent as InstagramIcon } from './svg/instagram.svg';
import { ReactComponent as GithubIcon } from './svg/github.svg';
import { ReactComponent as LinkedinIcon } from './svg/linkedin.svg';
import { ThemeContext } from '../../context/ThemeContext';






const SocialLinks = ({ isSmallScreen, isDesktop, showNavbar, fillColor, displayNames, flexDirection}) => {
  const socialMediaLinks = [
    { name: 'LinkedIn', fill: '#0A66C2', icon:  <LinkedinIcon />, url: 'https://linkedin.com/in/roniebenitez', userhandle : '/in/roniebenitez' },
    { name: 'Github', fill: '#181717',icon:  <GithubIcon/>, url: 'https://www.github.com/roniekun',userhandle: '/roniekun' },
    { name: 'Facebook', fill: '#1877F2', icon: <FacebookIcon/>, url: 'https://www.facebook.com/ronieuxjpg', userhandle: '@ronieuxjpg' },
    { name: 'Instagram',fill: '#E4405F', icon: <InstagramIcon/>, url: 'https://www.instagram.com/ronieuxjpg', userhandle: '@ronieuxjpg' },
 
    // Add more social media links as needed
    ];

  return (
    <ThemeContext.Consumer>
  {({ theme }) => (
  <div className='social__links__container' style={isSmallScreen ? { flexDirection: flexDirection } : {}}>
 
      {socialMediaLinks.map((link) => (
        
    <a
    id={`component-${theme}`}
    className='link__btn social__icon'
    key={link.name}
    href={link.url}
    target="_blank"
    style={{fill: fillColor,color:fillColor}}
    rel="noopener noreferrer"
  >
    <>
    <div 
  
    className='icon__container'> 

    {link.icon}
    </div>
    <div className='userHandle__container'>
      {displayNames && link.userhandle}
      </div>
      </>

  </a>
        ))}</div>
        )}
        </ThemeContext.Consumer>
  );
};

export default SocialLinks;
