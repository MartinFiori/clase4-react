// Imports
import React from 'react';
import './NavBar.css';
import Logo from '../../assets/icon/brillando.png';
import CartWidget from '../CartWidget/CartWidget.jsx'


const NavBar = () => {
    const displayMenu = ()=>{
        document.getElementById('nav').classList.toggle("displayMenu")
        document.querySelector('.menu-btn').classList.toggle('open')
    }
    return(
        <>
        <header className="header">
            <div onClick={displayMenu} className="menu-btn">
                <div className="menu-btn__burger"></div>
            </div>
            <div className="header__icons">
                <CartWidget/>
                <img src={Logo}  alt="logo Brillandocon" className="header__img"/>
            </div>
        </header>
            <nav className="nav" id="nav">
                <div className="navOverlay"></div>
                <div className="nav__list--container">
                    <ul className="nav__list">
                        <li className="nav__list--item">Home</li>
                        <li className="nav__list--item">About Us</li>
                        <li className="nav__list--item">Favorites</li>
                        <li className="nav__list--item">Contact Us</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}


export default NavBar
