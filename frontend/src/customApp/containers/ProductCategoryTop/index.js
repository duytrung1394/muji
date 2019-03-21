import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actions from "../../redux/product_category_top/entity/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import ContentHeader from "../../components/shared/header/contentHeader";
import Article from "../../components/shared/aticle/article";
import PopularityRanking from "../../components/productCategoryTop/popularityRanking";
import ItemList from "../../components/productCategoryTop/itemList/itemList";
import CategoryList from "../../components/productCategoryTop/categoryList/categoryList";
import ContentAreaLayout from "../../components/shared/panel/contentLayout";
import Campaign from "../../components/productCategoryTop/campaign";

class Index extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.section_code);
    this.setState({ currentCode: this.props.match.params.section_code });
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.match.params.section_code !==
      nextProps.match.params.section_code
    ) {
      this.props.fetchRequest(nextProps.match.params.section_code);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.section_code !==
      prevProps.match.params.section_code
    ) {
      this.top.scrollIntoView({ behavior: "smooth" });
    }
  }

  render() {
    const {
      // types
      entity,
      fetching
    } = this.props;

    return (
      <ContentAreaLayout>
        <a ref={ref => (this.top = ref)} />
        <Spin spinning={fetching} size="large">
          <ContentHeader title={entity.category_name} links={entity.links} />
          <Article article={entity.article} />
          <PopularityRanking rankings={entity.rankings} />
          <CategoryList innerCategories={entity.innerCategories} />
          <Campaign campaigns={entity.campaigns} />
          <ItemList {...entity} />
        </Spin>
      </ContentAreaLayout>
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
  const injectedWithRouter = withRouter(injected);
  return injectedWithRouter;
};

export default enhance(Index);
