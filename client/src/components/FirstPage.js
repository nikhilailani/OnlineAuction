import React, { Component } from 'react'
import './FirstPage.css'
import { Route, Switch, Redirect } from "react-router-dom";

import { faUserAlt, faMoneyBillAlt, faWineGlass, faTrophy, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import About from './About';
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";

class FirstPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleClick(){
          
    }

   
    render() {
        return (
            <div className="container">
                <div>
                <div className="row">
                    <div className="col-lg-7 mb-5">
                    <span className="caption">How?</span>
                    <h2 class="text-black">How <strong>It Works</strong></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="step">
                            <span className="wrap-icon icon-user">

                                <FontAwesomeIcon icon={faUserAlt} />


                            </span>
                        <h3>Register</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
                        </div>
                    </div>


<div className="col-lg-3">
<div className="step">
<span className="wrap-icon icon-money">
        <FontAwesomeIcon icon={faMoneyBillAlt} />

</span>
<h3>Buy or Bid</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>

</div>
</div>

<div className="col-lg-3">
<div className="step">
<span className="wrap-icon">
        <FontAwesomeIcon icon={faWineGlass} />

</span>
<h3>Submit a bid</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
</div>
</div>
<div className="col-lg-3">
<div className="steplast">
<span className="wrap-icon"><FontAwesomeIcon icon={faTrophy} />
</span>
<h3>Win</h3>
<p style={{  color: "#512549" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed consequatur quaerat magnam sequi nobis ut et iure.</p>
</div>
</div>
</div>
</div>
            </div>
        )
    }
}

export default FirstPage
