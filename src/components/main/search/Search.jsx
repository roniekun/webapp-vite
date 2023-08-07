import React from 'react'
import { ReactComponent as SearchIcon } from './search.svg';
import './Search.css'
// import styled from 'styled-components';

// const StyledLabel = styled.label`

//     svg {

//       fill: #6d6d6d;
//       height: 18px;
//       width: 18px;
//       transition: transform 0.3s ease;
//       font-size: 18px;
    
      
//     }
//   }
// `;


const Search = ({showNavbar}) => {
  return (
    <div onClick={() => alert('Still under construction :)')} className={`search_container ${showNavbar ? 'gray' : ' white'}`}>
    {/* <input className='text_input' type="text" /> */}
    <label className='search_label' htmlFor="text_input">
       
     <SearchIcon  className='search_icon' />
    </label>

    </div>

  )
}

export default Search