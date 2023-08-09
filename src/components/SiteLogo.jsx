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
    cursor:pointer;
    font-family: 'Clash Display', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size:14px;
    width:200px;
    height: fit-content;
    font-size: 18px;
    top:0;
    font-weight:500;

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

      .site_logo_container{
        position: relative;
        margin-block: 20px;  
        color: white;
        fill: white;
        width:fit-content;
        

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
    <span>roniekun</span>
    </NavLink> 
    </StyledDiv>
  )
}

export default SiteLogo