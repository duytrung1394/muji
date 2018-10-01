import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../redux/item/entity/actions";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import PageHeader from "../../../components/utility/pageHeader";
import { Row, Col, Button, Icon, Breadcrumb, Table, Divider} from "antd";

import styled from "styled-components";

const Label = styled.span`
  display: inline-block;
  margin-top: 5px;
  width: 200px;
`;
const Value = styled.span`
  display: inline-block;
`;

class ShowEntity extends Component {
  render() {
    const { entity } = this.props;

    return (
      <LayoutWrapper>
        <PageHeader>Item Detail</PageHeader>
        <div className="isoLayoutContent">
          <Row>
            <Col span={12}>
              <Breadcrumb>
                <Breadcrumb.Item>TOP</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">ベッド</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">収納ベッド</a></Breadcrumb.Item>
              </Breadcrumb>
              <img src="https://dummyimage.com/630" />
            </Col>
            <Col span={12}>
              <Row>
              <h2>{BED.name}</h2>
              </Row>
              <Row>
                <p>
                  収納スペースがたっぷりあるベッドです。限られた空間を有効に使えます。オプションの収納ベッド追加台を使えば長さ２１０ｃｍの布団でもご使用いただけます。※寝装品カバーは、ＳＳサイズの物をご使用ください。
                  ※収納ベッド本体とヘッドボードを同時購入し、組立てをご希望される場合、本体の組立（税込3,240円）とヘッドボードの組立（税込1,080円）と２つの組立て作業のお申込みが必要となります。
                </p>
                <div><p>税込 {BED.price} 円</p><p>商品番号 {BED.item_number}</p></div>
                <div><p>付帯作業</p></div>
                <div>
                <Button type="primary"> カートに追加 </Button>
                  <Icon style={{ fontSize: '16px', color: '#eb2f96' }} type="heart" theme="filled" />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <h3><Divider/>レビュー<Divider/></h3>
              <p>
                  <Icon style={{ fontSize: '16px', color: '#EBD751' }} type="star" theme="filled" />
                  <Icon style={{ fontSize: '16px', color: '#EBD751' }} type="star" theme="filled" />
                  <Icon style={{ fontSize: '16px', color: '#EBD751' }} type="star" theme="filled" />
                  <Icon style={{ fontSize: '16px', color: '#6B6D6C' }} type="star" theme="filled" />
                  <Icon style={{ fontSize: '16px', color: '#6B6D6C' }} type="star" theme="filled" />
                  <Divider/>
              </p>
              <Button>レビューを投稿する</Button>
            </Col>
            <Col span={12}>
            </Col>
          </Row>
        </div>
      </LayoutWrapper>
    );
  }
}

const { request, cleanup } = actions.fetch;

const mapStateToProps = state => {
  return state.Item.Entity.toJS();
};

export default connect(
  mapStateToProps,
  {
    request,
    cleanup,
    destroy: actions.destroy.request,
    destroyCleanup: actions.destroy.cleanup
  }
)(ShowEntity);

const BED = {
  name: "収納ベッド・スモール・ウォールナット材　幅８８．５×奥行２０１×高さ２７ｃｍ",
  price: "90,000",
  item_number: "9999999"
}