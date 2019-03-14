import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../redux/delivery/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../../components/shared/panel/contentLayout";
import Forms from "../../../components/delivery/add/forms";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 0;
`;

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;

    if (Object.keys(entity).length <= 0) {
      return null;
    }
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentLayout>
            <Title>
              <IntlMessages id="delivery.edit.title" />
            </Title>
            <Forms />
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Index);
