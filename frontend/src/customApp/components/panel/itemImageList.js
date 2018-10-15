import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const ItemImageListWrapper = styled.div`
  .ant-card-grid {
    padding: 2px;
    box-shadow: none;
    width: 25%;
    img {
      width: 100%;
      transition: filter 0.2s ease;
      filter: brightness(0.85);
    }
    img:hover {
      filter: brightness(1);
    }
  }
  .ant-card-grid:hover {
    box-shadow: none;
  }
`;

const ItemImageList = props => {
  return (
    <ItemImageListWrapper>
      {props.items &&
        props.items.map((item, index) => {
          return (
            <Card.Grid key={index}>
              {item.title && <h3>{item.title}</h3>}
              <Link to="">
                <img src={item.img_src} alt="" />
              </Link>
              {item.description && <p>{item.description}</p>}
            </Card.Grid>
          );
        })}
    </ItemImageListWrapper>
  );
};

export default ItemImageList;
