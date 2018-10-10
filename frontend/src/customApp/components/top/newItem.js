import React from "react";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import ItemImageList from "../panel/itemImageList";
import NewItemWrapper from "./newItem.style";

const NewItem = props => {
  return (
    <NewItemWrapper>
      <ContentPanel
        title={<IntlMessages id="top.newItem.title" />}
        link_title={<IntlMessages id="top.newItem.link_title" />}
        link_path="/store"
      >
        <ItemImageList items={props.newItems} />
      </ContentPanel>
    </NewItemWrapper>
  );
};

export default NewItem;
