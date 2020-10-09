import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
//import Bhaskarclock from './Bhaskarclock';
import Keerthi from './Keerthi.js';
import "./App.css";

class Clock extends Component {
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
    //this.setState({date: new Date()})
  }

  //componentWillUnmount() {
    //console.log("cOMPOEE EILL Unmount")
   //clearInterval(this.timerID)
  //}

  stopTimer = () => {
    clearInterval(this.timerID)
  }


  render() {
    console.log(this.state.date.toLocaleTimeString)
    return (
      <div className="App">
        <h1>Hello World! Here is my Clock {this.state.date.toLocaleTimeString()}</h1>
        <h2>It is </h2>
        <Keerthi />
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    );
  }
}

export default Clock;
