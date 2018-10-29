import React, { Component } from "react";
import styled from "styled-components";

const IconsList = styled.ul`
  display: flex;
  padding: 0;
  margin: 110px 0 0 0;
`;

const Icon = styled.li`
  list-style: none;
  margin-right: 6px;
`;

const IconLink = styled.a`
  color: #333;
  opacity: 0.3;
`;

export const IconList = props => {
  const { imgsData } = props;
  return (
    <IconsList>
      {imgsData &&
        imgsData.map((imgData, index) => {
          return (
            <Icon key={index}>
              <IconLink>
                <img src={imgData} />
              </IconLink>
            </Icon>
          );
        })}
    </IconsList>
  );
};
