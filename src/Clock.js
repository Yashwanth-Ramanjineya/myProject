import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
//import Bhaskarclock from './Bhaskarclock';
import Keerthi from './Keerthi.js';
import "./App.css";
import My3rdComponent from './my3rdComponent';
import {connect} from 'react-redux';
import {addToDo} from './actions';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: 'Hello Yash'
    };

    this.myRef = React.createRef();
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
    console.log(this.myRef.value);
    this.props.addToDo(this.myRef.value);
   console.log(window.location)
   
  }

  static getDerivedStateFromProps(newProps) {
    console.log(newProps && newProps.idData, "newProps======")
    if(newProps && newProps.idData.length > 0) {
      newProps.history.push('/date');
    }
    
  }

  render() {
    return (
      <div className="App">
        <h1>My React Component</h1>
        <h3>{this.state.date}</h3>
        <input type="text" ref={(element) => this.myRef = element}/>
        <My3rdComponent myData1={['hell', 'hfhf']}/>
        <button onClick={this.handleChange}>Click here!</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  idData: state
})

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (value) => dispatch(addToDo(value))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Clock);
