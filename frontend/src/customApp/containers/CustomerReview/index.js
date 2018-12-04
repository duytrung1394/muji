import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import IntlMessages from "../../../components/utility/intlMessages";
import { Spin } from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ReviewItem from "../../components/customerReview/list/reviewItem";
import SubList from "../../components/customerReview/list/subList";
import ReviewButton from "../../components/customerReview/list/reviewButton";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
  margin: 20px 0 0;
`;

const ListHeader = styled.div`
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

class Index extends Component {
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

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching || destroying} size="large">
          <ContentLayout>
            <ListHeader>
              <h1>
                <IntlMessages id="customerReview.list.title" />
              </h1>
              <SubList />
            </ListHeader>
            <ItemsList>
              {entity.customer_reviews &&
                entity.customer_reviews.map((item, index) => (
                  <ReviewItem entity={item} key={index} />
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

export default enhance(Index);
