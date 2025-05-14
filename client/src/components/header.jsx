import React from 'react';
import './Header.css';
import logo from '../Logo_since47.png';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="IndiaSince47 Logo" className="logo" />
      <h1 className="title">
        <span className="saffron">India</span>
        <span className="white">Since</span>
        <span className="green">47</span>
      </h1>
    </header>
  );
}
