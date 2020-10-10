import React, { Component } from "react";
import SunithClock from "./SunithaClock";
import "./App.css";

class SunithaClock extends Component{
  constructor(props){
   super(props); 
       this.state= {
        date:new Date() 
      };
  }
render(){
    
      return(
         <div ClassName="App">
         <h1>Hello World!This  is SunithaClock</h1>
         <h2>It is{this.state.date}</h2>
         </div>
      );
  }
}

export default App;
