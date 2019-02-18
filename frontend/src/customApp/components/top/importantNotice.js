import React from "react";
import { Link } from "react-router-dom";
import ContentPanel from "../shared/panel/contentPanel";
import IntlMessages from "../../../components/utility/intlMessages";
import ImportantNoticeWrapper from "./importantNotice.style";

const ImportantNotice = props => {
  const { importantNotices } = props;
  return (
    <ContentPanel
      title={<IntlMessages id="top.importantNotice.title" />}
      link_title={<IntlMessages id="top.importantNotice.link_title" />}
      link_url="http://ryohin-keikaku.jp/news/important.html?area=main"
    >
      <ImportantNoticeWrapper>
        <ul>
          {importantNotices &&
            importantNotices.map((notice, index) => {
              return (
                <li key={index}>
                  <time>{notice.date}</time>
                  <span>
                    <a href={notice.url}>{notice.message}</a>
                  </span>
                </li>
              );
            })}
        </ul>
      </ImportantNoticeWrapper>
    </ContentPanel>
  );
};

export default ImportantNotice;
