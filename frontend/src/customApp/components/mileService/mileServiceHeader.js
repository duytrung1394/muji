import React from "react";
import styled from "styled-components";
import { Link } from "../../components/shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";

const LayoutHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 16px;
`;
const HeaderPreceding = styled.h1`
  font-size: 19px;
`;
const HeaderSpan = styled.span`
  white-space: nowrap;
  padding: 3px 0;
`;

const HistoryHeader = (props) => {
    return (
        <LayoutHeader>
            <HeaderPreceding>
                <IntlMessages id="mileService.page.title" />
            </HeaderPreceding>
            <Link to="/store/mileservice/history/previous">
                <HeaderSpan>
                    <IntlMessages id="mileService.page.link.previous" />
                </HeaderSpan>
            </Link>
        </LayoutHeader>
    );
};

export default HistoryHeader;
