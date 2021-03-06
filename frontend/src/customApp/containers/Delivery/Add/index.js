import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../redux/delivery/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../../components/shared/panel/contentLayout";
import Forms from "../../../components/delivery/forms/forms";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 0;
`;

const entity = {
  customerCode: "",
  naming: "",
  name: "",
  nameKana: "",
  zipCode: "",
  address1: "",
  address2: "",
  address3: "",
  address4: "",
  telNo: ""
};

class Index extends Component {
  render() {
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="delivery.add.title" />
          </Title>
          <Forms entity={entity} />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.Entity.toJS();
};

const actionCreators = {};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
