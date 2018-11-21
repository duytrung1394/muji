import React from "react";
import { Pagination as AntdPagination } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledPagination = styled(AntdPagination)`
  text-align: right;
  .ant-pagination-total-text {
    float: left;
    padding-left: 15px;
    font-size: 14px;
  }
  &.ant-pagination {
    margin-top: 15px;
  }
`;

const ItemRenderA = styled.a`
  padding-right: 15px;
`;

const NumSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  span {
    margin-right: 5px;
  }
`;

const MatterSpan = styled.span`
  font-size: 11px;
  span {
    margin-right: 5px;
  }
`;

const itemRender = (current, type, originalElement) => {
  if (type === "prev") {
    return (
      <ItemRenderA>
        <IntlMessages id="customerAddress.list.pagination.prev" />
      </ItemRenderA>
    );
  }
  if (type === "next") {
    return (
      <ItemRenderA>
        <IntlMessages id="customerAddress.list.pagination.next" />
      </ItemRenderA>
    );
  }
  return originalElement;
};

const Pagination = ({ total, current, changeHandler }) => (
  <StyledPagination
    size="small"
    total={total}
    current={current}
    showTotal={(total, range) => (
      <span>
        <NumSpan>
          <IntlMessages
            id="customerAddress.list.pagination.showTotal"
            values={{ total: total }}
          />
        </NumSpan>
        <MatterSpan>
          <IntlMessages id="customerAddress.list.pagination.showOf" />
        </MatterSpan>
        <NumSpan>
          <IntlMessages
            id="customerAddress.list.pagination.showFrom"
            values={{ from: range[0], to: range[1] }}
          />
        </NumSpan>
        <MatterSpan>
          <IntlMessages id="customerAddress.list.pagination.showMatter" />
        </MatterSpan>
      </span>
    )}
    itemRender={itemRender}
    onChange={changeHandler}
  />
);

export default Pagination;
