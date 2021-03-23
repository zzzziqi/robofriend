import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // react 16之后有新的lifecycle method，componentDidCatch, 这个方法可以catch 故障 in JS，如果有任何故障发生，它就会运行lifecycle hook,它有两个参数可以传进去，但在我们这个机器人案例中，不需要用到这两个参数
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1>noooooo, that is not good</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
