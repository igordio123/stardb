import React from 'react';

import './header.css'

const Head = ()=>{
  return (
    <div className='header row'>
      <div className="logo col-md-8">STAR DB</div>
      <div className="top-menu col-md-4">
        <nav className="nav">
          <li className="nav-item">    <a href="#">Persons</a></li>
          <li className="nav-item"> <a href="#">Starships</a></li>
          <li className="nav-item"> <a href="#">Planets</a></li>

        </nav>
      </div>


    </div>
  )
};

export default Head
