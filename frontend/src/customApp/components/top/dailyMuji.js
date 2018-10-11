import React from "react";
import DailyMujiWrapper from "./dailyMuji.style";

const DailyMuji = props => {
  const { title, items, caption } = props;
  return (
    <DailyMujiWrapper>
      <div className="dailyMuji-frame">
        <div className="dailyMuji-content-frame">
          <a href="">
            <h2>{title}</h2>
            <div className="dailyMuji-item-group">
              <ul>
                {items.map((item, i) => {
                  return (
                    <li key={i}>
                      <img src={item.img_src} alt="imges" key={i} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="dailyMuji-frame-caption">
              ネットストア限定 対象商品配送料無料
            </span>
          </a>
        </div>
      </div>
    </DailyMujiWrapper>
  );
};
export default DailyMuji;
