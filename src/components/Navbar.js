import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      Library Of Prishtina
      <div className="links">
        <ul className='menus'>
            <li><a href="/">Home</a></li>
            <li><a href="/members">Members</a></li>
            <li><a href="/about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;