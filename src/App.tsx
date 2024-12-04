import { Box, Flex, Stack } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { SidebarProvider } from "./sidebar-context";
import { TopSection } from "./TopSection";
import { MiddleSection } from "./MiddleSection";
import { BottomSection } from "./BottomSection";

function App() {
  return (
    <SidebarProvider>
      <Flex minH={"100dvh"}>
        <Sidebar />
        <Box flex={1}>
          <Stack h="full">
            <TopSection />
            <MiddleSection />
            <BottomSection />
          </Stack>
        </Box>
      </Flex>
    </SidebarProvider>
  );
}

export default App;
