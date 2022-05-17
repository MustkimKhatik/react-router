import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  const NavStyle = {
    color: 'white'
  };

  return (
    <nav>
      <Link to='/' style={NavStyle}>
        <h3>Logo</h3>
      </Link>

        <ul className='ul-links'>
          <Link style={NavStyle} to='/about'>
            <li>About</li>
          </Link>

          <Link to='/shop' style={NavStyle}>
            <li>Shop</li>
          </Link>

        </ul>
    </nav>
  )
}

export default Nav