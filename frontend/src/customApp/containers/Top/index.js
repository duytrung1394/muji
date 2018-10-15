import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "./top.style";
import Notice from "../../components/notice/notice";
import Feature from "../../components/top/feature";
import NewItem from "../../components/top/newItem";
import LimitedItem from "../../components/top/limitedItem";
import Shop from "../../components/top/shop";
import ImportantNotice from "../../components/top/importantNotice";
import CategoryList from "../../components/top/categoryList";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;
    const featureImage = entity.feature_image ? entity.feature_image : "";
    return (
      <TopWrapper>
        <Spin spinning={fetching} size="large" />
        <div className="topContent">
          <Notice notices={entity.notices} />
        </div>
        <div className="topContent">
          <img src={featureImage} alt="" id="feature-image" />
        </div>
        <Feature features={entity.features} />
        <NewItem newItems={entity.new_items} />
        <LimitedItem limitedItems={entity.limited_items} />
        <CategoryList categoryList={entity.category_list} />
        <Shop />
        <ImportantNotice importantNotices={entity.important_notices} />
      </TopWrapper>
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
