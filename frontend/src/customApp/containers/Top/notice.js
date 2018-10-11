import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import NoticeWrapper from "./notice.style"


const notice = props => {
  const { notices } = props;
  return (

     <NoticeWrapper> 
       <div className="noticeContents">
      <dl><dt><IntlMessages id="top.attributes.notices"/></dt>
        
          {
            notices && notices.map(notice => {
              return <a href="https://www.muji.net/store/cmdty/donation/0299671000000"  className="noticeContents-a"
              ><dd>{notice.title}</dd></a>
            })
          }
        
        </dl>
        </div>
        </NoticeWrapper>

  );
};

export default notice;
