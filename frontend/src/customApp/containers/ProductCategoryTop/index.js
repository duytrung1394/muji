import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/product_category_top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import ProductCategoryTopHeader from "../../components/productCategoryTop/header";
import ItemList from "../../components/productCategoryTop/itemList/itemList";
import ContentLayout from "../../components/panel/contentLayout"

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.category_code);
  }

  render() {
    const {
      // types
      entity,
      fetching
    } = this.props;

    return (
      <div>
        <ProductCategoryTopHeader title={entity.category_title} />
        <ContentLayout>
          <Spin spinning={fetching} size="large">
            <ItemList {...entity} />
          </Spin>
        </ContentLayout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.ProductCategoryTop.Entity.toJS();
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
