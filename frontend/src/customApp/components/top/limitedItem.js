import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import Panel from "../panel/panel";
import ItemImageList from "../panel/itemImageList";
import LimitedItemWrapper from "./limitedItem.style";

const LimitedItem = props => {
  return (
    <LimitedItemWrapper>
      <Panel
        title={<IntlMessages id="top.limitedItem.title" />}
        link_title={<IntlMessages id="top.limitedItem.link_title" />}
        link_path="/store"
      >
        <ItemImageList items={props.limitedItems} />
      </Panel>
    </LimitedItemWrapper>
  );
};

export default LimitedItem;
