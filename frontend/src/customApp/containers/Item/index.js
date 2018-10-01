import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../redux/item/list/actions";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";

class Index extends Component {
  render() {
    return (
      <LayoutWrapper>
        <PageHeader>Item Title</PageHeader>
        <div className="isoLayoutContent">
          <Row>
            <Col span={12}>
              <h2>約120品目の家具の価格を見直しました。</h2>
              <p>
                収納用品やユニットシェルフ、収納ベッドなどの価格を見直しました。生産工程を点検し、品質はそのままにさらにお求めやすい価格を実現しています
              </p>
            </Col>
            <Col span={12}>
              <img src="https://dummyimage.com/630" />
            </Col>
          </Row>
        </div>
        <div className="isoLayoutContent">
          <Row>
            {BEDS.map(bed => (
              <Col span={6}>
                <Card
                  title={bed.name}
                  style={{ width: 300 }}
                >
                  <img src={bed.image_url} />
                  <p>税込み {bed.price} 円</p>
                  <Link to={"/dashboard/items/" + bed.id}>商品詳細</Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </LayoutWrapper>
    );
  }
}

const mapStateToProps = state => {
  return state.Item.List.toJS();
};

const { fetch, destroy, setFilters } = actions;

export default withRouter(
  connect(
    mapStateToProps,
    {
      setFilters: setFilters,
      fetchRequest: fetch.request,
      destroyRequest: destroy.request,
      destroyCleanup: destroy.cleanup
    }
  )(Index)
);

const BEDS = [
  {
    id: 1,
    image_url: "https://dummyimage.com/250",
    name: "収納ベッド・スモール・ウォールナット材",
    price: "32,900"
  },
  {
    id: 2,
    image_url: "https://dummyimage.com/250",
    name: "収納ベッド・シングル・ウォールナット材",
    price: "34,900"
  },
  {
    id: 3,
    image_url: "https://dummyimage.com/250",
    name: "収納ベッド・セミダブル・ウォールナット材",
    price: "39,900"
  },
  {
    id: 4,
    image_url: "https://dummyimage.com/250",
    name: "収納ベッド・ダブル・ウォールナット材",
    price: "44,900"
  }
];
