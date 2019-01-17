import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import imgColor1 from "../../../image/cmdty/detail/img-color-1.png";
import imgColor2 from "../../../image/cmdty/detail/img-color-2.png";
import imgColor3 from "../../../image/cmdty/detail/img-color-3.png";
import imgColor4 from "../../../image/cmdty/detail/img-color-4.png";

const images = [
  { "src": imgColor1, "filename": "img-color-1.png", },
  { "src": imgColor2, "filename": "img-color-2.png", },
  { "src": imgColor3, "filename": "img-color-3.png", },
  { "src": imgColor4, "filename": "img-color-4.png", },
];

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

const Color = ({ select, colorList}) => {
  return (
    <div>
      <p>
        <IntlMessages id="productDetail.color" />
        <span>{colorList[select].title}</span>
      </p>
      <ColorItems>
        {colorList.map((color, index) => {
          const img = images.find(imgColor => imgColor.filename === color.img);
          return img ? 
          (
            <ColorItem key={index}>
              <ColorImg src={img.src} />
            </ColorItem>
          ) : null;
        })}
      </ColorItems>
    </div>
  );
};

export default Color;
