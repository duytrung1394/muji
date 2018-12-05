import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import { Spin ,Icon} from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewDetailItem from "../../components/customerReview/list/reviewDetailItem";
import { Link } from "react-router-dom";
import Notices from "./notice";
import Comment from "./comment";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
  margin: 20px 0 0;
`;

const ListHeader = styled.div`
  margin: 30px 0;
  font-size: 12px;
`;

const ReviewItemHeader = styled.div`
  position: relative;
`;

const ItemImg = styled.img`
  margin-right:10px;
`;

const ReviewTitle = styled.span`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const RigthArrow = styled(Icon)`
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 35%;
  right: 0;
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinkStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  zIndex: "10"
};

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
      getCustomerReviewRequest
    } = this.props;

    if (entity.user && entity.customer_reviews) {
    //   const { user, customer_reviews } = props.entity;
    const { customer_reviews } = entity;
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching || destroying} size="large">
          <ContentLayout>
            <ListHeader>
              <ReviewItemHeader>
                <Link to={``} style={LinkStyle} />
                <ItemImg
                  src={`https://img.muji.net/img/item/${customer_reviews[0].jancode}_180.jpg`}
                  alt="itemImage"
                  width="60"
                  height="60"
                />
                <ReviewTitle>{customer_reviews[0].product}</ReviewTitle>
                <RigthArrow type="right" />
              </ReviewItemHeader>
            </ListHeader>
            <ItemsList>
              <ReviewDetailItem entity={customer_reviews[0]} /> 
            </ItemsList>
            <Comment />
            <Notices />
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
    } return null;
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

const { request, cleanup } = actions.fetch;

const enhance = C => {
  const connected = connect(
    mapStateToProps,
    actionCreators
  )(C);
  const injected = injectIntl(connected, { withRef: true });
  return injected;
};

export default enhance(Show);
