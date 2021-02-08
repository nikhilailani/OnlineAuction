import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter,Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login'
import Timer from './components/Timer';




function App() {
  return (
    <BrowserRouter>    <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/timer" component={Timer} />
            
    </div>
    </BrowserRouter>

  );
}

export default App;
