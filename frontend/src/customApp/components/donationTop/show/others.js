import React, { Component } from "react";
import ContentPanel from "../../panel/contentPanel";
import CardList from "./cardList";

const Others = ({ others }) => {
  return (
    <ContentPanel title={"その他の募金券"}>
      <CardList items={others} cardWidth={"215px"} />
    </ContentPanel>
  );
};

export default Others;
