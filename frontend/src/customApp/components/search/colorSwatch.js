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

const colorImgList = {
  ローズ: "https://placehold.jp/34x34.png", //色名と色の画像がどう関連付いているのかは不明（確認中）
  ブルー: "https://placehold.jp/34x34.png"
};

const ColorSwatch = ({ colorNames }) => (
  <ColorSwatchWrapper>
    {colorNames.map((colorName, index) => {
      if (index < 4) {
        return (
          <li key={index}>
            <Mark>
              <img src={colorImgList[colorName]} />
            </Mark>
          </li>
        );
      } else if (index === 4) {
        return <span>他{colorNames.length}色</span>;
      } else {
        return null;
      }
    })}
  </ColorSwatchWrapper>
);

export default ColorSwatch;
