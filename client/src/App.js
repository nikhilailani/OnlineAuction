import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter,Route, Router, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import FirstPage from './components/FirstPage';
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login';



function App() {
  return (
    <div>
      <BrowserRouter>
       
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
            <Route path='/login' exact component={Login} />
          </Switch> 
        

       </BrowserRouter> 
</div>
  );
}

export default App;
