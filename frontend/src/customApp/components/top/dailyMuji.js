import React from "react";
import DailyMujiWrapper from "./dailyMuji.style";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

const srcs = [
  'https://www.muji.com/jp/img/store/top/basicitems_02.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_03.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_04.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_05aw.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_06.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_07.jpg',
  'https://www.muji.com/jp/img/store/top/basicitems_08.jpg',
];


const DailyMuji = () => {
  return (
    <DailyMujiWrapper>
      <a href="https://www.muji.net/store/cmdty/section/T001011">
        <h2>
          <IntlMessages id="top.dailyMuji.title" />
        </h2>
        <Row type="flex" justify="center" align="middle" className="dailymuji-item-group">
          {srcs.map((src, index) => {
            return (
              <Col key={index} className="dailymuji-item">
                <img
                  src={src}
                  alt="imges"
                />
              </Col>
            );
          })}
        </Row>
        <div className="dailyMuji-frame-subtitle">
          <IntlMessages id="top.dailyMuji.subtitle" />
        </div>
      </a>
    </DailyMujiWrapper>
  );
};
export default DailyMuji;
