import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import ContentPanel from "../panel/contentPanel";
import ItemImageList from "../panel/itemImageList";

const Feature = props => {
  return (
    <ContentPanel
      title={<IntlMessages id="top.feature.title" />}
      link_title={<IntlMessages id="top.feature.link_title" />}
      link_path="/store"
    >
      <ItemImageList items={props.features} />
    </ContentPanel>
  );
};
export default Feature;
