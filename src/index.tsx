import React from 'react';
import {MenuManagerProvider} from './Context/MenuManagerContext';
type props = {
  menu_items: [];
  set_menu_items: any;
};
const MenuManager: React.FC<props> = ({menu_items, set_menu_items}) => {
  return (
    <MenuManagerProvider menu_items={menu_items} set_menu_items={set_menu_items}>
      <h1>hello</h1>
    </MenuManagerProvider>
  );
};
export default MenuManager;
