import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {

    state={
        userName:'',
        Password : ''
    }

    handleSubmit(e){

        console.log("Hello");
        <Redirect to="/" />



    }
    render() {
        return (
            <div>

            <input type="text" name="userName" value={this.state.userName} onChange={(e)=>this.setState({
                userName:e.target.value
            })} />
            
            <br/>
            <input type="password" name="Password" value={this.state.Password} onChange={(e)=>this.setState({
                Password:e.target.value
            })} />
            <br/>
           <button type="submit" className="waves-effect waves-light btn" onClick={(e)=>this.handleSubmit(e)}>sign in</button>
                
            </div>
        )
    }
}
export default Login;