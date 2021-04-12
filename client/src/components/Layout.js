import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import Navbar from './Navbar'
import history from './../history';

class Layout extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             navItems : []  
        }
    }
    
    getRoutes = () => {
        const routes = [
        {
            name : "Home",
            link : "/",
        },
        {
            name :"About",
            link : "/about"
        },
        {
            name : "login",
            link : "/login"
        }
        ]
        
        return routes
    }

    componentDidMount(){
        this.setState({
            navItems : this.getRoutes()
        },()=>{console.log(this.state.navItems)})
        
    }
    render() {

        return (
            <div>
        
        <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <button className="btn btn-success" onClick={() => history.push('/')}>Click button to view products</button>
          </form>
            </div>
        )
    }
}

export default Layout
