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
import CategoryList from "../../components/top/categoryList";
import styled from "styled-components";
import ContentLayout from "../../components/panel/contentLayout"

const FeatureWrapper = styled.div`
  text-align: center;

  img {
    width: 90%;
  }
`;

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;
    const featureImage = entity.feature_image ? entity.feature_image : "";
    return (
      <ContentLayout>
        <Spin spinning={fetching} size="large">
          <Notice notices={entity.notices} />
          <FeatureWrapper>
            <a href="https://www.muji.com/jp/feature/mujiweek/180929/index.html">
              <img src={featureImage} alt="" />
            </a>
          </FeatureWrapper>
          <Feature features={entity.features} />
          <NewItem newItems={entity.new_items} />
          <LimitedItem limitedItems={entity.limited_items} />
          <CategoryList categoryList={entity.category_list} />
          <Shop />
          <ImportantNotice importantNotices={entity.important_notices} />
        </Spin>
      </ContentLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Top.Entity.toJS();
};

const actionCreators = {
  fetchRequest: actions.fetch.request
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
