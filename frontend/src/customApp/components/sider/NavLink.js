import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Div = styled.div`
.navlink{
    color:black;
    display:block;
    position:absolute;
    width:220px;
    top:0px;
    left:10px;
    line-height:28px;
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