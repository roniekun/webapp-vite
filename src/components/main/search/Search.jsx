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
    <div className='search_container'>
    {/* <input className='text_input' type="text" /> */}
    <label className={`search_label ${showNavbar ? 'gray' : 'black'}`} htmlFor="text_input">
     Search <SearchIcon className={`search_icon ${showNavbar ? 'gray' : 'black'}`} />
    </label>

    </div>

  )
}

export default Search