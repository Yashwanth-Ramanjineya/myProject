import React, { Component } from 'react';


class MyData extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="myData">
        <h1>My Data Com[onent</h1>
        <h2>{this.props.data}</h2>
      </div>
    );
  }
  
}

export default MyData;