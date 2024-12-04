import { Flex, IconButton } from "@chakra-ui/react";

import { useSidebarContext } from "./hooks/use-sidebar";
import { NewChatIcon, SidebarIcon } from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import { Avatar } from "./components/ui/avatar";
import { ChatGPTMenu } from "./ChatGPTMenu";

export function TopSection() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext();

  return (
    <Flex justify="space-between" align="center" p={2}>
      {!sideBarVisible && (
        <Flex>
          <Tooltip
            showArrow
            content="Open sidebar"
            positioning={{ placement: "right" }}
          >
            <IconButton variant={"ghost"} onClick={toggleSidebar}>
              <SidebarIcon fontSize={"2xl"} color={"fg.muted"} />
            </IconButton>
          </Tooltip>
          <Tooltip showArrow content="New chat">
            <IconButton variant={"ghost"}>
              <NewChatIcon fontSize={"2xl"} color={"fg.muted"} />
            </IconButton>
          </Tooltip>
          <ChatGPTMenu />
        </Flex>
      )}
      {sideBarVisible && <ChatGPTMenu />}
      <Avatar
        name="George"
        size="sm"
        colorPalette="teal"
        variant="solid"
        mr={3}
      />
    </Flex>
  );
}
