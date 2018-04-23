import React from 'react';
import { Link } from 'react-router-dom';
import mint_logo from '../images/mint_orange.png';

export default function Navbar () {
  return(
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to='/'><img src={mint_logo} style={{width: '100px'}} /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-nav justify-content-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/">HOME <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            {/* <span class="navbar-text">
              <h2>Tucquan Studios</h2>
            </span> */}
            {/* <li className="nav-item">
              <Link className="nav-link text-center" to="/"><h2>TUCQUAN STUDIOS</h2></Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/shop">SHOP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <a href='https://www.instagram.com/tucquanstudio' target='_blank'>
              <i className="fab fa-instagram fa-lg" style={{paddingTop: '18px', color: 'black'}}></i></a>
            </li>
            <li className="nav-item">
              <i class="far fa-envelope fa-lg" style={{paddingTop: '18px'}}></i>
            </li>
          </ul>
        </div>
      </nav>
    </div>
)}
