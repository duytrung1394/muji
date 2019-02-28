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
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.props.fetchRequest("");
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

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title>
            <IntlMessages id="delivery.add.title" />
          </Title>
          <Forms />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Delivery.Entity.toJS();
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
