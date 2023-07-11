import React from 'react';
import './Navbar.css';
import logo from '../imgs/logo.jpg';
function Navbar() {
  return (
    <div className='Navbar-container'>
        <div className='Navbar-logos'>
            <div className='Navbar-pos-logo'><img src={logo} className='Navbar-logo'></img></div>
            <div className='Navbar-pos1'><h1>+74957248687</h1></div>
        </div>
        <div className='Navbar-positions'>
            <div className='Navbar-pos'><h1>Главная</h1></div>
            <div className='Navbar-pos'><h1>О нас</h1></div>
            <div className='Navbar-pos'><h1>Контакты</h1></div>
            <div className='Navbar-pos'><h1>Наши работы</h1></div>
        </div>
    </div>
  )
}

export default Navbar