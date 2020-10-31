import React from 'react';
import Navbar from '../src/components/Navbar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/pages/Home'
import Services from '../src/components/pages/Services'


function App() {
  return (
    <>
    <Router>
    <Navbar/>

      <Switch>
        <Route path='/' exact component={
          Home
        } />
         <Route path='/services' exact component={
          Services
        } />
      </Switch>
      </Router>
    </>
  );
}

export default App;
