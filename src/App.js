import React, { Component } from "react";
import cookie from "react-cookies";


import { googleTranslate } from "./utils/googleTranslate";

class App extends Component { 
  state = {
    languageCodes: [],
    language: cookie.load("language") ? cookie.load("language") : "en",
    question: cookie.load("question")
      ? cookie.load("question")
      : "What language do you prefer to read with?"
  };

  componentDidMount() {
    // load all of the language options from Google Translate to your app state

    googleTranslate.getSupportedLanguages("en", function(err, languageCodes) {
      getLanguageCodes(languageCodes); // use a callback function to setState
    });

    const getLanguageCodes = languageCodes => {
      this.setState({ languageCodes });
    };
  }

  render() {
    const { languageCodes, language, question } = this.state;

    return (
      <div style={this.divStyle}>
        <p>{question}</p>

        {/* iterate through language options to create a select box */}
        <select
          className="select-language"
          value={language}
          onChange={e => this.changeHandler(e.target.value)}
        >
          {languageCodes.map(lang => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }

  changeHandler = language => {
    let { question } = this.state;
    let cookieLanguage = cookie.load("language");
    let transQuestion = "";

    const translating = transQuestion => {
      if (question !== transQuestion) {
        this.setState({ question: transQuestion });
        cookie.save("question", transQuestion, { path: "/" });
      }
    };

    // translate the question when selecting a different language
    if (language !== cookieLanguage) {
      googleTranslate.translate(question, language, function(err, translation) {
        transQuestion = translation.translatedText;
        translating(transQuestion);
      });
    }

    this.setState({ language });
    cookie.save("language", language, { path: "/" });
  };

  // just some inline css to center our demo
  divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100wh"
  };
}



export default App;


















//  Other Section 


// import React from 'react'
// // import Main from './Testing/Main'
// // import Translatedemo from './googletranslate/Translatedemo'
// // import { BrowserRouter } from 'react-router-dom';
// // import './App.css';// import Header from './Components/Header'
// // import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// // import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

// // import { Redirect, Route, Switch } from 'react-router';
// // import About from './Components/About';
// // import Blog from './Components/Blog';
// // import Contact from './Components/Contact';
// // import Courses from './Components/Courses';
// // import Home from './Components/Home';
// // import Navbar from './Components/Navbar';
// // import Staff from './Components/Staff';
// // // import {Switch , Route , Redirect} from "react-router-dom"


// function App() {
//   return (
//     <>
    
//     {/* <Main/> */}
// {/*     
//      <Header/>
//     */}

//        {/* <Navbar/>
     
    
//     <Switch>
//       <Route  exact path="/"  component={Home} />
//       <Route  exact path="/about"  component={About} />
//       <Route  exact path="/courses"  component={Courses} />
//       <Route  exact path="/staff"  component={Staff} />
//       <Route  exact path="/blog"  component={Blog} />
//       <Route  exact path="/contact"  component={Contact} />
//       <Redirect to="/" />
//      </Switch>
//       */}
//     </>
//   );
// }

// export default App;

