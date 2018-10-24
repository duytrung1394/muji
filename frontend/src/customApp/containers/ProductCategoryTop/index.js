import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/product_category_top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import styled from "styled-components";
import ProductCategoryTopHeader from "../../components/productCategoryTop/header";
import ItemListPanel from "../../components/productCategoryTop/itemList/itemListPanel";

const ProductCategoryTopWrapper = styled.div`
  margin: 0 10px;
`;

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
      <ProductCategoryTopWrapper>
        <Spin spinning={fetching} size="large">
          <ProductCategoryTopHeader title={entity.category_title} />
          <ItemListPanel {...entity} />
        </Spin>
      </ProductCategoryTopWrapper>
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
