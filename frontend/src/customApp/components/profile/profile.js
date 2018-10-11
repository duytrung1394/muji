import React from "react";
import ProfileWrapper from "./profile.style";

const Profile = props => {
  const { title, items, caption } = props;
  return (
    <ProfileWrapper>
      <div className="profile-frame">
        <a href="//www.muji.com">
          <h2>{title}</h2>
          <ul className="profile-image-group">
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
    </ProfileWrapper>
  );
};
export default Profile;
