import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../shared/panel/contentPanel";
import ItemImageList from "../shared/panel/itemImageList";
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
