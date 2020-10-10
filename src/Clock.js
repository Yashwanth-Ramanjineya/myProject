import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
//import Bhaskarclock from './Bhaskarclock';
import Keerthi from './Keerthi.js';
import "./App.css";
import My3rdComponent from './my3rdComponent';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: 'Hello Yash'
    };
  }

  componentDidMount() {
    console.log("this is didmount")
  }

  // static getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps")
  // };

  shouldComponentUpdate() {
    console.log("shouldrerender or not")
    return true;
  }

  componentDidUpdate(newProps, newState) {
    console.log("componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }


  //componentWillUnmount() {
    //console.log("cOMPOEE EILL Unmount")
   //clearInterval(this.timerID)
  //}


  handleChange = () => {
    this.setState({date: "Helooo Update Yash"})
  }
  render() {
    return (
      <div className="App">
        <h1>My React Component</h1>
        <h3>{this.state.date}</h3>
        <button onClick={this.handleChange}>Click here!</button>
      </div>
    );
  }
}

export default Clock;
