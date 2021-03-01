import React, { Component } from 'react'
import Timer from './Timer'


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  var images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));  


class ActiveBids extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            products : []
             
        }
    }

    componentDidMount(){

        fetch('/active-bids')
        .then( res => res.json() )
        .then( res2 => {
            console.log(res2)
            this.setState({
                products : res2
            })
        })
    }

    handleClick(e,_id) {
        console.log("Okay")
    }
    
    render() {
        
        const list = this.state.products.map(item => {
            return <div className="col-6" >
                
                <img src={images[item.image1].default} alt="aa" height={150} width={150}/>

                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>Bidding date {item.bidDate}</p>
                <p>{item.image1}</p>
                <p>Ends In <Timer /></p>
                <button type="button" name="a" onClick={(e)=>this.handleClick(e,item._id)}  >Bid Now</button>

                {/* <img src={require(item.image1).default} alt="abcs" />  */}
                {/* <img src={require(`${item.image1}`).default} alt="abc" /> */}
                
            </div>
        })
        
        return (
            
            <div className="container">
                <div className="row">
                {list}
                </div>

                
            </div>
        )
    }
}

export default ActiveBids
