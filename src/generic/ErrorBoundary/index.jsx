import React, { Component } from "react";

class ErrorBoundary extends Component {
  isActivated = () => {
    const { activated } = this.props;
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
