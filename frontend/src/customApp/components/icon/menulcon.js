import React from "react";
import MenuIconWrapper from "./menuIcon.style";
import { Icon } from "antd";

const MenuIcon = props => {
  const { img_src, sysytem_type, icon_id, size } = props;
  return (
    <MenuIconWrapper>      
      <img src={img_src} alt="" id={icon_id} width={size} height={size}/>
    </MenuIconWrapper>
  );
}

export default MenuIcon;
