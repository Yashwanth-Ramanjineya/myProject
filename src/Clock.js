import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
import bhaskarclock from './bhaskarclok',
import "./App.css";
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: new Date()
     year: new year()
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

  // componentWillUnmount() {
  //   console.log("cOMPOEE EILL Unmount")
  //   clearInterval(this.timerID)
  // }

  stopTimer = () => {
    clearInterval(this.timerID)
  }


  render() {
    console.log(this.state.date)
    return (
      <div className="App">
        <h1>Hello World! Here is my Clock {this.state.date.toLocaleTimeString()}</h1>
        <h2>It is </h2>
        <button onClick={this.stopTimer}>Stop Timer</button>
        <bhaskarclock/>

      </div>
    );
  }
}

export default Clock;
