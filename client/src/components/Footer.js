import React, { Component } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faSnapchat
  } from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (
            <div>
    <div class="footer-clean">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-4 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Get Started Now</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Legacy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 item">
                        <h3>Easy Auction</h3>
                        <ul>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Share</a></li>
                            <li><a href="#">Benefits</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-3 item social"><a href="#"><FontAwesomeIcon icon={faFacebook} /></a><a href="#"><FontAwesomeIcon icon={faTwitter} /></a><a href="#"><FontAwesomeIcon icon={faSnapchat} /></a><a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <p class="copyright">Online Auction © 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
   
            </div>
        )
    }
}

export default Footer
