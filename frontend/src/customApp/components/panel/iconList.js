import React from "react";
import ItemIcon from "./itemIcon";

const IconList = ({ items }) => {
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
