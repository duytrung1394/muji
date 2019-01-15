import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/product_detail/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import ContentAreaLayout from "../../components/panel/contentLayout";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.jan_code);
  }

  render() {
    const {
      // types
      entity,
      fetching
    } = this.props;

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <div>商品詳細画面</div>
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.ProductDetail.Entity.toJS();
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
