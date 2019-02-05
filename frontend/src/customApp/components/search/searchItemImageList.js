import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";
import styled from "styled-components";

const ItemImageListWrapper = styled.div`
  height:320px;
 
  .ant-card-grid {
    width: 95%;
    max-width: 240px;
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
  .ant-card-grid:hover {
  }
  
  p{
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
  
  h3{
    padding: 0 10px;
    min-height: 35px;
  overflow: hidden;
  color: #585858;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  font-weight: normal;
  font-size: 12px;
  }
`;

const SearchItemImageList = props => {
    return (
        <ItemImageListWrapper>
            <Carousel slidesToShow={5} dots={false} swipeToSlide={true} swipe={true} draggable={true} infinite={false}>
                {props.items &&
                props.items.map((item, index) => {
                    return (
                        <div>
                        <Card.Grid key={index}>
                            <Link to="">
                                <img src={item.img_src} alt="" />

                                {item.description && <p>{item.description}</p>}
                                {item.title && <h3>{item.title}</h3>}
                            </Link>
                        </Card.Grid>
                        </div>
                    );
                })}
            </Carousel>
        </ItemImageListWrapper>
    );
};

export default SearchItemImageList;
