import { createContext, useContext, useState } from "react";

interface SidebarContextType {
  sidebarVisible: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = () => {};

export const useSidebarContext = () => {};
