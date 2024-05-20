import { createContext, useContext, useState } from 'react';

const RouteHeadContext = createContext();

export const RouteHeadProvider = ({ children }) => {
  const [routeHead, setRouteHead] = useState("");
  

  return (
    <RouteHeadContext.Provider value={{ routeHead, setRouteHead }}>
      {children}
    </RouteHeadContext.Provider>
  );
};

export const useRouteHead = () => {
  return useContext(RouteHeadContext);
};