import React, { createContext, useContext, useState } from "react";

interface SidebarContextType {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = (props: { children: React.ReactNode }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <SidebarContext.Provider value={{ sidebarVisible, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
