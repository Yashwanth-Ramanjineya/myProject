import React, { Component } from "react";
import My2ndComponent from './My2ndComponent';

class Keerthi extends Component{
    constructor(props){
        super(props);
            this.state={
                date: new Date()
            };
        
    }
    componentDidMount(){
        this.timerID=setInterval(
            () =>this.tick(),1000
        )
    }
    tick = () => {
        this.setState({date: new Date()})
      }
      stopTimer = () => {
        clearInterval(this.timerID)
      }
    render(){
        console.log(this.state.date.toLocaleTimeString)
    
        return(
            <div className="App">
                <h1>This is Keerthi Component</h1>
            
                     <h1>Hi Here is My Clock {this.state.date.toLocaleTimeString()}</h1>
                        <h1>It is</h1>
                        <My2ndComponent  mydata="thisnis my parent class" mydata1="hello" />
                 
                            <button onClick={this.stopTimer}>Stop Timer</button>

            </div>

        );
    }
}



export default Keerthi;
