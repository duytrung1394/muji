import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import IntlMessages from "../../../components/utility/intlMessages";

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BackLinkLayout = styled.div`
  margin: 15px 0;
  text-align: center;
  a {
    color: #333333;
    text-decoration: underline;
    :hover {
      color: #7f0019;
    }
  }
`;

const Complete = props => {
  let actionType = "new";
  if (props.location.state && props.location.state.actionType === "edit") {
    actionType = "edit";
  }
  return (
    <ContentAreaLayout>
      <BaseContentLayout>
        <Wrapper>
          <h1>
            {actionType === "new" ? (
              <IntlMessages id={`customerAddress.complete.new.title`} />
            ) : (
              <IntlMessages id={`customerAddress.complete.edit.title`} />
            )}
          </h1>
          {actionType === "new" ? (
            <p>
              <IntlMessages id={`customerAddress.complete.new.description`} />
              <br />
              <IntlMessages id={`customerAddress.complete.new.description2`} />
            </p>
          ) : (
            <p>
              <IntlMessages id={`customerAddress.complete.edit.description`} />
            </p>
          )}
          <BackLinkLayout>
            <Link to="/store/cust/address/list">
              <IntlMessages id="customerAddress.complete.backLink" />
            </Link>
          </BackLinkLayout>
        </Wrapper>
      </BaseContentLayout>
    </ContentAreaLayout>
  );
};

export default Complete;
