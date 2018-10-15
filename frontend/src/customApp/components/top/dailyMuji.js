import React from "react";
import DailyMujiWrapper from "./dailyMuji.style";
import IntlMessages from "../../../components/utility/intlMessages";
import { Link } from "react-router-dom";

const DailyMuji = props => {
  const { dailyMujis } = props;
  return (
    <DailyMujiWrapper>
        <div className="dailymuji-content-frame">
          <a href="https://www.muji.net/store/cmdty/section/T001011" className="dailymuji-content-a">
            <h2>
              <IntlMessages id="top.dailyMuji.title" />
            </h2>
            <div className="dailymuji-item-group">
              <ul>
                {dailyMujis &&
                  dailyMujis.map((item, i) => {
                    return (
                      <li key={i}>
                        <img src={item.img_src} alt="imges" key={i} className="img" />
                      </li>
                    );
                  })}
              </ul>
            </div>
            <span className="dailyMuji-frame-subtitle">
              <IntlMessages id="top.dailyMuji.subtitle" />
            </span>
          </a>
        </div>
    </DailyMujiWrapper>
  );
};
export default DailyMuji;
