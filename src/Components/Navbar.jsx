import React from 'react'
import './navbar.css'
// import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
      <>
     <div className="navbar">
       <div className="Navbar_text">
         <h2>PIZZA HUB</h2>
       </div>
        
         <div className="Navbar_menu">
          <ul className="navbar_ul">
            <li>
             <a href="#">Home</a>
             <a href="#">Menu</a>
             <a href="#">Shop</a>
             <a href="#">News</a>
             <a href="#">Contact Us </a>
            </li>
          </ul>
         </div>
       
     </div>

      </>
    )
}

export default Navbar
