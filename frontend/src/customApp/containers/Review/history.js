import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/review/list/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import { Spin } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import Title from "../../components/review/title";
import ListToolbar from "../../components/review/listToolbar";
import List from "../../components/review/list";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

class History extends Component {
  componentDidMount() {
    this.props.fetchRequest();
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
    const { entities, fetching } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <ContentLayout>
            <Title />
            <ListToolbar
              totalReviews={
                <IntlMessages
                  id="review.totalReview"
                  values={{ num: <span>{entities.totalReviews}</span> }}
                />
              }
            />
            <List entities={entities} />
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Review.List.toJS();
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

export default enhance(History);
