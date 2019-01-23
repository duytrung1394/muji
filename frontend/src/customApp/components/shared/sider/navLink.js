import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ExLink = styled(Link)`
  line-height: 28px;
`;

class NavLink extends Component {
  render() {
    return <ExLink {...this.props} className="navlink" />;
  }
}

export default NavLink;
