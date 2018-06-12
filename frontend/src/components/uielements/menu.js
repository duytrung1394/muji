import { Menu } from 'antd';

const MenuChildItem = Menu.Item;
const MenuSubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuDivider = Menu.Divider;

export default Menu;
export {MenuChildItem, MenuSubMenu, MenuItemGroup, MenuDivider};

// MenuChildItemの命名はDropdownのexportするMenuItemとの衝突を回避するため、Childを入れています。