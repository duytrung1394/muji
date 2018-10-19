import React from "react";
import NetStoreWrapper from "./netStore.style";
import IntlMessages from "../../../components/utility/intlMessages";
import { Card } from "antd";
import { Row, Col } from "antd";

const { Meta } = Card;

const NetStore = props => {
  const { netStores } = props;
  return (
    <NetStoreWrapper>
      <div className="net-store-frame">
        <a href="//www.muji.com">
          <h2>
            <IntlMessages id="top.net-store.title" />
          </h2>
          <div style={{ padding: '30px'}}>
          <Row gutter={16} type="flex" justify="center" align="small" className="dailymuji-item-group">
            {netStores &&
              netStores.map((item, index) => {
                return (
                  <Col key={index} className="dailymuji-item" span={4}>
                    <Card
                      hoverable
                      cover={<img alt="example" src={item.img_src}  />}
                      className="cards"
                      style={{ border: 'none'}}
                    >
                      <Meta
                        title={item.img_sub0}
                        className="cards-meta0"
                      />
                      <Meta
                        title={item.img_sub1}
                        className="cards-meta1"
                      />
                      <Meta
                        title={item.img_sub2}
                        description={item.img_note}
                        className="cards-meta2"
                      />
                    </Card>
                  </Col>
                );
              })}
          </Row>
          </div>
        </a>
      </div>
    </NetStoreWrapper>
  );
};
export default NetStore;
