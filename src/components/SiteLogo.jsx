import React from 'react'
import styled from 'styled-components';
import { ReactComponent as MyLogo } from './sitelogo.svg' ;

const StyledDiv = styled.div`
.site__logo__container {
   
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    zIndex:9999;
    cursor:pointer;
    font-family: 'VT323', monospace;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size:20px;
    width:fit-content;
    height: fit-content;
    top:0;
    color: #687076;
    
  
}

    svg {
      fill: white;
      height: 20px;
      width: 20px;
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

const SiteLogo = ({setColor, Left}) => {
  return (
    <StyledDiv>
    <div style={{color: setColor, left: Left}} className='site__logo__container'>
    <MyLogo/><span>R</span>
    </div>
    </StyledDiv>
  )
}

export default SiteLogo