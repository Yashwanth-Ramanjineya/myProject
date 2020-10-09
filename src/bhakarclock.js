import React, { Component } from "react";
import logo from "./logo.svg";
import myPhoto from "../src/imagesFolder/logo192.png";
import "./App.css";
import Keerthi from "./Keerthi";

class Bhaskarclock extends Component {
    constructor(props){

        super(props)
        this.state={
            number:1558,
        }
    }
    render(){
        return(
            
            <h1>this is {this.state.number}</h1>
        )
    }

}

export default Bhaskarclock;