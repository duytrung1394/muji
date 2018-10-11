import React from "react";
import GalleryWrapper from "./gallery.style";

const Gallery = props => {
  const { title, items, caption } = props;
  return (
    <GalleryWrapper>
      <div className="gallery-frame">
        <div className="gallery-content-frame">
          <a href="">
            <h2>{title}</h2>
            <div className="gallery-item-group">
              <ul>
                {items.map((item, i) => {
                  return (
                    <li key={i}>
                      <img src={item.img_src} alt="imges" key={i} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="gallery-frame-caption">
              ネットストア限定 対象商品配送料無料
            </span>
          </a>
        </div>
      </div>
    </GalleryWrapper>
  );
};
export default Gallery;
