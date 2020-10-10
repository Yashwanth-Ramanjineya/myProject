import React, { Component } from "react";
//import logo from "./logo.svg";
//import myPhoto from "../src/imagesFolder/logo192.png";
// import bhaskarclock from './bhaskarclock';
import "./App.css";

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  //componentWillUnmount() {
    //console.log("cOMPOEE EILL Unmount")
   //clearInterval(this.timerID)
  //}

  stopTimer = () => {
    clearInterval(this.timerID)
  }


  render() {

    return (
      <div className="App">
          <h1>New Compken t</h1>
        
        <h2>It is </h2>
      </div>
    );
  }
}

export default MyComponent;
