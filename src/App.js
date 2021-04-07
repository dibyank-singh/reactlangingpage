import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Courses from './Components/Courses';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Staff from './Components/Staff';
// import {Switch , Route , Redirect} from "react-router-dom"


function App() {
  return (
    <>
    

       <Navbar/>
     
    
    <Switch>
      <Route  exact path="/"  component={Home} />
      <Route  exact path="/about"  component={About} />
      <Route  exact path="/courses"  component={Courses} />
      <Route  exact path="/staff"  component={Staff} />
      <Route  exact path="/blog"  component={Blog} />
      <Route  exact path="/contact"  component={Contact} />
      <Redirect to="/" />
     </Switch>
     
    </>
  );
}

export default App;

