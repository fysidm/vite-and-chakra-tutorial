import { Box, Center, Flex, IconButton, Stack } from "@chakra-ui/react";

import { NewChatIcon, SidebarIcon } from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Box bg={"bg.muted"} w={"260px"}>
        <Stack h={"full"} px={3} py={2}>
          <Flex justify={"space-between"}>
            <Tooltip
              showArrow
              content="Close sidebar"
              positioning={{ placement: "right" }}
            >
              <IconButton variant={"ghost"}>
                <SidebarIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
            <Tooltip showArrow content="New chat">
              <IconButton variant={"ghost"}>
                <NewChatIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
          </Flex>
        </Stack>
      </Box>
      <Box>
        <Stack h="full">
          <Box>Top</Box>
          <Center flex="1">Middle</Center>
          <Box pb="2">Bottom</Box>
        </Stack>
      </Box>
    </Flex>
  );
}

export default App;
