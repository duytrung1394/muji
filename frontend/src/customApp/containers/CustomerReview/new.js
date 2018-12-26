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
// TODO: get product data from backend
const product = {
  entity: {
    jancode: "4550002873684",
    name: "オレンジピールクランチチョコ"
  }
};

class New extends Component {
  componentDidMount() {
    this.props.initCleanup();
    this.props.initRequest();
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
  //TODO: inculude selected Product.Entity
  //return Object.assign(state.CustomerReview.Entity.toJS(), state.Product.Entity.toJS());
  return product;
};

const actionCreators = {
  initRequest: actions.init.request,
  initCleanup: actions.init.cleanup
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
