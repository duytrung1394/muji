import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "../../components/top/top.style";
import Notice from "../../components/top/notice";
import Feature from "../../components/top/feature";
import Shop from "../../components/top/shop";
import ImportantNotice from "../../components/top/importantNotice";
import styled from "styled-components";

const FeatureWrapper = styled.div`
  text-align: center;

  img {
    width: 90%;
    max-width: 1680px;   
  }
`

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
        <Notice notices={entity.notices} />

        <FeatureWrapper>
          <a href="https://www.muji.com/jp/feature/mujiweek/180929/index.html">
            <img src={featureImage} alt="" />
          </a>
        </FeatureWrapper>

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
