import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import ItemImageList from "../panel/itemImageList";
import LimitedItemWrapper from "./limitedItem.style";

const LimitedItem = props => {
  return (
    <LimitedItemWrapper>
      <ContentPanel
        title={<IntlMessages id="top.limitedItem.title" />}
        link_title={<IntlMessages id="top.limitedItem.link_title" />}
        link_path="/store"
      >
        <ItemImageList items={props.limitedItems} />
      </ContentPanel>
    </LimitedItemWrapper>
  );
};

export default LimitedItem;
