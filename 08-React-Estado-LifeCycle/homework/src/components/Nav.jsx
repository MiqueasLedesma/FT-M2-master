import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({ onSearch }) {

  return (
    <nav className='nav'>
      <img className='img' src={Logo} alt="Error!" />
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;