import React from 'react';
import './App.css';
import Home from './component/HomeScreen';
import Shop from './component/ShopScreen'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Nav from './component/navbar'
function App() {

  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
