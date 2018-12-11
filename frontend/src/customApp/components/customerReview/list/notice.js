import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const NoticeList = styled.div`
  text-align: left;
  margin: 20px 0 40px;
`;

const Notice = styled.span`
  font-size: 14px;
`;

const Notices =()=>{
    return(
        <NoticeList>
            <Notice>
                <IntlMessages id="reviewPost.notice1Front" />
                <Link to={"/"}>
                <IntlMessages id="reviewPost.noticeLink" />
                </Link>
                <IntlMessages id="reviewPost.notice1Back" />
            </Notice>
            <br />
            <Notice>
                <IntlMessages id="reviewPost.notice2" />
            </Notice>
            <br />
            <Notice>
                <IntlMessages id="reviewPost.notice3" />
            </Notice>
        </NoticeList>
    )
}

export default Notices;