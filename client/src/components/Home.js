import React from 'react';


class Home extends React.Component {
    state ={
        firstName :'',
        lastName:'',
        Email:'',
        Mobile:''
    }
    handleSubmit(e){
        e.preventDefault();


        var data = new URLSearchParams();
        //console.log(data)


        for(const pair of new FormData(e.target)){
            data.append(pair[0],pair[1])
        }
        
        fetch('/addUser',{
            method : "post",
            body : data,
        }).then(res => res.json())
        .then(res2 => console.log(res2));
        console.log("done")


    }
    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={(e)=>this.setState({firstName:e.target.value})}></input>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={(e)=>this.setState({lastName:e.target.value})}></input>
                    <input type="text" name="Email" value={this.state.Email} onChange={(e)=>this.setState({Email:e.target.value})}></input>
                    <input type="text" name="Mobile" value={this.state.Mobile} onChange={(e)=>this.setState({Mobile:e.target.value})}></input>

                    <button type="submit" className="waves-effect waves-light btn" >Add</button>
                </form>
            </div>
        );
        
    }

    }
   

export default Home;