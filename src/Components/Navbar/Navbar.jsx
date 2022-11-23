import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarItems } from '../Navbar/NavbarData';
import '../../Components/Styles/navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <div className="circle"></div>
      <h1>Corestudio</h1>
      {NavbarItems.map((item, index) => {
        return (
          <li key={index}>
            <NavLink
              className={({ isActive }) =>
                isActive ? item.cName + ' active' : item.cName
              }
              to={item.url}
            >
              <i className={item.icon}></i>
              {item.title}
            </NavLink>
          </li>
        );
      })}
      <div className="bottom">
        <div className="socials">
          <a href="#/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="#/">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <h2>Subscribe for newsletter</h2>
        <input type="text" placeholder="Enter Email Address" />
        <p>
          Copyright &#169;2022 All rights reserved | This template is made by
          Secenory
        </p>
      </div>
    </div>
  );
}

export default Navbar;
