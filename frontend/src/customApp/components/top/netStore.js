import React from "react";
import NetStoreWrapper from "./netStore.style";

const NetStore = props => {
  const { title, items, caption } = props;
  return (
    <NetStoreWrapper>
      <div className="netStore-frame">
        <a href="//www.muji.com">
          <h2>{title}</h2>
          <ul className="netStore-image-group">
            {items.map((item, i) => {
              return (
                <li key={i}>
                  <figure>
                    <img src={item.img_src} alt="" />
                  </figure>
                  <h3 className="subtitle">{item.img_sub}</h3>
                  <p className="caption">{item.img_cap}</p>
                </li>
              );
            })}
          </ul>
        </a>
      </div>
    </NetStoreWrapper>
  );
};
export default NetStore;
