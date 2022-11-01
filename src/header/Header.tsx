import React from "react";
import './Header.css'
import { Link, NavLink } from 'react-router-dom'


export function Header() {

  return (

    <div className="header">
      <div className='header__left'>
        <div className='burger'>
          <input className='burger-js' autoComplete='on' type='checkbox' />
          <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
        </div>
        <div className='logo'></div>
      </div>
      <div className='header__right'>
        <div className='usrMenu'>
          <span className='usrMenu__icon usrMenu_icon-ts'></span>
          <ul className='usrMenu__list animate__animated'></ul>
        </div>
      </div>
    </div>
  )

}
