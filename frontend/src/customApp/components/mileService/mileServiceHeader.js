import React from "react";
import styled from "styled-components";
import { Link } from "../../components/shared/form/link";
import IntlMessages from "../../../components/utility/intlMessages";
import { Row, Col } from "antd";

const LayoutHeaderWrapper = styled(Row)`
  display: flex !important;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 16px;
`;
const HeaderPreceding = styled.h1`
  font-size: 19px;
`;
const CustomLink = styled(Link)`
  float: right;
  margin-top: 9px;
`;

const MileServiceHeader = props => {
  return (
    <LayoutHeaderWrapper>
      <Col span={12}>
        <HeaderPreceding>
          <IntlMessages id="mileService.page.title" />
        </HeaderPreceding>
      </Col>
      <Col span={12}>
        <CustomLink to="/store/mileservice/previous_year_history">
          <IntlMessages id="mileService.page.link.previous" />
        </CustomLink>
      </Col>
    </LayoutHeaderWrapper>
  );
};

export default MileServiceHeader;
