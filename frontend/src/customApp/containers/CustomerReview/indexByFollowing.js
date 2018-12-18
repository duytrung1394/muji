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
import FollwingItem from "../../components/customerReview/list/followingItem";
import FollowingHeader from "../../components/customerReview/list/followingHeader";
import FollowingButton from "../../components/customerReview/list/followingButton";
import { parse } from "query-string";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

const StyledH1 = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin: 50px 0 20px 0;
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
    console.log(this.props);
    const { entities, fetching, fetched, destroying } = this.props;
    const profile = [];
    return (
      <ContentAreaLayout>
        <ContentLayout>
          <FollowingHeader
            title={
              <StyledH1>
                <IntlMessages id="customerReview.list.followingTitle" />
              </StyledH1>
            }
          />
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
                    <FollwingItem entity={entity} key={index} />
                  ))}
              </ItemsList>
            ) : null}
          </Spin>
        </ContentLayout>
        <ContentLayout>
          <Spin spinning={fetching && !this.isFirstFetching()} size="large">
            {this.hasMore() && <FollowingButton seeMore={this.seeMore} />}
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
  fetchRequest: actions.fetchByUser.request,
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
