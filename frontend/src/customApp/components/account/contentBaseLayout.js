import React, { Fragment } from "react";
import styled from "styled-components";

const WrapLayout = styled.div`
  background-color: #f2f2f2;
  margin-top: 30px;
  padding: 16px;
`;

const BaseLayout = styled.div`
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(88, 88, 88, 0.3);
  padding: 16px;
  :not(:first-child) {
    margin-top: 16px;
  }
`;

const ContentBaseLayout = props => {
  return (
    <WrapLayout>
      <BaseLayout>{props.children}</BaseLayout>
    </WrapLayout>
  );
};

export default ContentBaseLayout;