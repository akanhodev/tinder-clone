import React from 'react'
// import { Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router,Switch, Route,Link,useRouteMatch,useParams} from "react-router-dom";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons'
import { Chat } from '@material-ui/icons';
import Chats from './components/Chats'
import ChatScreen from './components/ChatScreen'


function App() {
  return (
    <div className="App">
      <Router>
        {/* <h1>Let's Build the TINDER Clone App</h1> */}
        {/* <Header /> */}
        <Switch>
            
            <Route path="/chats/:person">
              <Header backButton="/chats" />
             <ChatScreen />
            </Route>
            <Route path="/chats">
              <Header backButton="/" />
             <Chats />
            </Route>
            <Route path="/">
              <Header/>
              <TinderCards />
              <SwipeButtons />
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
