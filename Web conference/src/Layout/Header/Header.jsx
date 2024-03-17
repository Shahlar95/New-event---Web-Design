import React from 'react';
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                    <li>Pages</li>
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