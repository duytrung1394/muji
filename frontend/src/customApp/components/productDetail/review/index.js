import React from "react";
import styled from "styled-components";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

const Base = styled.section`
  background-color: #f2f2f2;
  padding: 16px;
  margin-top: 24px;
`;

const Content = styled.div`
  box-shadow: rgba(153, 153, 153, 0.5) 0px 1px 3px 1px;
  padding: 20px;
  background-color: #fff;
  font-size: 12px;
`;

const Footer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Review = ({ entity }) => {
  return (
    <Base>
      <Content>
        <Header entity={entity} />
        <Main entity={entity} />
        <Footer entity={entity} />
      </Content>
    </Base>
  );
};

export default Review;
