import { useContext } from "react";
import { SidebarContext } from "../contexts/sidebar-context";

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
