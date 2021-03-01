import React, { Component } from 'react'
import Countdown from 'react-countdown'
import App from '../App'

function TimeOver(){
  //  return <App />
      return "Time Over"
}

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (((hour * 60) + minutes) * 60) + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
  }
class Timer extends Component{
    
    render()
     {
        return (<div>
            <h1>
                <Countdown date={Date.now() + getSecondsToTomorrow()*1000}>
                <TimeOver />
                </Countdown>
                
            </h1>
        </div>)

    }
}


export default Timer;