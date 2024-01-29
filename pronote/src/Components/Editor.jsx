import React, { Component } from "react";
import "../App.css";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: "",
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            value={value}
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{value}</div>
        </div>
      </div>
    );
  }
}

export default Editor;
