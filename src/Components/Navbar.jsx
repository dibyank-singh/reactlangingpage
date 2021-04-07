import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="main_nav">

            <div className="fist_nav" >
                <div className="upper_left">

                    <div className="uni_name">

                        <h3>Fox</h3> <span>University </span>

                    </div>
                </div>

                <div className="upper_right">

                    <div className="email">
                        <h3> Email </h3>  <span>divyanksingh101@gmail.com</span>
                    </div>
                    <div className="Call">
                        <h3> Call</h3> <span>Call Us: + 1235 2355 98</span>
                    </div>

                    <div className="butn">
                        <button className="btn btn-danger"> Apply Now</button>
                    </div>
                </div>
            </div>

            <div className="snd_nav">

                <div className="lower_nav">


                    <nav className="navbar mynavbar navbar-expand-lg navbar-dark  bg-dark">
                        <div className="container-fluid">

                            {/* <a class="navbar-brand" href="#">Navbar</a> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink  activeClassName="navstyl" className="nav-link active" aria-current="page" exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="navstyl" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                         <NavLink activeClassName="navstyl" className="nav-link" to="/courses">Courses</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="navstyl" className="nav-link" to="/staff">Staff</NavLink>
                                    </li>
                                    <li className="nav-item"> 
                                        <NavLink activeClassName="navstyl" className="nav-link" to="/blog">Blog</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="navstyl" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>

                                </ul>
                                <form className="d-flex ml-auto">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                    
                                     {/* <i class="bi bi-search"></i> */}
                                </form>
                            </div>
                        </div>
                    </nav>



                </div>
            </div>

        </div>
    )
}

export default Navbar
