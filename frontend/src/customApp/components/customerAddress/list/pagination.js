import React from "react";
import { Pagination as AntdPagination } from "antd";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const StyledPagination = styled(AntdPagination)`
  text-align: right;
  .ant-pagination-total-text {
    float: left;
  }
`;

const itemRender = (current, type, originalElement) => {
  if (type === "prev") {
    return (
      <a>
        <IntlMessages id="customerAddress.list.pagination.prev" />
      </a>
    );
  }
  if (type === "next") {
    return (
      <a>
        <IntlMessages id="customerAddress.list.pagination.next" />
      </a>
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
      <IntlMessages
        id="customerAddress.list.pagination.showTotal"
        values={{ total: total, from: range[0], to: range[1] }}
      />
    )}
    itemRender={itemRender}
    onChange={changeHandler}
  />
);

export default Pagination;
