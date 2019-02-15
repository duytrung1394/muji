import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";

const NavigationItemList = styled.ul`
  display: flex;
  border-bottom: 4px solid #7f0019;
  background: #f2f2f2;
  color: #585858;
  font-size: 12px;

  a:hover {
    color: #585858;
  }
`;

const NavigationItem = styled.li`
  list-style: none;
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

const NavigationItemActive = styled.li`
  list-style: none;
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #7f0019;
  color: #ddd;
  font-weight: bold;

  a:hover {
    color: #ddd;
  }
`;

const NavigationItemLavel = styled.span`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  color: #585858;
`;

const NavigationItemLavelActive = styled.span`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  color: #ddd;
`;

const menus = ["item", "article", "service", "store"];

const link = ["", "", "", ""];

const SearchNavigationList = ({ active }) => {
  return (
    <NavigationItemList>
      {menus.map((menu, index) => {
        if (index === active) {
          return (
            <NavigationItemActive key={index}>
              <Link to={link[index]}>
                <NavigationItemLavelActive>
                  <IntlMessages id={"search." + menu + ".title"} />
                </NavigationItemLavelActive>
              </Link>
            </NavigationItemActive>
          );
        } else {
          return (
            <NavigationItem key={index}>
              <Link to={link[index]}>
                <NavigationItemLavel>
                  <IntlMessages id={"search." + menu + ".title"} />
                </NavigationItemLavel>
              </Link>
            </NavigationItem>
          );
        }
      })}
    </NavigationItemList>
  );
};

export default SearchNavigationList;
