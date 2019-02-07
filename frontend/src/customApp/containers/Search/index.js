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
import Counta from "../../components/search/counta";
import SearchStoreList from "../../components/search/storeItemList";

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
    const { fetching } = this.props;

    //仮データ 商品、読み物、サービスの検索結果
    const searchItems = [
      {
        title: "商品1",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "イベント1",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "商品2",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "読み物1",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "商品3",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "商品4",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "商品5",
        description: "MIJI HOTEL",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      }
    ];

    // 仮データ　店舗の検索結果
    const searchStores = [
      {
        title: "MUJI新宿",
        address: "東京都新宿区新宿3-15-3　新宿ピカデリー　B1～2F",
        number: "03-5367-2710",
        opening: "11:00〜21:00",
        holiday: ""
      },
      {
        title: "新宿",
        address: "東京都新宿区新宿3-17-1　いさみやビル　B1～3F",
        number: "03-3350-8271",
        opening: "11:00～21:00",
        holiday: ""
      },
      {
        title: "ルミネ新宿",
        address: "東京都新宿区新宿3-38-2　ルミネ新宿2　6Ｆ",
        number: "03-5325-5971",
        opening:
          "11:00～21:30 ※営業時間は平日11:00～21:30、土日祝日は10:30～21:30となります。",
        holiday: ""
      },
      {
        title: "ルミネ新宿",
        address: "東京都新宿区新宿3-38-2　ルミネ新宿2　6Ｆ",
        number: "03-5325-5971",
        opening:
          "11:00～21:30 ※営業時間は平日11:00～21:30、土日祝日は10:30～21:30となります。",
        holiday: ""
      }
    ];

    // 仮データ　検索ワード
    const keyword = "新宿";

    // 仮データ　検索結果件数
    const itemCount = 3;

    return (
      <ContentAreaLayout>
        <Spin spinning={fetching} size="large">
          <SearchHeader keyword={keyword} />
          <SearchNavigationList active={3} />
          <Counta total={itemCount} first={1} end={itemCount} />
          <SearchStoreList items={searchStores} />
          <SearchOtherHeader />
          <SearchItemImageList items={searchItems} />
          <SearchStoreList items={searchStores} />
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
