import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";

const ServiceItemListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: hidden;

  .ant-card-grid {
    width: calc((100% - 90px) / 4);
    margin: 10px 30px 20px 0;
    padding: 0 0 15px 0;
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
    border-radius: 4px;
    img {
      border: solid 1px #f0f0f0;
      width: 100%;
      transition: filter 0.2s ease;
      filter: brightness(0.85);
      border-radius: 4px 4px 0 0;
    }
    p {
      display: block;
      margin: 0;
      padding: 0 10px;
      line-height: 15px;
      font-size: 11px;
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h3 {
      padding: 10px;
      color: #585858;
      font-weight: normal;
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media only screen and (max-width: 980px) {
    .ant-card-grid {
      width: calc((100% - 100px) / 2);
    }
  }
  @media only screen and (max-width: 768px) {
    .ant-card-grid {
      width: calc((100% - 100px));
    }
  }
`;
const SearchServiceList = props => {
  return (
    <ServiceItemListWrapper>
      <h3>
        <IntlMessages id="search.storeService.title" />
      </h3>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Card.Grid key={index}>
              <Link to={"/store/service/" + item.serviceId}>
                <img src={item.image_url} alt="" />
                <h3>{item.serviceName}</h3>
                {item.description ? <p>{item.description}</p> : <p>　</p>}
                <p>
                  <IntlMessages
                    id="productCategoryTop.price"
                    values={{ price: item.price }}
                  />
                </p>
              </Link>
            </Card.Grid>
          );
        })}
    </ServiceItemListWrapper>
  );
};
export default SearchServiceList;
