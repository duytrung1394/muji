import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewDetailItems from "../../components/customerReview/list/reviewDetailItems";
import Comment from "../../components/customerReview/list/comment";
import ListHeader from "../../components/customerReview/list/listHeader";
import ReviewPageing from "../../components/customerReview/list/reviewPaging";

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
    this.props.fetchRequest(this.props.match.params.item_code);
  }

  render() {
    const {
      entity,
      fetching,
      destroying,
      getCustomerReviewRequest
    } = this.props;

    console.log(this.props);

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching || destroying} size="large">
          <ContentLayout>
            <ListHeader />
            <ReviewDetailItems entity={entity} />
            <ReviewPageing />
            <Comment />
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  getCustomerReviewRequest: actions.getCustomerReview.request,
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
