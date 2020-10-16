import React, { Component } from "react";
import {connect} from 'react-redux';

class Date2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errFlag: "",
      errorMessage: "Plase Enter username/password",
    };
  }
  componentDidMount() {
    console.log("component here");
  }
  shouldComponentUpdate() {
    console.log("sholud component update");
    return true;
  }
  componentDidUpdate() {
    console.log("component update");
  }
  componentWillUnmount() {
    console.log("component is not updatr");
  }
  static getDerivedStateFromProps(newProps) {
    console.log(window.location)
    console.log("MyDatata======", newProps && newProps.myStoreData);
  }
  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  update = () => {
    if (this.state.username === "" || this.state.password === "") {
      this.setState({ errFlag: "ERROR" });
    } else {
      this.setState({ errFlag: "" });
    }
    console.log(this.state.username + "  " + this.state.password);
  };

  goBack = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <label>
          Username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword}
          />
        </label>
        <br />
        {this.state.errFlag === "ERROR" ? <p className="error">{this.state.errorMessage}</p> : null}
        {this.state.errFlag === "ERROR" ? <p>
          User: {this.state.username} + {this.state.password}
        </p> : null}

        <button onClick={this.update}>update!</button>
        <button onClick={this.goBack}>Back!</button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>({
  myStoreData: state
})
export default connect(mapStateToProps)(Date2);
