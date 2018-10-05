import React from "react";
import { Link } from "react-router-dom";
import Panel from "../panel/panelWithTitle";
import IntlMessages from "../../../components/utility/intlMessages";
import InfoWrapper from "./info.style";

const Info = props => {
  const { infos } = props;
  return (
    <InfoWrapper>
      <Panel
        title={<IntlMessages id="top.info.title"/>}
        link_title={<IntlMessages id="top.info.link_title"/>}
        link_url="http://ryohin-keikaku.jp/news/important.html?area=main"
        >
        <ul>
        {infos.map(info => {
          return (
            <li>
              <time>{info.date}</time>
              <span><a href={info.url}>{info.message}</a></span>
            </li>
          );
        })}
        </ul>
      </Panel>
    </InfoWrapper>
  );
};

export default Info;
