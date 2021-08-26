import React from 'react'
// import { Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch, Route,Link,useRouteMatch,useParams} from "react-router-dom";
import TinderCards from './components/TinderCards';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <h1>Let's Build the TINDER Clone App</h1> */}
        {/* <Header /> */}
        <Header/>
        <Switch>
            
            <Route path="/chat">
              <h1> I am chatpage</h1>

            </Route>

            <Route page="/">
              <TinderCards />
            </Route>
           
        </Switch>
              
        {/* Tinder Cards */}
        {/* Button bellow tinder cards */}
        {/* Chat screen */}

        {/* Individual chat screen */}

      </Router>
      
    </div>
  );
}

export default App;
