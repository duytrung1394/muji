import React, { Component } from "react";
import { connect } from "react-redux";
//import actions from "../../redux/search/list/actions";
import { injectIntl } from "react-intl";
import { Spin } from "antd";
import { ContentAreaLayout } from "../../components/shared/panel/contentLayout";
//import SearchNavigationList from "../../components/search/tab";
//import SearchHeader from "../../components/search/header";
//import SearchOtherHeader from "../../components/search/otherHeader";
//import SearchItemImageList from "../../components/search/searchItemImageList";
//import PageRange from "../../components/search/pageRangeText";
import SearchEventList from "../../components/search/eventItemList";
import SearchServiceList from "../../components/search/serviceItemList";
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
    //props.fetchRequest({
    //   page: 1,
    // filters: JSON.stringify(props.filters || [])
    //});
  };
  // React.render
  render() {
    const { fetching } = this.props;
    //仮データ 店舗、読み物、サービスの検索結果
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
    //仮データ サービスの検索結果
    const searchServices = [
      {
        title: "コーヒーフロート",
        description: "7大アレルゲン：乳",
        price: 280,
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        title: "ブレンドコーヒーホット",
        description: "",
        price: 280,
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      }
    ];
    // 仮データ　イベントの検索結果
    const searchEvents = [
      {
        place: "天神大名",
        name: "はじめてのハンドドリップワークショップ",
        date: "2018/1/11",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        place: "アトレ目黒",
        name: "雪の結晶風コースターをつくろう",
        date: "2018/12/20",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        place: "みんなみの里",
        name: "冬至につくろう！かぼちゃの簡単カフェ風ランチプレート",
        date: "2018/12/22",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      },
      {
        place: "天神大名",
        name: "はじめてのハンドドリップワークショップ",
        date: "2018/1/11",
        img_src:
          "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
      }
    ];
    // 仮データ　検索ワード
    const keyword = "コーヒー";
    // 仮データ　検索結果件数
    const itemCount = 3;
    return (
      <ContentAreaLayout>
        <Spin spinning={false} size="large">
          <SearchEventList items={searchEvents} />
          <SearchServiceList items={searchServices} />
        </Spin>
      </ContentAreaLayout>
    );
  }
}
const mapStateToProps = state => {
  //return state.Search.List.toJS();
  return {};
};
const actionCreators = {
  //fetchRequest: actions.fetch.request
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
