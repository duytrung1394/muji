import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";
import styled from "styled-components";

const StoreListWrapper = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 220px;

  div {
    line-height: 20px;
    padding: 10px 16px;
    border-top: 1px solid #e5e5e5;
    font-size: 12px;
  }

  .ant-card-grid {
    width: calc((100% - 60px) / 3);
    height: 90%;
    margin: 20px 0 0 20px;
    padding: 0;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.5);
    background-color: #fff;
  }
  .ant-card-grid:hover {
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
            <Card.Grid key={index}>
              <Link to="">
                {item.title && <h3>{item.title}</h3>}
                <div>
                  <ul>
                    {item.address && <li>住所：{item.address}</li>}
                    {item.number && <li>電話番号：{item.number}</li>}
                    {item.opening && <li>営業時間：{item.opening}</li>}
                    {item.holiday && <li>店休日：{item.holiday}</li>}
                  </ul>
                </div>
              </Link>
            </Card.Grid>
          );
        })}
    </StoreListWrapper>
  );
};

export default SearchStoreList;
