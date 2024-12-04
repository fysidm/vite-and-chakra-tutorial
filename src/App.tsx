import { Box, Center, Flex, IconButton, Stack } from "@chakra-ui/react";

import { SidebarIcon } from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Box bg={"bg.muted"} w={"260px"}>
        <Stack>
          <Flex>
            <Tooltip
              showArrow
              content="Close sidebar"
              positioning={{ placement: "right" }}
            >
              <IconButton variant={"ghost"}>
                <SidebarIcon fontSize={"2xl"} color={"fg.muted"} />
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
