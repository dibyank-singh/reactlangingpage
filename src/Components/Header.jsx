import React from 'react'
import Navbar from './Navbar'
const Header = () => {
    return (
       <>
       <div className="banner">
           <Navbar/>
           <div className="banner__container">
             <div className="container">
                 <div className="container_text">

                 <h3>Pizza Delivery</h3>
                 <h1>Divyank's Pizza Hub</h1>
                 <p>Welcome To Divyank's Pizza Hub , we bring you all fastfood , please give a one chance to serve you ! Thank You Come Again</p>
                 </div>
             </div>

           </div>
       </div> 
       </>
    )
}

export default Header
