import React from "react";
import PropType from 'prop-types';

function My3rdComponent(props) {
  console.log("====", props);
//   if (props.myData > 3) {
//       console.log("hello")
//   }
  return (
    <div>
      <p>{props.myData1}</p>
    </div>
  );
}
My3rdComponent.propTypes = {
    myData1: PropType.string,
    myData: PropType.string
}
export default My3rdComponent;
