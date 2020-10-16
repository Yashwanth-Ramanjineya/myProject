import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
//import Bhaskarclock from './Bhaskarclock';
import Keerthi from './Keerthi.js';
import "./App.css";
import My3rdComponent from './my3rdComponent';
import {connect} from 'react-redux';
import {addToDo, addMyStaticData, loadMyData} from './actions';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
     date: 'Hello Yash',
     firstname: '',
     lastname: '',
     isClicked: false
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log("this is didmount")
    this.props.loadData("myLoading data")
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


  handleClick = () => {
   var myData = {
     fullname: this.state.firstname + ' ' +this.state.lastname
   }
   this.setState({isClicked: true})
   this.props.addToDo(myData)
  }


  handleMySecond = () => {
    this.props.addMySecondAction('My Updated Second data am storing in redux')
  }

  static getDerivedStateFromProps(newProps, state) {
    console.log(state, "state")
    console.log(newProps && newProps.idData, "newProps======")
    if(newProps && newProps.idData.length > 0 && state.isClicked) {
      newProps.history.push('/date');
    }
    
  }

  handleFirstName = (e) => {
    this.setState({firstname: e.target.value})
  }

  handleLastName = (e) => {
    this.setState({lastname: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <h1>My React Component</h1>
        <h3>{this.state.date}</h3>
        <label>First Name: <input type="text" onChange={this.handleFirstName}/></label>
        <label>Last Name: <input type="text" onChange={this.handleLastName}/></label>
        <My3rdComponent myData1={['hell', 'hfhf']}/>
        <button onClick={this.handleClick}>Click here!</button>
        <button onClick={this.handleMySecond}>Click Here another user Event</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  idData: state
})

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (value) => dispatch(addToDo(value)),
    addMySecondAction: (value) => dispatch(addMyStaticData(value)),
    loadData: (value) => dispatch(loadMyData(value))
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Clock);
