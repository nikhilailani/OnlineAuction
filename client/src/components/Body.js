import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './Login'
import Home from './FirstPage'
import About from './About'

class Body extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/about" component={About} /> 

                
                </Switch>
            </div>
            
        )
    }
}

export default Body
