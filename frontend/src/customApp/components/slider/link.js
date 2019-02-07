import React, { Component } from "react";
import { Link as ReactRouterLink } from "../shared/form/link";
class Link extends Component {
  state = {
    mouseDownX: null,
    mouseDownY: null
  };
  handleMouseDown = e => {
    this.setState({
      mouseDownX: e.clientX,
      mouseDownY: e.clientY
    });
    e.preventDefault();
  };
  handleClick = e => {
    if (
      this.state.mouseDownX !== e.clientX ||
      this.state.mouseDownY !== e.clientY
    ) {
      e.preventDefault();
    } else if (this.props.onClick) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <ReactRouterLink
        {...this.props}
        onMouseDown={this.handleMouseDown}
        onClick={this.handleClick}
      >
        {this.props.children}
      </ReactRouterLink>
    );
  }
}
export default Link;
