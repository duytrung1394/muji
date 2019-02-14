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

const SearchNavigationList = ({ active }) => {
  return (
    <NavigationItemList>
      {(() => {
        if (0 === active) {
          return (
            <NavigationItemActive>
              <Link to="" key={0}>
                <NavigationItemLavelActive>
                  <IntlMessages id="search.item.title" />
                </NavigationItemLavelActive>
              </Link>
            </NavigationItemActive>
          );
        } else {
          return (
            <NavigationItem>
              <Link to="" key={0}>
                <NavigationItemLavel>
                  <IntlMessages id="search.item.title" />
                </NavigationItemLavel>
              </Link>
            </NavigationItem>
          );
        }
      })()}
      {(() => {
        if (1 === active) {
          return (
            <NavigationItemActive>
              <Link to="" key={1}>
                <NavigationItemLavelActive>
                  <IntlMessages id="search.article.title" />
                </NavigationItemLavelActive>
              </Link>
            </NavigationItemActive>
          );
        } else {
          return (
            <NavigationItem>
              <Link to="" key={1}>
                <NavigationItemLavel>
                  <IntlMessages id="search.article.title" />
                </NavigationItemLavel>
              </Link>
            </NavigationItem>
          );
        }
      })()}
      {(() => {
        if (2 === active) {
          return (
            <NavigationItemActive>
              <Link to="" key={2}>
                <NavigationItemLavelActive>
                  <IntlMessages id="search.service.title" />
                </NavigationItemLavelActive>
              </Link>
            </NavigationItemActive>
          );
        } else {
          return (
            <NavigationItem>
              <Link to="" key={2}>
                <NavigationItemLavel>
                  <IntlMessages id="search.service.title" />
                </NavigationItemLavel>
              </Link>
            </NavigationItem>
          );
        }
      })()}
      {(() => {
        if (3 === active) {
          return (
            <NavigationItemActive>
              <Link to="" key={3}>
                <NavigationItemLavelActive>
                  <IntlMessages id="search.store.title" />
                </NavigationItemLavelActive>
              </Link>
            </NavigationItemActive>
          );
        } else {
          return (
            <NavigationItem>
              <Link to="" key={3}>
                <NavigationItemLavel>
                  <IntlMessages id="search.store.title" />
                </NavigationItemLavel>
              </Link>
            </NavigationItem>
          );
        }
      })()}
    </NavigationItemList>
  );
};

export default SearchNavigationList;
