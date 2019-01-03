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

// TODO: get user data from backend
const user = {
  user_image: "https://www.muji.com/jp/store/review/img/avatar_default.png",
  user_name: "user name"
};

class Show extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.review_code);
  }

  isFirstFetching = () => {
    return !(this.props.entity && this.props.entity.comments && user);
  };

  render() {
    const { entity, fetching, destroying, fetchRequest } = this.props;

    if (entity) {
      return (
        <ContentAreaLayout>
          <Spin spinning={this.isFirstFetching()} size="large">
            <ContentLayout>
              <ListHeader entity={entity} />
              <ReviewDetailItems entity={entity} user={user} />
              <ReviewPageing />
              <Comment comments={entity.comments} fetchRequest={fetchRequest} />
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
