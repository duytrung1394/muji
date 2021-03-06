import React, { Component } from "react";
import Nprogress from "nprogress";
import ReactPlaceholder from "react-placeholder";
import "nprogress/nprogress.css";
import "react-placeholder/lib/reactPlaceholder.css";

export default function asyncComponent(importComponent) {
  class AsyncFunc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    componentWillMount() {
      if (typeof window === "undefined") {
        // SSR, render synchronously
        const Component = importComponent().default;
        this.setState({
          component: <Component {...this.props} />
        });
      } else {
        // Browser
        Nprogress.start();
      }
    }

    async componentDidMount() {
      if (typeof window !== "undefined") {
        // Browser, render asynchronously
        const { default: Component } = await importComponent();
        Nprogress.done();
        this.setState({
          component: <Component {...this.props} />
        });
      }
    }

    render() {
      const Component = this.state.component || <div />;
      return (
        <ReactPlaceholder
          type="text"
          rows={7}
          ready={this.state.component !== null}
        >
          {Component}
        </ReactPlaceholder>
      );
    }
  }
  return AsyncFunc;
}
