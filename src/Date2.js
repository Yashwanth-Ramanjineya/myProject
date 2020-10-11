import React, { Component } from "react";


class Date2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: "",
            errorMessage: ""   
        };
    }
    componentDidMount() {
        console.log("component here");
    }
    shouldComponentUpdate() {
        console.log("sholud component update")
        return true;
    }
    componentDidUpdate() {
        console.log("component update")
    }
    componentWillUnmount() {
        console.log("component is not updatr")
    }
    handleUsername=(e)=>{
        this.setState({username: e.target.value})
    }
    handlePassword=(e)=>{
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
                    Username:<input type="text" value={this.state.username} onChange={this.handleUsername} />
                </label><br />

                <label>
                    Password:<input type="password" value={this.state.password} onChange={this.handlePassword} />

                </label><br />
                <p className="error">{this.state.errorMessage}</p>
                <p>User: {this.state.username} + {this.state.password}</p>
  
                <button onClick={this.update}>update!</button>
            </div>

        );
    }
}
export default Date2;



