import React from "react";
import ItemIcon from "./itemIcon";

const IconList = props => {
  const { items } = props;
  return (
    <div>
      {items &&
        items.map((item, index) => {
          return <ItemIcon key={index} item={item} />;
        })}
    </div>
  );
};

export default IconList;
