import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false
    }
  }
  isActivated = () => {
    const { activated } = this.state;
    return activated ? "Activated" : "Not Activated";
  };
  render() {
    return (
      <h1>
        ErrorBoundary {this.props.greet}
        {` ${this.isActivated()}`}
      </h1>
    );
  }
}

export default ErrorBoundary;
