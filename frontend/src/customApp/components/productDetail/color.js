import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";

import imgColor1 from "../../../image/cmdty/detail/img-color-1.png";
import imgColor2 from "../../../image/cmdty/detail/img-color-2.png";
import imgColor3 from "../../../image/cmdty/detail/img-color-3.png";
import imgColor4 from "../../../image/cmdty/detail/img-color-4.png";

const images = [imgColor1, imgColor2, imgColor3, imgColor4];

const ColorItems = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ColorItem = styled.li`
  max-width: 70px;
  border: 2px solid #e5e5e5;
  cursor: pointer;
  margin-right: 10px;
`;

const ColorImg = styled.img`
  width: 100%;
  height: auto;
  padding: 2px;
`;

const Color = () => {
  return (
    <div>
      <p>
        <IntlMessages id="productDetail.color" />
        <span>ライトシルバーグレー</span>
      </p>
      <ColorItems>
        {images.map((img, index) => {
          return (
            <ColorItem key={index}>
              <ColorImg src={img} />
            </ColorItem>
          );
        })}
      </ColorItems>
    </div>
  );
};

export default Color;
