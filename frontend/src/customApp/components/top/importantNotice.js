import React from "react";
import { Link } from "react-router-dom";
import Panel from "../panel/panel";
import IntlMessages from "../../../components/utility/intlMessages";
import ImportantNoticeWrapper from "./importantNotice.style";

const ImportantNotice = props => {
  const { importantNotices } = props;
  return (
    <ImportantNoticeWrapper>
      <Panel
        title={<IntlMessages id="top.importantNotice.title" />}
        link_title={<IntlMessages id="top.importantNotice.link_title" />}
        link_url="http://ryohin-keikaku.jp/news/important.html?area=main"
      >
        <ul>
          {importantNotices &&
            importantNotices.map(notice => {
              return (
                <li>
                  <time>{notice.date}</time>
                  <span>
                    <a href={notice.url}>{notice.message}</a>
                  </span>
                </li>
              );
            })}
        </ul>
      </Panel>
    </ImportantNoticeWrapper>
  );
};

export default ImportantNotice;
