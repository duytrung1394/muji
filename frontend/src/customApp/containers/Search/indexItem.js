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
import SearchProductList from "../../components/search/productItemList";
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
    // 仮データ　商品の検索結果
    const searchProducts = [
      {
        title: "紳士ウェア - シャツ",
        items: [
          {
            material: "オーガニックコットン",
            name: "ストレッチブロード形態安定シャツ",
            size_min: "S",
            size_max: "XL",
            colors: [
              "https://placehold.jp/34x34.png",
              "https://placehold.jp/34x34.png"
            ],
            price: 2990,
            discount: 2490,
            img_src:
              "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
          },
          {
            material: "オーガニックコットン",
            name: "ストレッチブロード形態安定シャツ",
            size_min: "S",
            size_max: "XL",
            colors: [
              "https://placehold.jp/34x34.png",
              "https://placehold.jp/34x34.png"
            ],
            price: 2990,
            discount: 2490,
            img_src:
              "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
          },
          {
            material: "オーガニックコットン",
            name: "ストレッチブロード形態安定シャツ",
            size_min: "S",
            size_max: "XL",
            colors: [
              "https://placehold.jp/34x34.png",
              "https://placehold.jp/34x34.png"
            ],
            price: 2990,
            img_src:
              "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
          },
          {
            material: "オーガニックコットン",
            name: "ストレッチブロード形態安定シャツ",
            size_min: "S",
            size_max: "XL",
            colors: [
              "https://placehold.jp/34x34.png",
              "https://placehold.jp/34x34.png"
            ],
            price: 2990,
            img_src:
              "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
          },
          {
            material: "オーガニックコットン",
            name: "ストレッチブロード形態安定シャツ",
            size_min: "S",
            size_max: "XL",
            colors: [
              "https://placehold.jp/34x34.png",
              "https://placehold.jp/34x34.png"
            ],
            price: 2990,
            img_src:
              "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
          }
        ]
      }
    ];
    // 仮データ　検索ワード
    const keyword = "シャツ";
    // 仮データ　検索結果件数
    const itemCount = 3;
    return (
      <ContentAreaLayout>
        <Spin spinning={false} size="large">
          <SearchProductList categories={searchProducts} />
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
