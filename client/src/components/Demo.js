import React, { Component } from 'react'
import { connect } from 'react-redux'

class Demo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             number : ''
        }
    }
    
   
    clickHandle = () => {

        this.props.dispatch({type : "INCREASE",payload: this.state.number})

    }
    render() {
        return (
            <div>
            <h2>Articles</h2>
                  {this.props.count}
                  <input type="text" name="firstName" value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})}></input>

                  <div>
                  <button value="click" onClick={this.clickHandle}>clickHandle</button>
                  </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    count : state.count
})

export default connect(mapStateToProps)(Demo);
