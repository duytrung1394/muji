import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import { Spin, Icon } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewDetailItems from "../../components/customerReview/show/reviewDetailItems";
import CommentList from "../../components/customerReview/show/commentList";
import ListInfo from "../../components/customerReview/show/listInfo";
import ReviewPageing from "../../components/customerReview/show/reviewPaging";
import Notices from "../../components/customerReview/notices";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
  margin: 20px auto 0;
`;

const SeeMore = styled.div`
  text-align: center;
  color: #9e9e9e;
  font-size: 14px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const SeeMoreIcon = styled(Icon)`
  font-size: 12px;
`;

const PostComment = styled.div`
  position: relative;
`;

const StyledTextArea = styled.textarea`
  max-width: 650px;
  width: 90%;
  height: 40px;
  background-color: #f7f7f7;
  over-flow: scroll;
  border: none;
  padding: 10px 0 0 10px;
  resize: none;
  border-radius: 20px;
  .ant-input {
    &:focus {
      border-color: #fff;
    }
  }
`;

const PostButton = styled.button`
  font-size: 36px;
  position: absolute;
  top: 0;
  right: 5px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  color: #d8d8d8;
`;

const CommentForm = () => {
  return (
    <PostComment>
      <StyledTextArea placeholder="コメントする" />
      <PostButton>
        <Icon type="mail" />
      </PostButton>
    </PostComment>
  );
};

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

  seeMore = () => {
    console.log("click seeMore");
  };

  render() {
    const { entity, fetching, destroying, fetchRequest } = this.props;

    if (entity) {
      return (
        <ContentAreaLayout>
          <Spin spinning={this.isFirstFetching()} size="large">
            <ContentLayout>
              <ListInfo entity={entity} />
              <ReviewDetailItems entity={entity} user={user} />
              <ReviewPageing />
              <CommentList
                comments={entity.comments}
                fetchRequest={fetchRequest}
              />

              <SeeMore onClick={this.seeMore}>
                <SeeMoreIcon type="down" />
                <IntlMessages id="reviewDetail.seeMore" />
              </SeeMore>
              <CommentForm />
              <Notices />
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
