import React, { Fragment } from "react";
import Organization from "./organization";
import CardList from "./cardList";
import Message from "./message";

const Includes = ({ organization, organizations, activities, messages }) => {
  return (
    <Fragment>
      <Organization title={organization} organizations={organizations} />
      <CardList items={activities} cardWidth={"25%"} />
      <Message messages={messages} />
    </Fragment>
  );
};

export default Includes;
