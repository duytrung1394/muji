import React from "react";
import styled from "styled-components";
import ItemView from "../../components/productCategoryTop/itemList/itemView";

const ItemImageListWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  div.ant-col-xs-10 {
    width: calc((100% - 90px) / 4);
    margin: 10px 30px 20px 0;
  }
  div.ant-col-xs-10:nth-child(4n) {
    margin-right: 0;
  }
`;

const sizeLabels = { 0: "S", 1: "M", 2: "L", 3: "XL" };

const ProductItemList = ({ productList }) => {
  return (
    <ItemImageListWrapper>
      {productList.map((item, index) => {
        let tags = [];
        if (item.hasNewIcon) {
          tags.push("new");
        }
        if (item.hasReserveItemIcon) {
          tags.push("early");
        }
        if (item.isMarkdown) {
          tags.push("sale");
        }
        return (
          <ItemView
            jancode={item.jancode}
            nostock={item.nostock}
            swatches={item.jancodeChildList.map(item => ({
              jancode: item.stockPriorityItemJancode,
              nostock: item.stockPriorityItemStock
            }))}
            title={item.itemName}
            material={item.material}
            price={
              item.price[0].hasPrePrice
                ? item.price[0].cancelPrice
                : item.price[0].viewPrice
            }
            new_price={
              item.price[0].hasPrePrice ? item.price[0].viewPrice : null
            }
            tags={tags}
            minSize={
              sizeLabels[
                Math.min.apply(
                  null,
                  item.jancodeChildList.map(child => child.size_code)
                )
              ]
            }
            maxSize={
              sizeLabels[
                Math.max.apply(
                  null,
                  item.jancodeChildList.map(child => child.size_code)
                )
              ]
            }
            isSlideScroll={false}
          />
        );
      })}
    </ItemImageListWrapper>
  );
};
export default ProductItemList;
