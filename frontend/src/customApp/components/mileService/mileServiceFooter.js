import React from "react";
import styled from "styled-components";
import { Link } from "../../components/shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";

const ParagraphAbout = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 30px;
  padding: 0 16px;
  font-size: 13px;
`;

const HistoryFooter = props => {
  return (
    <ParagraphAbout>
      <Link to="/store/mileservice/shoppingpoint_history">
        <IntlMessages id="mileService.page.link.shoppingpoint" />
      </Link>
    </ParagraphAbout>
  );
};

export default HistoryFooter;
