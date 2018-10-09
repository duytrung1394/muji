import React from "react";
import { Link } from "react-router-dom";
import IntlMessages from "../../../components/utility/intlMessages";
import Panel from "../panel/panel";
import ItemImageList from "../panel/itemImageList";
import FeatureWrapper from "./feature.style";

const Feature = props => {
  return (
    <FeatureWrapper>
      <Panel
        title={<IntlMessages id="top.feature.title"/>}
        link_title={<IntlMessages id="top.feature.link_title"/>}
        link_path="/store"
      >
        <ItemImageList items={props.features}/>
      </Panel>
    </FeatureWrapper>
  );
}

export default Feature;
