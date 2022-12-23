import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: false,
    };
  }
  isActivated = () => {
    const { activated } = this.state;
    return activated ? "Activated" : "Not Activated";
  };
  onClickHandler = () => {
    this.setState({
      activated: true,
    });
  };
  componentDidMount() {
    console.log('The component has been mounted');
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickHandler}>Activate</button>
        <h1>
          ErrorBoundary {this.props.greet}
          {` ${this.isActivated()}`}
        </h1>
      </div>
    );
  }
}

export default ErrorBoundary;
