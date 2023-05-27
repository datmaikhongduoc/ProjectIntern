import React from 'react';
import "../../../scss/components/Header/searchBarStyles.scss"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <button><AiOutlineSearch className='icon-search'/></button>
      <input
        type='text'
        placeholder='Search'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      
    </form>
  </div>
);

export default SearchBar;
