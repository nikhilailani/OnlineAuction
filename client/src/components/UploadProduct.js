import React, { Component } from 'react'
import axios from 'axios';

class UploadProduct extends Component {

    
    constructor(props) {
        super(props)
    
        this.state = {
            
            name : '',
            category : '',
            brand: '',
            minBidPrice : Number,
            bidDate : Date.now(),
          //  bidDuration : '',
            image1: ''
             
        }
    }
    

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)

        const formData = new FormData();
        // TODO: do something with -> this.state.file
        
        formData.append('name', this.state.name);
        formData.append('category', this.state.category);
        formData.append('brand', this.state.brand);
        formData.append('minBidPrice', this.state.minBidPrice);
        formData.append('bidDate', this.state.bidDate);
        formData.append('image1', this.state.image1);
        console.log("..")

        axios.post('/addProduct',formData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

    }

    _handleImageChange(e) {
        e.preventDefault();
        console.log(this.state.photo)
        this.setState({
          image1 : e.target.files[0]
        },()=>console.log(this.state.image1))
        console.log("++++")
        
        console.log("****")
        
    
      }

    render() {
        return (
            <div>
                 <form onSubmit={(e)=>this.handleSubmit(e)} encType="multipart/form-data">
                    <input type="text" placeholder="name" name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
                    <input type="text" placeholder="category" name="category" value={this.state.category} onChange={(e)=>this.setState({category:e.target.value})}></input>
                    <input type="text" name="brand" placeholder="brand" value={this.state.brand} onChange={(e)=>this.setState({brand:e.target.value})}></input>

                    <input type="number" placeholder="Initial Bid Price" name="minBidPrice" value={this.state.minBidPrice} onChange={(e)=>this.setState({minBidPrice:e.target.value})}></input>
                    <input type="date" name="bidDate" value={this.state.bidDate} onChange={(e)=>this.setState({bidDate:e.target.value})}></input>
                 {/* <input type="number" name="bidDuration" value={this.state.bidDuration} onChange={(e)=>this.setState({Mobile:e.target.value})}></input> */}

                    <input type="file" name="image1" onChange={(e)=>this._handleImageChange(e)} />
                    <button type="submit" className="waves-effect waves-light btn" >Add</button>
                </form>
                
            </div>
        )
    }
}

export default UploadProduct
