import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const StyledDiv = styled.div`
.site_logo_container {
   
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    zIndex:9999;
    cursor:pointer;
    font-family: sans-serif;
    letter-spacing: 1px;
    text-transform: Capitalize;
    font-size:14px;
    width:fit-content;
    height: fit-content;
    font-size: 18px;
    top:0;
    font-weight: 700;

}

    svg {
      fill: white;
  
      transition: transform 0.3s ease;
    }

    &:hover {
      svg {
        transform: scale(1.2);
      }
    }

    @media (max-width:600px){

      .site__logo__container{
        position: relative;
        margin-block: 20px;  
        color: white;
        fill: white; 

      }
    }
  }

`;

const SiteLogo = ({transform, showNavbar, color}) => {
  return (
    <StyledDiv>
    <NavLink to='/' 
    onClick={() => window.scrollTo({ top: 0 })}
    style={{color: showNavbar ? '#6d6d6d' : color, transform: transform}} 
    className='site_logo_container'>
    <span>Discreet</span>
    </NavLink> 
    </StyledDiv>
  )
}

export default SiteLogo