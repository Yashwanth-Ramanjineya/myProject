import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: ""
    };
  }
  componentDidMount() {
    console.log("Component did mount here");
  }

  // static getDerivedStateFromProps() {

  // }

  shouldComponentUpdate() {
    console.log("Should component update");
    return true;
  }

  componentDidUpdate() {
    console.log(" componentDidUpdate update");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount update");
  }

  handleUsername = (e) => {
      this.setState({username: e.target.value})
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value})
  }

  update = () => {
      if (this.state.username === "" || this.state.password === "") {
          this.setState({errorMessage: "You Missed username/password"})
      } else {
        
      }
    console.log(this.state.username + "  " + this.state.password)
  };

  render() {
    return (
      <div>
        <label>
          Username: <input type="text" value={this.state.username} onChange={this.handleUsername}/>
        </label>
        <label>
          password: <input type="password" value={this.state.password} onChange={this.handlePassword} />
        </label>
        <p className="error">{this.state.errorMessage}</p>
        <p>User: {this.state.username} + {this.state.password}</p>

        <button onClick={this.update}>Update!</button>
      </div>
    );
  }
}

export default User;
