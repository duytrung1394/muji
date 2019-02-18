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
} from "../../components/shared/panel/contentLayout";
import ClippedItem from "../../components/customerReview/list/clippedItem";
import ClippedButton from "../../components/customerReview/list/clippedButton";
import Header from "../../components/customerReview/list/header";

const ContentLayout = styled(BaseContentLayout)`
  max-width: 748px;
`;

const StyledH1 = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

const ItemsList = styled.ul`
  list-style: none;
  padding: 0;
`;

class IndexClipped extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  componentDidMount() {
    if (this.getEntityLength() <= 0) {
      this.props.fetchRequest("");
    }
  }

  seeMore = () => {
    this.props.fetchRequest({
      offset: this.getEntityLength(),
      length: 5
    });
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

    return (
      <ContentAreaLayout>
        <ContentLayout>
          <Header
            title={
              <StyledH1>
                <IntlMessages id="customerReview.list.clippedTitle" />
              </StyledH1>
            }
            sort={[]}
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
                    <ClippedItem entity={entity} key={index} />
                  ))}
              </ItemsList>
            ) : null}
          </Spin>
        </ContentLayout>
        <ContentLayout>
          <Spin spinning={fetching && !this.isFirstFetching()} size="large">
            {this.hasMore() && <ClippedButton seeMore={this.seeMore} />}
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

export default enhance(IndexClipped);
