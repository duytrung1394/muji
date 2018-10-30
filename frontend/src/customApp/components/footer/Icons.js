import React, { Component } from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: flex;
  padding: 0;
  margin: 110px 0 0 0;

  & > li {
    list-style: none;
    margin-right: 6px;

    & > a {
      opacity: 0.3;
    }
  }
`;

const srcs = [
  "https://img.muji.net/img/common/twitter-with-circle.svg",
  "https://img.muji.net/img/common/facebook-with-circle.svg",
  "https://img.muji.net/img/common/youtube-with-circle.svg",
  "https://img.muji.net/img/common/instagram-with-circle.svg"
];

export const Icons = () => {
  return (
    <StyledUl>
      {srcs.map((src, index) => {
        return (
          <li key={index}>
            <a href="">
              <img src={src} />
            </a>
          </li>
        );
      })}
    </StyledUl>
  );
};
