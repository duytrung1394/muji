import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/search/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import SearchNavigationList from "../../components/search/tab";
import SearchHeader from "../../components/search/header";
import SearchOtherHeader from "../../components/search/otherHeader";
import SearchItemImageList from "../../components/search/searchItemImageList";
import PageRangeText from "../../components/search/pageRangeText";
import ArticleCategoryList from "../../components/search/articleCategoryList";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    };
  }
  // React methods
  componentDidMount() {
    this.fetchRequest(this.props);
  }
  fetchRequest = props => {
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || []),
      keyword: "コーヒー"
    });
  };
  // React.render
  render() {
    const { entities, total, fetching } = this.props;

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <SearchHeader keyword={entities.keyword} />
          <SearchNavigationList active={1} />
          <PageRangeText total={total} first={1} end={total} />
          <ArticleCategoryList categories={entities.searchArticleCategories} />
          <SearchOtherHeader title="item" />
          <SearchItemImageList items={entities.searchOtherResults} />
          <ArticleCategoryList categories={entities.searchArticleCategories} />
        </Spin>
      </ContentAreaLayout>
    );
  }
}
const mapStateToProps = state => {
  return state.Search.List.toJS();
};
const actionCreators = {
  fetchRequest: actions.fetchArticle.request
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
