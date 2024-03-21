import React from 'react';
import { IoIosArrowDown } from "react-icons/io";

import './_Header.scss'

function Header() {
  return (
    <header>
        <div className="container">
            <div className='nav'>
            <div className='logo'>
              <img src="https://codeskdhaka.com/wp/wetland/wp-content/themes/wetland/assets/img/logo/logo.png" alt="logo" />
            </div>
            <div className='menu'>
                <ul>
                    <li>Home <IoIosArrowDown />
                    <ul className='sub-menu'>
                      <li>Home Style01</li>
                      <li>Home Style01</li>
                      <li>Home Style01</li>
                      <li>Home Style01</li>
                      <li>Home Style01</li>
                    </ul>
                    </li>
                    <li>About</li>
                    <li>Service <IoIosArrowDown /></li>
                    <li>Blog <IoIosArrowDown /></li>
                    <li>Pages <IoIosArrowDown /></li>
                    <li>Contact</li>
                   
                </ul>
            </div>
            <div className='login-signup'>
                <div className='login'>Login</div>
                <div className='signup'><button>Sign Up</button></div>
            </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header