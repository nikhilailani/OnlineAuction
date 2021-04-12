import React, { Component } from 'react'
import './HomeItems.css'
import cat from '../Images/cat.jpeg'
import history from './../history';
import Login from '../components/Login'

import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'


export class HomeItems extends Component {


  // handleClick(e){
  //   history.push('/login')
    
  // }

    
    render() {
        return (
            <div className="body">
                <section>
      <div class="container">
        <div class="row auctions-entry" >
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$95</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">Pinky Shoes</a></h3>
                <div class="d-flex mb-2">
                  <span>Shoes</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$30</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">Eye Glass Protector</a></h3>
                <div class="d-flex mb-2">
                  <span>Eye Glasses</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$199</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">Black Leather Jacket</a></h3>
                <div class="d-flex mb-2">
                  <span>Clothing</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
      
       
        </div>


        <div class="row auctions-entry">
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$777</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">iPad</a></h3>
                <div class="d-flex mb-2">
                  <span>Electronics</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$78</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">Shoe Sneakers</a></h3>
                <div class="d-flex mb-2">
                  <span>Shoes</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$1,999</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">iMac</a></h3>
                <div class="d-flex mb-2">
                  <span>Electronics</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-4 col-lg-3">
            <div class="item">
              <div>
                <strong class="price">$450</strong>
                <a href="item-single.html"
                  ><img src={cat} alt="Image" class="img-fluid"
                /></a>
              </div>
              <div class="p-4">
                <h3><a href="item-single.html">iWatch</a></h3>
                <div class="d-flex mb-2">
                  <span>Electronics</span>
                </div>
                <a href="item-single.html" class="btn btn-bid">Submit a Bid</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="height1">
      <div class="banner-section spad">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-4">
              <div class="single-banner">
                <img src={cat} alt="" />
                <div class="inner-text">
                  <h4>Men’s</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src={cat} alt="" />
                <div class="inner-text">
                  <h4>Women’s</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="single-banner">
                <img src={cat} alt="" />
                <div class="inner-text">
                  <h4>Kid’s</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

          <button type="button" className="btn btn-bid" onClick={() => history.push('/login')}>Click</button>

          <Switch>
                <Route exact path="/login" component={Login} />

          </Switch>     
      </div>       )
    }
}

export default HomeItems
