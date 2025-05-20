
import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { MdMessage, MdPayment, MdOutlineSpatialAudioOff } from 'react-icons/md';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  const [showNavbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(prev => !prev);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <img src='./images/TestLogo@2x.png' alt='test logo' className='logo' />
        <div className='menu-icon' onClick={handleNavbar}>
          {showNavbar ? <IoMdClose /> : <IoMdMenu />}
        </div>
      </div>

      <div className={`navbar-middle ${showNavbar ? 'active' : ''}`}>
        <ul>
          <li><IoHomeOutline /><NavLink to='/Overview'>Overview</NavLink></li>
          <li><MdOutlineSpatialAudioOff /><NavLink to='/Patients'>Patients</NavLink></li>
          <li><RiCalendarScheduleLine /><NavLink to='/Schedule'>Schedule</NavLink></li>
          <li><MdMessage /><NavLink to='/Message'>Message</NavLink></li>
          <li><MdPayment /><NavLink to='/Transactions'>Transactions</NavLink></li>
        </ul>
      </div>

      <div className='navbar-right'>
        <div className='doctor-info'>
          <img
            src='./images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
            alt='doctor'
            className='img-logo'
          />
          <div>
            <h2>Dr. Jose Simons</h2>
            <h5>General Practitioner</h5>
          </div>
        </div>
        <div className='nav-icons'>
          <BsThreeDotsVertical />
          <CiSettings />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
