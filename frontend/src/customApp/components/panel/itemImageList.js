import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import styled from "styled-components";

const Grid = Card.Grid;

const ItemImageListWrapper = styled.div`
  .ant-card-grid {
    padding: 2px;
    box-shadow: none;
    width: 25%;
    img {
      width: 100%;
    }
  }
`;

const ItemImageList = props => {
  return (
    <ItemImageListWrapper>
      {props.items &&
        props.items.map(item => {
          return (
            <Grid>
              {item.title && <h3>{item.title}</h3>}
              <Link to="">
                <img src={item.img_src} alt="" />
              </Link>
              {item.description && <p>{item.description}</p>}
            </Grid>
          );
        })}
    </ItemImageListWrapper>
  );
};

export default ItemImageList;
