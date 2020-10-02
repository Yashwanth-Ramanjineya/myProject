import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
import MyData from "./MyData";
import MySecondData from "./MySecondData";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myData: "Initial data",
      name: '',
      pwd: ''
    };
  }

  handleMyButton = (e) => {
    console.log(e);
    this.setState({
      myData: "Updated Data",
    });
  };

  handleUsername = (e) => {
    this.setState({name: e.target.value});
  }

  handlePwd = (e) => {
    this.setState({pwd: e.target.value})
  }

  handleLogin = () => {
    var myObj = {
      username: this.state.name,
      password: this.state.pwd
    }
    console.log(myObj)
  }


  render() {
    return (
      <div className="App">
        <img src={myPhoto} />
        <MyData data={this.state.myData} />
        <h1>{this.state.myData}</h1>
        <button onClick={this.handleMyButton}>
          Click Here to Update mySyate
        </button>
        <MySecondData />

        <label>Username App: <input type='text' value={this.state.name} onChange={this.handleUsername} /></label>
        <label>PasswordNamew: <input type='password' value={this.state.pwd} onChange={this.handlePwd} /></label>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
