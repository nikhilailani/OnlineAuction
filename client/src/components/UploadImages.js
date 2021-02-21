import React, { Component } from 'react'
import axios from 'axios';
import photooo from '../Images/a.png'

class UploadImages extends Component {

      state ={
        name: '',
        photo: ""
      }


   

      _handleSubmit(e) {
        e.preventDefault();
        console.log("SSSSSSS")
        console.log(this.state.photo)

        const formData = new FormData();
        // TODO: do something with -> this.state.file
        formData.append('photo', this.state.photo);
        formData.append('name', this.state.name);
        console.log("..")

        axios.post('/upload',formData)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
      }
    
      _handleImageChange(e) {
        e.preventDefault();
        console.log(this.state.photo)
        this.setState({
          photo : e.target.files[0]
        })
        console.log("++++")
        
        console.log("****")
        console.log(String(e.target.files[0]))
    
      }
    
      render() {
        
        return (
          <div className="container">
            <form onSubmit={(e)=>this._handleSubmit(e)} encType="multipart/form-data">
              <input 
                type="file" name="photo" 
                onChange={(e)=>this._handleImageChange(e)} />
              <button 
                type="submit" 
                >Upload Image</button>
            </form>
             <div className="imgPreview">
             
         
            <img src={photooo} />
            </div>
          </div>
        )
      }
}

export default UploadImages;