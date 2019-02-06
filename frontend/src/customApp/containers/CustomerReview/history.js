import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import Title from "../../components/review/title";
import ListToolbar from "../../components/review/listToolbar";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    if (this.getEntityLength() <= 0) {
      this.props.fetchRequest("");
    }
  }

  seeMore = () => {
    this.props.fetchRequest({
      offset: this.getEntityLength(),
      length: 5
    });
  };

  getEntityLength = () => {
    return this.props.entities ? this.props.entities.length : 0;
  };

  isFirstFetching = () => {
    return this.getEntityLength() === 0;
  };

  hasMore = () => {
    return this.props.total > this.getEntityLength();
  };

  render() {
    const { entities, fetching, fetched, destroying } = this.props;

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title />
          <ListToolbar />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
};

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
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

export default enhance(History);
