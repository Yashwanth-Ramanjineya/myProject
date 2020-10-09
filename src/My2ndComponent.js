import React from "react";
import proptype from 'prop-types';

function My2ndComponent(props){
    console.log("===",props);
    return(
        <div>
        <h1>my functional component {props.mydata}</h1>
        <p>{props.mydata1}</p>
        </div>
    )
}
My2ndComponent.prototypes={
    mydata1:proptype.string,
    mydata:proptype.string

}
export default My2ndComponent;