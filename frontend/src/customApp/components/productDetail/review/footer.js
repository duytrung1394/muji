import React from "react";
import styled from "styled-components";
import { OutlineButton } from "../../shared/form/button";

import icoCommentWhite from "../../../../image/product_detail/review/ico-comment-white.png";

const FooterWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const FooterButton = styled.li`
  margin: 20px auto 0;

  &:first-child {
    margin-top: 30px;
  }
`;

const ReviewButton = styled(OutlineButton)`
  & span:before {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 8px;
    background: url(${icoCommentWhite}) no-repeat;
    background-size: contain;
    vertical-align: middle;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterButton>
        <OutlineButton>レビューをもっと見る</OutlineButton>
      </FooterButton>
      <FooterButton>
        <ReviewButton reverse="true" color="#7f0119">
          レビューを投稿する
        </ReviewButton>
      </FooterButton>
    </FooterWrapper>
  );
};

export default Footer;
