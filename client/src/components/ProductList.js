import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  var images = importAll(require.context('../Images', false, /\.(png|jpe?g|svg)$/));  


class ProductList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            
            Products : [],
            

        }
    }        
    
     componentDidMount(){
        //   axios.get('/Products')
          fetch('/Products')
         .then(res => res.json())
         .then(res2 => {console.log(res2)
            this.setState({
                Products : res2
            })  
        })
    
    
         
         
        
     }

     handleClick (e,_id){
        
        console.log(_id)
        console.log(this.props.id)

    //     const formData = new FormData()

    //     formData.append("name","vatsal");
    //   //  formData.append('id', this.props.id);
    //     console.log("..")

    //     axios.post('/appenduser',formData)
    //     .then((res)=>console.log(res))
    //     .catch((err)=>console.log(err))

    //     for (var key of formData.entries()) {
    //         console.log(key[0] + ', ' + key[1]);
    //     }

    var data = new URLSearchParams();
    data.append("_id",_id)
    data.append("id",this.props.id)
    data.append("email",this.props.email)
    console.log("1111111")
    console.log(this.props.email)

    fetch('/appenduser',{
        method : "post",
        body : data,
    }).then(res => res.json())
    .then(res2 => console.log(res2));
    console.log("done")
    
}
    
      
      
      
    
     
    render() {
        
        const list = this.state.Products.map(item => {
            return <div className="col-6" >
                
                <img src={images[item.image1].default} alt="aa" height={150} width={150}/>

                <p>{item.name}</p>
                <p>{item.brand}</p>
                <p>Bidding date {item.bidDate}</p>
                <p>{item.image1}</p>
                <button type="button" name="a" onClick={(e)=>this.handleClick(e,item._id)}  >Interested</button>

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

const mapStateToProps = (state) => ({
    id : state.id,
    email : state.email
})
export default connect(mapStateToProps)(ProductList);
