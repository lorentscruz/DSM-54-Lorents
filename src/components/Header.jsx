import React from 'react';
import '../assets/style/components/header.scss';
import logo from '../assets/static/a.jpg';
import userIcono from '../assets/static/user-icon.png';

const Header = () => {
    return(
        <div className="header">
  <header class="header">
    <img src={logo} className="Header_img" alt="lorentsvideo"></img>
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src={userIcono} alt=""></img>
        <p>Que we</p>
      </div>
      
    </div>
  </header>
        </div>
    )
}
export default Header;