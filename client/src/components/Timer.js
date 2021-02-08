import React, { Component } from 'react'
import Countdown from 'react-countdown'
import App from '../App'

function TimeOver(){
  //  return <App />
      return "Time Over"
}

class Timer extends Component{
    render()
     {
        return (<div>
            <h1>
                <Countdown date={Date.now() + 5000}>
                <TimeOver />
                </Countdown>
                
            </h1>
        </div>)

    }
}


export default Timer;