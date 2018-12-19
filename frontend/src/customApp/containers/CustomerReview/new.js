import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import ContentAreaLayout from "../../components/panel/contentLayout";
import styled from "styled-components";
import PostReview from "../../components/customerReview/new/postReview";
import ReviewTop from "../../components/customerReview/forms/reviewTop";

const ReviewLayout = styled(ContentAreaLayout)`
  width: 880px;
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
    this.props.fetchRequest(1);
  }
  render() {
    const { entity } = this.props;
    return (
      <ReviewLayout>
        <ReviewTop entity={entity} user={user} />
        <ReviewFormWrapper>
          <PostReview />
        </ReviewFormWrapper>
      </ReviewLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.getCustomerReview.getOneMock.request
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
