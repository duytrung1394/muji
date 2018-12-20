import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Spin } from "antd";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import PostReview from "../../components/customerReview/new/postReview";
import ReviewTop from "../../components/customerReview/forms/reviewTop";

const ContentLayout = styled(BaseContentLayout)`
  width: 800px;
`;

const ReviewFormWrapper = styled.div`
  padding: 30px 50px;
  text-align: center;
  margin-bottom: 70px;
  background-color: #f7f7f7;
`;

// TODO: get user data from backend
const user = {
  user_image: "https://www.muji.com/jp/store/review/img/avatar_default.png",
  user_name: "user name"
};

class New extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.item_code);
  }

  isFirstFetching = () => {
    return !(this.props.entity.review_item && user);
  };

  render() {
    const { entity, gettingReviewItem } = this.props;
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Spin
            spinning={gettingReviewItem && this.isFirstFetching()}
            size="large"
          >
            <ReviewTop entity={entity} user={user} />
            <ReviewFormWrapper>
              <PostReview />
            </ReviewFormWrapper>
          </Spin>
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.getCustomerReview.getReviewItem.request
};

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(New);
