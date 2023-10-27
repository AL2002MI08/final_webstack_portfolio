import React from 'react';
import './Header.css'
const Header = () => {
    return (
       <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src="./log.jpg" alt="logo" width={100} />
            <div className="flexCenter h-menu">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Services</a>
            <button className='button'>
                <a href="">Register</a>
            </button>
            </div>
        </div>
       </section>
    );
};

export default Header;