import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";
import ProductSize from "../../components/search/productSize";
import ColorSwatch from "../../components/search/colorSwatch";
import ProductPrice from "../../components/search/productPrice";

const ItemImageListWrapper = styled.div`
  width: 100%;
  overflow: auto;
  
  .ant-card-grid {
    width: calc((100% - 60px) / 4);
    max-width: 300px;
    margin: 10px 20px 20px 0;
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
`;

const ProductImg = styled.img`
  margin-bottom: 5px;
  border: solid 1px #f0f0f0;
  width: 100%;
  transition: filter 0.2s ease;
  filter: brightness(0.85);
`;

const ProductItemList = ({ productList }) => {
  return (
    <ItemImageListWrapper>
      {productList.map((item, index2) => {
        return (
          <Card.Grid key={index2}>
            <Link to="">
              <ProductImg src={item.image_url} alt="" />
              <p>{item.material}</p>
              <h3>{item.itemName}</h3>
              <ProductSize
                sizeList={item.jancodeChildList.map(child => child.size_code)}
              />
              <ColorSwatch
                colorNames={item.jancodeChildList.map(
                  child => child.stockPriorityItemColor
                )}
              />
              <ProductPrice priceList={item.price} />
            </Link>
          </Card.Grid>
        );
      })}
    </ItemImageListWrapper>
  );
};
export default ProductItemList;
