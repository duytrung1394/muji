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
import ProductTagList from "../../components/search/productTagList";
import TopicList from "../../components/search/topicList";
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
    const topics = [
      {
        topicName: "婦人定番白シャツ",
        topicUrl: "",
        image_url: "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
      },
      {
        topicName: "商品1",
        topicUrl: "",
        image_url: "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
      },
      {
        topicName: "商品1",
        topicUrl: "",
        image_url: "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
      },
      {
        topicName: "商品1",
        topicUrl: "",
        image_url: "https://www.muji.com/jp/img/store/panel/s000051065_640.jpg"
      }
    ];
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
    const searchProducts = {
      searchTagResultList: [
        {
          itemCount: 10,
          tagName: "紳士ウェア - シャツ",
          searchResultProductList: [
            {
              material: "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
              itemName: "ストレッチブロード形態安定シャツ",
              hasNewIcon: true,
              hasReserveItemIcon: false,

              jancodeChildList: [
                {
                  size_code: 0, // S
                  stockPriorityItemColor: "ローズ" //https://placehold.jp/34x34.png},
                },
                {
                  size_code: 3, // XL?
                  stockPriorityItemColor: "ブルー" //https://placehold.jp/34x34.png},
                }
              ],
              price: [
                {
                  hasPrePrice: true,
                  cancelPrice: 2990,
                  viewPrice: 1990,
                  discountPrice: 990
                }
              ],
              image_url:
                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
            },
            {
              material: "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
              itemName: "ストレッチブロード形態安定シャツ",
              hasNewIcon: true,
              hasReserveItemIcon: false,

              jancodeChildList: [
                {
                  size_code: 0, // S
                  stockPriorityItemColor: "ローズ" //https://placehold.jp/34x34.png},
                }
              ],
              price: [
                {
                  hasPrePrice: false,
                  cancelPrice: 0,
                  viewPrice: 1990,
                  discountPrice: 990
                }
              ],
              image_url:
                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
            }
          ]
        },
        {
          itemCount: 1,
          tagName: "紳士ウェア - シャツ2",
          searchResultProductList: [
            {
              material: "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
              itemName: "ストレッチブロード形態安定シャツ",
              hasNewIcon: true,
              hasReserveItemIcon: false,

              jancodeChildList: [
                {
                  size_code: 0, // S
                  stockPriorityItemColor: "ローズ" //https://placehold.jp/34x34.png},
                },
                {
                  size_code: 3, // XL?
                  stockPriorityItemColor: "ブルー" //https://placehold.jp/34x34.png},
                }
              ],
              price: [
                {
                  hasPrePrice: true,
                  cancelPrice: 2990,
                  viewPrice: 1990,
                  discountPrice: 990
                }
              ],
              image_url:
                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
            },
            {
              material: "オーガニックコットン", // 見出しが入るらしいが詳細不明（確認中）
              itemName: "ストレッチブロード形態安定シャツ",
              hasNewIcon: true,
              hasReserveItemIcon: false,

              jancodeChildList: [
                {
                  size_code: 0, // S
                  stockPriorityItemColor: "ローズ" //https://placehold.jp/34x34.png},
                }
              ],
              price: [
                {
                  hasPrePrice: false,
                  cancelPrice: 0,
                  viewPrice: 1990,
                  discountPrice: 990
                }
              ],
              image_url:
                "//img.muji.net/passport/img/app/news/10129_20181016092503_6a41a18ba19658f227c11239e3836a39_D.jpg"
            }
          ]
        }
      ]
    };
    // 仮データ　検索ワード
    const keyword = "シャツ";
    // 仮データ　検索結果件数
    const itemCount = 3;
    return (
      <ContentAreaLayout>
        <Spin spinning={false} size="large">
          <TopicList topicList={topics} />
          <ProductTagList tags={searchProducts.searchTagResultList} />
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
