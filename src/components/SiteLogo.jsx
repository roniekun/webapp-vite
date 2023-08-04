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
    font-family: 'Noto Sans JP', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size:14px;
    width:fit-content;
    height: fit-content;
    top:0;
    color: #687076;
    // background: red;
    // height:50px;
    // width:50px;
    // border-radius: 5 run0%;

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

const SiteLogo = ({setColor}) => {
  return (
    <StyledDiv>
    <NavLink to='/' >
    <div style={{color: setColor, fontWeight: '600'}} className='site_logo_container'>
    <span>ロニ</span>
    </div>
    </NavLink> 
    </StyledDiv>
  )
}

export default SiteLogo