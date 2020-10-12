import React from "react";
import PropType from 'prop-types';

function My3rdComponent(props) {
  console.log("====", props);
//   if (props.myData > 3) {
//       console.log("hello")
//   }
  return (
    <div>
      {props.myData1 && props.myData1.map(item => (<p>{item}</p>))}
    </div>
  );
}
My3rdComponent.propTypes = {
    myData1: PropType.array,
    myData: PropType.string
}
export default My3rdComponent;
