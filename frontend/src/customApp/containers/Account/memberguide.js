import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/account/list/actions";
import styled from "styled-components";
import { Spin } from "antd";
import { injectIntl } from "react-intl";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import ContentsWrapper from "../../components/account/memberguide/contentsWrapper";
import Contents from "../../components/account/memberguide/contents";

const AreaLayout = styled(ContentAreaLayout)`
  max-width: 732px;
`;

const LoadingSpin = styled.div`
  text-align: center;
  padding: 30px 50px;
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entities } = this.props;

    if (entities.length <= 0) {
      return (
        <LoadingSpin>
          <Spin size="large" />
        </LoadingSpin>
      );
    }

    return (
      <AreaLayout>
        <BaseContentLayout>
          <ContentsWrapper>
            <Contents entities={entities} />
          </ContentsWrapper>
        </BaseContentLayout>
      </AreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Account.List.toJS();
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
