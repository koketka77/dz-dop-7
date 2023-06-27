

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }

  createBlock = (count) => {
    if (count > 10) {
      const dd = Array.from({ length: 10 }, () => (
        <div className="squares"
        //   style={{ width: "100px", height: "100px", border: "1px solid hotpink", borderRadius: "10px", backgroundColor: "green"}}
        ></div>
      ));
      return dd;
    } else {
      const dd = Array.from({ length: count }, () => (
        <div className="squares"
        //   style={{ width: "100px", height: "100px", border: "1px solid hotpink", borderRadius: "10px", backgroundColor: "green" }}
        ></div>
      ));
      return dd;
    }
  };

  handleCountChange = (e) => {
    this.setState({ count: e.target.value });
  };

  handleCreate = () => {
    this.setState({ count2: this.state.count });
  };

  render() {
    return (
      <>
      <div className="container">
        <div className="main">
          <input type="text" onChange={this.handleCountChange} />
          <button onClick={this.handleCreate}>create</button>
        </div>
        <div className="SquareContainer">{this.createBlock(this.state.count2)}</div>
    </div> 
     </>
    );
  }
}

export default Counter;

