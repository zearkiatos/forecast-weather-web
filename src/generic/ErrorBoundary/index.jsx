import React, { Component } from "react";

class ErrorBoundary extends Component {
  render() {
    return <h1>ErrorBoundary {this.props.greet}</h1>;
  }
}

export default ErrorBoundary;
