import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/search/list/actions";
import { injectIntl } from "react-intl";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import Table from "../../../components/uielements/table";
import { Spin } from "antd";
import ContentHeader from "../../components/shared/header/contentHeader";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
import SearchNavigationList from "../../components/search/tab";
import SearchHeader from "../../components/search/header";
import SearchItem from "../../components/search/slideitem";

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
    // ページングもケースバイケースなのでコンポーネント毎に実装する
    props.fetchRequest({
      page: 1,
      filters: JSON.stringify(props.filters || [])
    });
  };

  // React.render
  render() {
    const { entity, fetching } = this.props;

    //仮データ
    const searchItems = [{
      title : "タルトタタン1",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン2",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン3",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン4",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン5",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン6",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    },{
        title : "タルトタタン7",description : "MIJI HOTEL", img_src : "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
    }];

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <SearchHeader keyword="新宿" />
          <SearchNavigationList active="3" />
            <h1>3件中 1 〜 3件を表示</h1>
          <SearchItem searchItems={searchItems} />
        </Spin>
      </ContentAreaLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.Search.List.toJS();
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
