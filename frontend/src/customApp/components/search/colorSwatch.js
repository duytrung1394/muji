import React from "react";
import styled from "styled-components";

const ColorSwatchWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  padding: 0 10px;

  li {
    width: auto;
    margin: 5px 0 0 0;
    padding: 0 4px 0 0;
    box-shadow: none;
    list-style: none;
  }
  li:nth-child(n + 5):last-child {
    display: block;
  }
  li:last-child {
    padding: 0;
  }
`;

const Mark = styled.span`
  display: block;
  position: relative;
  overflow: hidden;
  white-space: nowrap;

  img {
    width: 34px;
    height: 34px;
    padding: 2px;
    border-radius: 0;
    border: 1px solid rgba(255, 255, 255, 0);
    text-align: center;
  }
`;

const ColorSwatch = props => (
  <ColorSwatchWrapper>
    {props.color_imgs &&
      props.color_imgs.map((item, index) => {
        return (
          <li key={index}>
            <Mark>
              <img src={item} />
            </Mark>
          </li>
        );
      })}
  </ColorSwatchWrapper>
);

export default ColorSwatch;
