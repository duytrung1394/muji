import { connect } from "react-redux";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import { injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Spin } from "antd";
import { TabSlider, TabPanel } from "../../components/shared/tabSlider/tabSlider";
import actions from "../../redux/favorite/list/actions";
import FavoriteItem from "../../components/favorite/favoriteItem";
import IntlMessages from "../../../components/utility/intlMessages";
import React, { Component } from "react";
import styled from "styled-components";

const Title = styled.h1`
  line-height: 19px;
  width: 100%;
  color: rgb(0, 0, 0);
  font-size: 19px;
  letter-spacing: 0.25px;
  margin: 30px 0px 0px;
  padding: 0 50px;
`;

const tabList = [
  "favorite.tab.product",
  "favorite.tab.event",
  "favorite.tab.article"
];

const ItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;
`;

const DeliveryList = styled.div`
  margin-top: 20px;
  padding: 0 50px;
  text-align: right;
  font-size: 12px;
  font-weight: 600;

  a,
  a:hover,
  a:focus {
    color: rgb(96, 179, 250);
    text-decoration: none;
  }
`;

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }

  // React methods
  componentDidMount() {
    this.fetchRequest(this.props);
  }

  fetchRequest = props => {
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

  // React.render
  render() {
    const {
      // types
      total,
      entities,
      fetching,
      destroying,
      // react-router
      history
    } = this.props;

    return (
      <ContentAreaLayout>
        <Title>
          <IntlMessages id="favorite.name" />
        </Title>
        <Spin size="large" spinning={fetching}>
          <TabSlider tabList={tabList}>
          {entities.map((entity, index) => {
            return (
              <TabPanel key={index}>
                {index === 0 &&
                  <DeliveryList>
                    <Link to={"#"} draggable={false}>
                      <IntlMessages id="favorite.deriveryList" />
                    </Link>
                  </DeliveryList>}
                <ItemBox>
                  {entity.map((item, index) => {
                   return <FavoriteItem item={item} key={index} />;
                  })}
                </ItemBox>
              </TabPanel>);
          })}
          </TabSlider>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Favorite.List.toJS();
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

export default enhance(Index);
