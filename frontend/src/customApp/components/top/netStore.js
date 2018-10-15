import React from "react";
import NetStoreWrapper from "./netStore.style";
import IntlMessages from "../../../components/utility/intlMessages";

const NetStore = props => {
  const { netStores } = props;
  return (
    <NetStoreWrapper>
      <div className="net-store-frame">
        <a href="//www.muji.com">
          <h2>
            <IntlMessages id="top.net-store.title" />
          </h2>
          <ul className="net-store-image-group">
            {netStores &&
              netStores.map((item, i) => {
                return (
                  <li key={i}>
                    <figure>
                      <img src={item.img_src} alt="" />
                    </figure>
                    <div className={`subtitle` + i}>
                      {item.img_sub.split("\n").map((newline, j) => (
                        <div className={`subtitle-lines` + j} key={j}>
                          {newline}
                        </div>
                      ))}
                    </div>
                    <div className={`note` + i}>
                      {item.img_note.split("\n").map((newline, j) => (
                        <p className={`note-lines` + j} key={j}>
                          {newline}
                        </p>
                      ))}
                    </div>
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
