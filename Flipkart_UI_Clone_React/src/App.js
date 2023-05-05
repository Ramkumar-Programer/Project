import React from 'react';
import Homepages from './Homepage/Homepages';
//import NavBar from './Homepage/NavBar';
//import Sidebar from './Homepage/Sidebar';
import Productpage from './ProductPage/pdhome';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="\products">
          <Productpage />
        </Route>
        <Route path="/">
          <Hompages />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
