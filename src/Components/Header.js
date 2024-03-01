// Header.js
import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.NavBar');
      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    const targetSection = document.getElementById(section);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='Header'>
      <div className='NavBar'>
        <ul>
          <li onClick={() => handleNavClick('Main')}>About me</li>
          <li onClick={() => handleNavClick('Portfollio')}>Portfolio</li>
          <li onClick={() => handleNavClick('glowne')}>Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
