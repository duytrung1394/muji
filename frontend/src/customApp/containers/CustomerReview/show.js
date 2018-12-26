import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewDetailItems from "../../components/customerReview/show/reviewDetailItems";
import Comment from "../../components/customerReview/show/comment";
import ListHeader from "../../components/customerReview/show/listHeader";
import ReviewPageing from "../../components/customerReview/show/reviewPaging";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
  margin: 20px 0 0;
`;

class Show extends Component {
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
    const {
      entity,
      fetching,
      destroying,
      fetchRequest
    } = this.props;

    if (entity.customer_reviews) {
      return (
        <ContentAreaLayout>
          <Spin spinning={fetching || destroying} size="large">
            <ContentLayout>
              <ListHeader reviewData={entity.customer_reviews[0]} />
              <ReviewDetailItems reviewData={entity.customer_reviews[0]} />
              <ReviewPageing />
              <Comment
                entities={entity.customer_reviews}
                fetchRequest={fetchRequest}
              />
            </ContentLayout>
          </Spin>
        </ContentAreaLayout>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
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

export default enhance(Show);
