import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import Notice from "../../components/top/notice";
import Feature from "../../components/top/feature";
import NewItem from "../../components/top/newItem";
import LimitedItem from "../../components/top/limitedItem";
import Shop from "../../components/top/shop";
import ImportantNotice from "../../components/top/importantNotice";
import DailyMuji from "../../components/top/dailyMuji";
import NetStore from "../../components/top/netStore";
import CategoryList from "../../components/top/categoryList";
import styled from "styled-components";
import {
  ContentAreaLayout,
  BaseContentLayout
} from "../../components/shared/panel/contentLayout";
import FromMuji from "../../components/top/fromMuji";

const ContentLayout = styled(BaseContentLayout)`
  text-align: center;

  img {
    width: 90%;
  }
`;

class Index extends Component {
  componentWillMount() {
    this.props.fetchRequest("");
  }

  render() {
    const {
      entity,
      fetching,
      getFromMujisRequest,
      gettingFromMujis
    } = this.props;
    const featureImage = entity.feature_image ? entity.feature_image : "";
    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <Notice notices={entity.notices} />
          <ContentLayout>
            <a href="https://www.muji.com/jp/feature/mujiweek/180929/index.html">
              <img src={featureImage} alt="" />
            </a>
          </ContentLayout>
          <Feature features={entity.features} />
          <NewItem newItems={entity.new_items} />
          <LimitedItem limitedItems={entity.limited_items} />
          <DailyMuji />
          <NetStore netStores={entity.net_services} />
          <CategoryList categoryList={entity.category_list} />
          <FromMuji
            fromMujis={entity.from_mujis}
            getFromMujisRequest={getFromMujisRequest}
            gettingFromMujis={gettingFromMujis}
          />
          <Shop />
          <ImportantNotice importantNotices={entity.important_notices} />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Top.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request,
  getFromMujisRequest: actions.getFromMujis.request
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
