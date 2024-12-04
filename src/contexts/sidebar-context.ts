import { createContext } from "react";

interface SidebarContextType {
  sideBarVisible: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextType);
