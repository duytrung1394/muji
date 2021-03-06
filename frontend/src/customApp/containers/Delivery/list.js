import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/delivery/list/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import IntlMessages from "../../../components/utility/intlMessages";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import { Spin } from "antd";
import Header from "../../components/delivery/header";
import AddressList from "../../components/delivery/addressList";
import { OutlineButton } from "../../../customApp/components/shared/form/button";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 700px;
`;

const ButtonArea = styled.div`
  margin: 30px auto;
  text-align: center;
`;

class Index extends Component {
  // React methods
  componentDidMount() {
    this.props.fetchRequest();
  }

  // React.render
  render() {
    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    if (entities.length <= 0) {
      return null;
    }
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentLayout>
            <Header />
            <AddressList entities={entities} />
            <ButtonArea>
              <OutlineButton color="rgb(153, 153, 153)">
                <IntlMessages id="delivery.list.add" />
              </OutlineButton>
            </ButtonArea>
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  destroyRequest: actions.destroy.request,
  destroyCleanup: actions.destroy.cleanup
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
