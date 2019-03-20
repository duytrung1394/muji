import React from "react";
import styled from "styled-components";
import { OutlineButton } from "../../shared/form/button";
import IntlMessages from "../../../../components/utility/intlMessages";

import icoCommentWhite from "../../../../image/product_detail/review/ico-comment-white.png";

const FooterWrapper = styled.div`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const FooterButton = styled.div`
  margin: 20px auto 0;

  &:first-child {
    margin-top: 30px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterButton>
        <OutlineButton>
          <IntlMessages id="productDetail.review.seeMore" />
        </OutlineButton>
      </FooterButton>
      <FooterButton>
        <OutlineButton reverse="true" color="#7f0119" icon={icoCommentWhite}>
          <IntlMessages id="productDetail.review.postReview" />
        </OutlineButton>
      </FooterButton>
    </FooterWrapper>
  );
};

export default Footer;
