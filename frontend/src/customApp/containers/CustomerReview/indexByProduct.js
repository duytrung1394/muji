import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/customer_review/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/panel/contentLayout";
import ProductReviewHeader from "../../components/customerReview/indexByProduct/productReviewHeader";
import ProductReviewItem from "../../components/customerReview/indexByProduct/item";
import ReviewButton from "../../components/customerReview/list/reviewButton";
import { parse } from "query-string";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
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
    this.props.fetchRequest(this.getFetchRequestParams());
  }

  seeMore = () => {
    this.props.fetchRequest(this.getFetchRequestParams());
  };

  getFetchRequestParams = () => {
    return {
      ...parse(this.props.location.search),
      offset: this.getEntityLength(),
      length: 5
    };
  };

  getEntityLength = () => {
    return this.props.entities ? this.props.entities.length : 0;
  };

  isFirstFetching = () => {
    return this.getEntityLength() === 0;
  };

  hasMore = () => {
    return this.props.total > this.getEntityLength();
  };

  render() {
    const { entities, fetching, fetched, destroying } = this.props;
    const profile = [];
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <ProductReviewHeader profile={profile} />
        </ContentLayout>
        <ContentLayout>
          <Spin
            spinning={(fetching && this.isFirstFetching()) || destroying}
            size="large"
          >
            {fetched || !this.isFirstFetching() ? (
              <ItemsList>
                {entities &&
                  entities.map((entity, index) => (
                    <ProductReviewItem entity={entity} key={index} />
                  ))}
              </ItemsList>
            ) : null}
          </Spin>
        </ContentLayout>
        <ContentLayout>
          <Spin spinning={fetching && !this.isFirstFetching()} size="large">
            {this.hasMore() && <ReviewButton seeMore={this.seeMore} />}
          </Spin>
        </ContentLayout>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.CustomerReview.List.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetchByItem.request,
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
