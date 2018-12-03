import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
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

const BASE_URL = "/store/review/history";

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
    this.props.fetchRequest({ page: this.getPage(this.props) });
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;

    if (this.getPage(prevProps) !== this.getPage(props)) {
      props.fetchRequest({ page: this.getPage(props) });
    }

    if (props.destroyed) {
      props.destroyCleanup();
      props.fetchRequest({ page: this.getPage(props) });
    }
  }

  getPage = props => {
    return parseInt(props.match.params.page, 10) || 1;
  };

  seeMore = page => {
    let url;

    if (page === 1) {
      url = `${BASE_URL}`;
    } else {
      url = `${BASE_URL}/page/${page}`;
    }
    this.props.history.push(url);
  };

  render() {
    const {
      entities,
      fetching,
      destroying,
      getCustomerReviewRequest,
      gettingCustomerReview
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
              {entities.customer_reviews &&
                entities.customer_reviews.map((item, index) => (
                  <ReviewItem entity={item} key={index} />
                ))}
            </ItemsList>
            <Spin spinning={gettingCustomerReview} size="large">
              {entities.isShowSeeMore && (
                <ReviewButton
                  seeMore={() => this.seeMore(this.getPage(this.props) + 1)}
                />
              )}
            </Spin>
          </ContentLayout>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
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
  const injectedWithRouter = withRouter(injected);
  return injectedWithRouter;
};

export default enhance(Index);
