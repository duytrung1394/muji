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
`;

const NavigationItemLavel = styled.a`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  color: #585858;
`;

const NavigationItemLavelActive = styled.a`
  display: inline-block;
  width: 100%;
  line-height: 40px;
  color: #ddd;
`;

const SearchNavigations = ["商品", "読み物", "サービス", "店舗"];

const SearchNavigationUrls = ["", "", "", ""];

const SearchNavigationList = ({ active }) => {
  return (
    <NavigationItemList>
      {SearchNavigations.map((item, index) => {
        if(index.toString() === active){
            return (
                <NavigationItemActive>
                    <Link to={SearchNavigationUrls[index]} key={index}>
                        <NavigationItemLavelActive>{item}</NavigationItemLavelActive>
                    </Link>
                </NavigationItemActive>
            );
        }else {
            return (
                <NavigationItem>
                    <Link to={SearchNavigationUrls[index]} key={index}>
                        <NavigationItemLavel>{item}</NavigationItemLavel>
                    </Link>
                </NavigationItem>
            );
        }
      })}
    </NavigationItemList>
  );
};

export default SearchNavigationList;
