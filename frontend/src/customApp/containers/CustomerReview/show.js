import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { Spin ,Icon ,Rate} from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewDetailItem from "../../components/customerReview/list/reviewDetailItem";
import InfoList from "../../components/customerReview/list/infoList";
import ReviewButton from "../../components/customerReview/list/reviewButton";
import { Link } from "react-router-dom";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
  margin: 20px 0 0;
`;

const ListHeader = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
`;

const ReviewItemHeader = styled.div`
  position: relative;
`;

const ReviewHeaderData = styled.div`
  display: inline-block;
  padding-left: 10px;
`;

const ItemImg = styled.img`
  vertical-align: baseline;
`;

const ReviewTitle = styled.p`
  font-size: 14px;
  color: #333;
  margin:0;
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

const StarWrap = styled.span`
  color: #f60;
  position: relative;
  padding: 0;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
`;

const StarWrapper = styled(StarWrap)`
  & .ant-rate {
    color: #f60;
  }
`;

const Star = styled(Rate)`
  & .ant-rate-star {
    font-size: 14px;
  }
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
                <ReviewHeaderData>
                  <ReviewTitle>{customer_reviews[0].product}</ReviewTitle>
                  <StarWrapper>
                    <Star defaultValue={3.5} />
                  </StarWrapper>
                  <IntlMessages id="reviewDetail.totalStar"/>
                  <br/>
                  <span>3</span>
                  <IntlMessages id="reviewDetail.reviewTotal"/>
                </ReviewHeaderData>
                <RigthArrow type="right" />
              </ReviewItemHeader>
            </ListHeader>
            <InfoList />
            <ItemsList>
              {entity.customer_reviews &&
                entity.customer_reviews.map((item, index) => (
                  <ReviewDetailItem entity={item} key={index} />
                ))}
              <ReviewButton
                customerReviews={entity.customer_reviews}
                getCustomerReviewRequest={getCustomerReviewRequest}
              />
            </ItemsList>
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
