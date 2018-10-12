import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
.navlink{
    color:black;
    display:block;
}
.navlink:hover{
 color:white;}
`
class NavLink extends React.Component {

  render() {
    return (
        <Div  >
          <Link {...this.props} className="navlink"/>
        </Div>
    );
  }

}

export default NavLink;