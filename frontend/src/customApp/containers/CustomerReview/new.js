import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/entity/actions";
import { injectIntl } from "react-intl";
import styled from "styled-components";
import { Spin } from "antd";
import { ContentAreaLayout as BaseContentAreaLayout } from "../../components/panel/contentLayout";
import Form from "../../components/customerReview/new/form";
import ReviewTop from "../../components/customerReview/forms/reviewTop";

const ContentAreaLayout = styled(BaseContentAreaLayout)`
  max-width: 860px;
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
    return !(this.props.entity && user);
  };

  render() {
    const { entity } = this.props;
    return (
      <ContentAreaLayout>
        <Spin spinning={this.isFirstFetching()} size="large">
          <ReviewTop entity={entity} user={user} />
          <Form />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.CustomerReview.Entity);
  return state.CustomerReview.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.getReviewItem.request
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
