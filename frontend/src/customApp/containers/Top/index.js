import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "./top.style";
import Notice from "./notice";
import EcPanel from "../../components/panel/ecPanel";


// const items = [
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
//   {img_src: "https://www.muji.com/jp/img/store/panel/181003_ginza_640.png"},
// ];

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;
    const featureImage = entity.feature_image ? entity.feature_image : "";
    const items = entity.features ? entity.features : [];
    return (
      <TopWrapper>
        <Spin spinning={fetching}/>
        <div className="topContent">
          <Notice notices={entity.notices} />
        </div>
        <div className="topContent">
          <img src={featureImage} alt="" id="feature-image"/>
        </div>
        <EcPanel title="特集" link="" items={items}/>
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
