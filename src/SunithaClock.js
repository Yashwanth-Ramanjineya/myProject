import React, { Component } from "react";
import Lifecycle from './Lifecycle';
import "./App.css";
class SunithaClock extends Component{
    constructor(props){
     super(props); 
         this.state= {
          date:new Date() 
        }
    }
  render(){
      
        return(
           <div ClassName="App">
           <h1>Hello World!This  is SunithaClock</h1>
           <h2>It is{this.state.date}</h2>
           <Lifecycle />
           </div>
        );
    }
   
    
}
export default SunithaClock;