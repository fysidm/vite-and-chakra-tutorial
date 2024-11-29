import { Box, Center, Flex, Stack } from "@chakra-ui/react";

function App() {
  return (
    <Flex minH={"100dvh"}>
      <Box bg={"bg.muted"} w={"260px"}>
        Side panel
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
