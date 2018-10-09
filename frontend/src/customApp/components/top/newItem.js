import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import Panel from "../panel/panel";
import ItemImageList from "../panel/itemImageList";
import NewItemWrapper from "./newItem.style";

const NewItem = props => {
  return (
    <NewItemWrapper>
      <Panel
        title={<IntlMessages id="top.newItem.title" />}
        link_title={<IntlMessages id="top.newItem.link_title" />}
        link_path="/store"
      >
        <ItemImageList items={props.newItems} />
      </Panel>
    </NewItemWrapper>
  );
};

export default NewItem;
