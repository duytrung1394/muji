import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import Title from "../../components/review/title";
import ListToolbar from "../../components/review/listToolbar";
import List from "../../components/review/list";
import Review from "../../components/review/review";

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
    this.props.fetchRequest("");
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
    console.log(entities.total_review_count);
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Title />
          <ListToolbar ToolbarItems={entities.total_review_count} />
          <List />
          <Review reviews={entities.reviews} />
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
};

const mapStateToProps = state => {
  return state.Review.List.toJS();
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
