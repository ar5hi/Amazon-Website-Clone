import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Slideshow from './Slideshow';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Slideshow/>
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}

export default App;
