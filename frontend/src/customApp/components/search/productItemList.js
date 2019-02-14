import React from "react";
import { Link } from "react-router-dom";
import { Card, Carousel } from "antd";
import styled from "styled-components";
import ProductSize from "../../components/search/productSize";
import ColorSwatch from "../../components/search/colorSwatch";
import ProductPrice from "../../components/search/productPrice";

const ItemImageListWrapper = styled.div`
  padding: 2px;
  width: 100%;
  overflow: auto;
  
  .ant-card-grid {
    width: calc((100% - 60px) / 4);
    max-width: 300px;
    margin: 20px 10px 0;
    padding: 0 0 15px 0;
    
    box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
      border-radius: 4px;
    overflow: hidden;
    
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
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
    font-weight: normal;
    font-size: 12px;
  }
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
  
  .ant-card-grid:hover {
  }
  
`;

const ProductImg = styled.img`
      margin-bottom: 5px;
      border: solid 1px #f0f0f0;
      width: 100%;
      transition: filter 0.2s ease;
      filter: brightness(0.85);
`;


const ProductItemList = props => {
    return (
        <ItemImageListWrapper>
                {props.items &&
                props.items.map((item, index) => {
                    return (
                            <Card.Grid key={index}>
                                <Link to="">
                                    <ProductImg src={item.img_src} alt="" />
                                    {item.material && <p>{item.material}</p>}
                                    {item.name && <h3>{item.name}</h3>}
                                    <ProductSize min={item.size_min} max={item.size_max} />
                                    <ColorSwatch color_imgs={item.colors} />
                                    <ProductPrice price={item.price} discount={item.discount} />
                                </Link>
                            </Card.Grid>
                    );
                })}
        </ItemImageListWrapper>
    );
};
export default ProductItemList;