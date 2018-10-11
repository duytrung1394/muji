import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import ItemImageList from "../panel/itemImageList";
import LimitedItemWrapper from "./limitedItem.style";

const LimitedItem = props => {
  return (
    <ContentPanel
      title={<IntlMessages id="top.limitedItem.title" />}
      link_title={<IntlMessages id="top.limitedItem.link_title" />}
      link_path="/store"
    >
      <LimitedItemWrapper>
        <ItemImageList items={props.limitedItems} />
      </LimitedItemWrapper>
    </ContentPanel>
  );
};

export default LimitedItem;
