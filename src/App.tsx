import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { SidebarProvider } from "./sidebar-context";
import { TopSection } from "./TopSection";
import { MiddleSection } from "./MiddleSection";

function App() {
  return (
    <SidebarProvider>
      <Flex minH={"100dvh"}>
        <Sidebar />
        <Box flex={1}>
          <Stack h="full">
            <TopSection />
            <MiddleSection />
            <Box pb="2">
              <Center fontSize="xs" color="fg.muted">
                ChatGPT can make mistakes. Check important info.
              </Center>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default App;
