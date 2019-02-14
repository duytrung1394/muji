import React, { Component } from "react";
import IntlMessages from "../../../../components/utility/intlMessages";
import styled from "styled-components";
import imgColor1 from "../../../../image/cmdty/detail/img-color-1.png";
import imgColor2 from "../../../../image/cmdty/detail/img-color-2.png";
import imgColor3 from "../../../../image/cmdty/detail/img-color-3.png";
import imgColor4 from "../../../../image/cmdty/detail/img-color-4.png";

const images = [
  { src: imgColor1, filename: "img-color-1.png" },
  { src: imgColor2, filename: "img-color-2.png" },
  { src: imgColor3, filename: "img-color-3.png" },
  { src: imgColor4, filename: "img-color-4.png" }
];

const ColorItems = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const ColorItem = styled.li`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;

const ColorInput = styled.input`
  display: none;

  &:checked + label {
    border: 2px solid #333;
  }
`;

const ColorLabel = styled.label`
  padding: 3px;
  display: block;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  border: 2px solid #e5e5e5;
`;

const ColorImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Color = props => {
  const { colorList, currentColor, colorChange, select } = props;

  return (
    <div>
      <p>
        <IntlMessages id="productDetail.color" />
        <span>{colorList[select].title}</span>
      </p>
      <ColorItems>
        {colorList.map((color, index) => {
          const img = images.find(imgColor => imgColor.filename === color.img);
          return img ? (
            <ColorItem key={index}>
              <ColorInput
                type="radio"
                id={color.title}
                name="color"
                value={color.title}
                checked={currentColor === color.title}
                onChange={() => colorChange(color.title)}
              />
              <ColorLabel htmlFor={color.title}>
                <ColorImage src={img.src} />
              </ColorLabel>
            </ColorItem>
          ) : null;
        })}
      </ColorItems>
    </div>
  );
};

export default Color;
