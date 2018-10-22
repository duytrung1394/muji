import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ExLink = styled(Link)`
  position: absolute;
  width: 230px;
  top: 0px;
  left: 0px;
  padding-left: 10px;
  line-height: 28px;
`;

class NavLink extends Component {
  render() {
    return <ExLink {...this.props} className="navlink" />;
  }
}

export default NavLink;
