import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import TopWrapper from "./top.style";
import Notice from "./notice";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest("");
  }

  render() {
    const { entity, fetching } = this.props;

    return (
      <TopWrapper>
        <Spin spinning={fetching}/>
        <div className="topContent">
          <Notice notices={entity.notices} />
        </div>
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
