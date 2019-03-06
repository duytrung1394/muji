import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";

const NavigationItemList = styled.ul`
  padding: 0;
  display: flex;
  border-bottom: 4px solid #7f0019;
  background: #f2f2f2;
  font-size: 12px;
`;

const NavigationItem = styled.li`
  list-style: none;
  width: 25%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: ${props => (props.isActive ? "#7f0019" : "none")};
  font-weight: ${props => (props.isActive ? "bold" : "normal")};

  a:hover {
    color: ${props => (props.isActive ? "#ddd" : "#585858")};
  }

  span.label {
    display: inline-block;
    width: 100%;
    line-height: 40px;
    color: ${props => (props.isActive ? "#ddd" : "#585858")};
  }
`;

const menus = [
  { name: "item", link: "/store/search/cmdty" },
  { name: "article", link: "/store/search/article" },
  { name: "service", link: "/store/search/service" },
  { name: "store", link: "/store/search/store" }
];

const SearchNavigationList = ({ active }) => {
  return (
    <NavigationItemList>
      {menus.map((menu, index) => {
        return (
          <NavigationItem isActive={active === index} key={index}>
            <Link to={menu.link}>
              <span className="label">
                <IntlMessages id={"search." + menu.name + ".title"} />
              </span>
            </Link>
          </NavigationItem>
        );
      })}
    </NavigationItemList>
  );
};

export default SearchNavigationList;
