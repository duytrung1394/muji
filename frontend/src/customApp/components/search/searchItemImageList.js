import React from "react";
import { Link } from "../../components/shared/slider";
import { Card } from "antd";
import Slider from "../shared/slider";
import styled from "styled-components";

const ItemImageListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: hidden;

  div {
    height: 350px;
  }

  .slick-track {
    display: flex;
  }
  .slick-slide {
    height: inherit;
  }

  .ant-card-grid {
    width: 95%;
    height: 90%;
    max-width: 240px;
    margin: 20px 0 0;
    padding: 0;
    img {
      border: solid 1px #f0f0f0;
      border-radius: 4px;
    }
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
    overflow: hidden;
    img {
      width: 100%;
      transition: filter 0.2s ease;
      filter: brightness(0.85);
    }
  }

  p {
    display: block;
    margin: 0;
    padding: 5px 10px;
    line-height: 15px;
    font-size: 11px;
    color: #999;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    padding: 0 10px;
    min-height: 35px;
    overflow: hidden;
    color: #585858;
    word-break: break-all;
    font-weight: normal;
    font-size: 12px;
  }
`;

const SearchItemImageList = props => {
  return (
    <ItemImageListWrapper>
      <Slider>
        {props.items &&
          props.items.map((item, index) => {
            return (
              <div key={index}>
                <Link to={"/store/cmdty/" + item.id}>
                  <Card.Grid>
                    <img src={item.img_src} alt="" />

                    <p>{item.description}</p>
                    <h3>{item.title}</h3>
                  </Card.Grid>
                </Link>
              </div>
            );
          })}
      </Slider>
    </ItemImageListWrapper>
  );
};

export default SearchItemImageList;
