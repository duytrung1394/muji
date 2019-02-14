import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const StoreListWrapper = styled.div`
  margin-bottom: 20px;
  padding: 2px;
  width: 100%;
  overflow: auto;

  div {
    line-height: 20px;
    padding: 10px 16px;
    border-top: 1px solid #e5e5e5;
    font-size: 12px;
  }

  .ant-card-grid {
    width: calc((100% - 60px) / 3);
    min-height: 200px;
    margin: 20px 20px 0 0;
    padding: 0;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.5);
    background-color: #fff;
  }
  .ant-card-grid:hover {
  }
  @media only screen and (max-width: 980px) {
    .ant-card-grid {
      width: calc((100% - 60px) / 2);
    }
  }
  @media only screen and (max-width: 768px) {
    .ant-card-grid {
      width: calc((100% - 60px));
    }
  }

  h3 {
    padding: 20px 16px 16px;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.43px;
    color: #585858;
  }

  ul {
    padding: 0;
  }
  li {
    list-style: none;
  }
  a,
  a:hover {
    color: #585858;
  }
`;

const SearchStoreList = props => {
  return (
    <StoreListWrapper>
      {props.items &&
        props.items.map((item, index) => {
          return (
              <Link to="" key={index}>
            <Card.Grid>
                {item.title && <h3>{item.title}</h3>}
                <div>
                  <ul>
                    <li>
                      <IntlMessages id="search.address" />：{item.address &&
                        item.address}
                    </li>
                    <li>
                      <IntlMessages id="search.number" />：{item.number &&
                        item.number}
                    </li>
                    <li>
                      <IntlMessages id="search.opening" />：{item.opening &&
                        item.opening}
                    </li>
                    <li>
                      <IntlMessages id="search.holiday" />：{item.holiday &&
                        item.holiday}
                    </li>
                  </ul>
                </div>
            </Card.Grid>
              </Link>
          );
        })}
    </StoreListWrapper>
  );
};

export default SearchStoreList;
