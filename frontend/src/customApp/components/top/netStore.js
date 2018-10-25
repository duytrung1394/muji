import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import { Card } from "antd";
import { Row, Col } from "antd";
import {
  NetStoreWrapper,
  StyledTitle,
  StyledServiceTitle,
  StyledService
} from "./netStore.style";

const services = [
  {
    src: 'https://www.muji.com/jp/store/service/img/service_deliveryvan.png',
    title: (
      <StyledServiceTitle>
        <span>一定額以上の</span>
        <span>お買い上げで</span>
        <span className="emphasis">配送料無料</span>
      </StyledServiceTitle>
    ),
    description: '小型商品は税込5,000円以上、大型家具・家電は税込150,000以上で、配送料無料',
  },
  {
    src: 'https://www.muji.com/jp/store/service/img/service_storage.png',
    title: (
      <StyledServiceTitle>
        <span>ポリプロピレン</span>
        <span>衣装ケースなど</span>
        <span className="emphasis">配送料無料</span>
      </StyledServiceTitle>
    ),
    description: '対象商品が配送料無料になりました',
  },
  {
    src: 'https://www.muji.com/jp/store/service/img/service_deliveryvan02.png',
    title: (
      <StyledServiceTitle>
        <span className="emphasis">小型商品の</span>
        <span className="emphasis">配送料490円</span>
      </StyledServiceTitle>
    ),
    description: '配送料区分Aの商品の配送料が490円になりました',
  },
  {
    src: 'https://www.muji.com/jp/store/service/img/service_box.png',
    title: (
      <StyledServiceTitle>
        <span className="emphasis">えらべる</span>
        <span className="emphasis">受取方法</span>
      </StyledServiceTitle>
    ),
    description: 'ご自宅への配送以外にも、店舗受取や、コンビニ受取をご利用いただけます',
  },
  {
    src: 'https://www.muji.com/jp/store/service/img/service_shirt_s.png',
    title: (
      <StyledServiceTitle>
        <span className="emphasis">XS・XXL</span>
        <span className="emphasis">サイズ</span>
      </StyledServiceTitle>
    ),
    description: '店舗からのお取り寄せや、店舗受取も可能です',
  },
  {
    src: 'https://www.muji.com/jp/store/service/img/service_hanger_s.png',
    title: (
      <StyledServiceTitle>
        <span className="emphasis">まとめ買い</span>
      </StyledServiceTitle>
    ),
    description: 'ケースでお届けするから5%お得',
  },
];

const Title = ({ id }) => {
  return (
    <StyledTitle>
      <IntlMessages id={id} />
    </StyledTitle>
  );
};

const Service = ({ service, key }) => {
  return (
    <StyledService key={key} span={4}>
      <Card
        cover={<img alt="" src={service.src} />}
        style={{ border: "none" }}
      >
        <Card.Meta
          title={service.title}
          description={(<p>{ service.description }</p>)}
        />
      </Card>
    </StyledService>
  );
};

const NetStore = () => {
  return (
    <NetStoreWrapper>
      <a href="">
        <Title id="top.net-store.title" />
        <Row
          type="flex"
          justify="space-around"
        >
          {services.map((service, index) => {
            return (
              <Service
                key={index}
                service={service}
              />
            );
          })}
        </Row>
      </a>
    </NetStoreWrapper>
  );
};

export default NetStore;
