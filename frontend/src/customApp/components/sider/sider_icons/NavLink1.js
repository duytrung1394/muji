import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const NavLink1 = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

export default NavLink1 = (props) => <NavLink1 {...props} />;