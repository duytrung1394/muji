import React from "react";
import styled from "styled-components";
import IntlMessages from "../../../../components/utility/intlMessages";

const Tags = styled.div`
  clear: both;
  font-size: 12px;
  height: 2em;

  position: absolute;
  top: 3%;
  left: 2%;
`;

const TagNew = styled.span`
  margin: 0 2px;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: #8b1a27;
  border: 1px solid #8b1a27;
  color: #fff;
`;

const TagSale = styled.span`
  margin: 0 2px;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #8b1a27;
  color: #8b1a27;
`;

const TagEarly = styled.span`
  margin: 0 2px;
  padding: 2px 5px;
  border-radius: 3px;
  background-color: #fff;
  border: 1px solid #999;
  color: #333;
`;

const tagElements = {
  new: (
    <TagNew key="new">
      <IntlMessages id="productCategoryTop.tag.new" />
    </TagNew>
  ),
  discount: (
    <TagSale key="sale">
      <IntlMessages id="productCategoryTop.tag.sale" />
    </TagSale>
  ),
  early: (
    <TagEarly key="early">
      <IntlMessages id="productCategoryTop.tag.early" />
    </TagEarly>
  )
};

const ItemTag = ({ tags, nostock }) => {
  return <Tags>{tags.map((tag, index) => tagElements[tag])}</Tags>;
};

export default ItemTag;
