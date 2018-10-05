import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "./top.style";
import Notice from "../../components/notice/notice";
import Feature from "../../components/top/feature";
import Shop from "../../components/top/shop";
import Info from "../../components/top/info";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;
    const featureImage = entity.feature_image ? entity.feature_image : "";
    const items = entity.features ? entity.features : [];
    const infos = entity.infos ? entity.infos : [];
    return (
      <TopWrapper>
        <Spin spinning={fetching} size="large"/>
        <div className="topContent">
          <Notice notices={entity.notices} />
        </div>
        <div className="topContent">
          <img src={featureImage} alt="" id="feature-image"/>
        </div>
        <Feature features={items}/>
        <Shop />
        <Info infos={infos}/>
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

const enhance = (C) => {
  const connected = connect(mapStateToProps, actionCreators)(C);
  const injected = injectIntl(connected, {withRef: true})
  return injected
}

export default enhance(Index);
