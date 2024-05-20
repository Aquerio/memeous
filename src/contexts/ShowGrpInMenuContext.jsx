import { createContext, useContext, useState } from 'react';

const ShowGrpInMenuContext = createContext();

export const ShowGrpInMenuProvider = ({ children }) => {
  const [showGrpInMenu, setShowGrpInMenu] = useState(false);
  const [menuBtns, setMenuBtns] = useState("none")
  

  return (
    <ShowGrpInMenuContext.Provider value={{ showGrpInMenu, setShowGrpInMenu, menuBtns, setMenuBtns }}>
      {children},
    </ShowGrpInMenuContext.Provider>
  );
};

export const useShowGrpInMenu = () => {
  return useContext(ShowGrpInMenuContext);
};