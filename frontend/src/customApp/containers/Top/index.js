import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "./top.style";
import Notice from "../../containers/Top/notice";
import Feature from "../../components/top/feature";
import Shop from "../../components/top/shop";
import ImportantNotice from "../../components/top/importantNotice";

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
        <div className="top-content">
          <Notice notices={entity.notices} />
        </div>
        <div className="top-content">
          <div className="top-img">
            <a href="https://www.muji.com/jp/feature/mujiweek/180929/index.html">
              <img src={featureImage} alt="" id="feature-image" className="feature-image"/>
            </a>
          </div>
        </div>
        <Feature features={entity.features} />
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
