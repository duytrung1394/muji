import React, {Component} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const styles = styled(Link)`
  .navlink {
    color: black;
    display: block;
    position: absolute;
    width: 230px;
    top: 0px;
    left: 0px;
    padding-left: 10px;
    line-height: 30px;
    
  }
  .navlink:hover {
    color: ;
  }
`;
class NavLink extends Link {
  render() {
    return (
      
        <Link {...this.props} className={styles} />
      
    );
  }
}

export default NavLink;
