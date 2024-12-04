import { useState } from "react";
import { SidebarContext } from "../contexts/sidebar-context";

export const SidebarProvider = (props: { children: React.ReactNode }) => {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSidebar = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <SidebarContext.Provider value={{ sideBarVisible, toggleSidebar }}>
      {props.children}
    </SidebarContext.Provider>
  );
};
