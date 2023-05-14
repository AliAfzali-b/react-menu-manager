import React from 'react';
import {createContext, ReactNode, useContext} from 'react';
type MenuManagerProviderProps = {
  children: ReactNode;
  menu_items: [];
  set_menu_items: any;
};
type MenuManagerContext = {
  menu_items: [];
  set_menu_items: any;
};
const MenuManagerContext = createContext({} as MenuManagerContext);
export function useMenuManager() {
  return useContext(MenuManagerContext);
}
export function MenuManagerProvider({
  children,
  menu_items,
  set_menu_items,
}: MenuManagerProviderProps) {
  return (
    <MenuManagerContext.Provider
      value={{
        menu_items,
        set_menu_items,
      }}
    >
      {children}
    </MenuManagerContext.Provider>
  );
}
