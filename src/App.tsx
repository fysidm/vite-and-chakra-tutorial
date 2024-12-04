import { useState } from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Span,
  Stack,
  VStack,
} from "@chakra-ui/react";

import { InputGroup } from "./components/ui/input-group";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "./components/ui/file-upload";
import {
  BirthdayIcon,
  ChartIcon,
  CodeIcon,
  EnterIcon,
  IllustrationIcon,
  UploadIcon,
} from "./icons/other-icons";
import { Button } from "./components/ui/button";
import { Sidebar } from "./Sidebar";
import { SidebarProvider } from "./sidebar-context";
import { TopSection } from "./TopSection";

interface PromptButtonProps {
  icon?: React.ReactElement;
  description: string;
}

function PromptButton(props: PromptButtonProps) {
  const { icon, description } = props;

  return (
    <Button variant="outline" borderRadius="full">
      {icon}
      <Span color="fg.subtle">{description}</Span>
    </Button>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SidebarProvider>
      <Flex minH={"100dvh"}>
        <Sidebar />
        <Box flex={1}>
          <Stack h="full">
            <TopSection />
            <Center flex="1">
              <VStack gap={6}>
                <Heading size="3xl">What can I help with?</Heading>
                <Center>
                  <InputGroup
                    minW={768}
                    startElement={
                      <FileUploadRoot>
                        <FileUploadTrigger asChild>
                          <UploadIcon fontSize="2xl" color="fg" />
                        </FileUploadTrigger>
                        <FileUploadList />
                      </FileUploadRoot>
                    }
                    endElement={
                      <IconButton
                        fontSize="2xl"
                        size="sm"
                        borderRadius="full"
                        disabled={inputValue.trim() === ""}
                      >
                        <EnterIcon fontSize="2xl" />
                      </IconButton>
                    }
                  >
                    <Input
                      placeholder="Message ChatGPT"
                      variant="subtle"
                      size="lg"
                      borderRadius="3xl"
                      value={inputValue}
                      onChange={handleInputValue}
                    />
                  </InputGroup>
                </Center>
                <HStack gap={2}>
                  <PromptButton
                    icon={<IllustrationIcon color="green.500" fontSize="lg" />}
                    description="Create image"
                  />
                  <PromptButton
                    icon={<CodeIcon color="blue.500" fontSize="lg" />}
                    description="Code"
                  />
                  <PromptButton
                    icon={<ChartIcon color="cyan.400" fontSize="lg" />}
                    description="Analyze data"
                  />
                  <PromptButton
                    icon={<BirthdayIcon color="cyan.400" fontSize="lg" />}
                    description="Surprise"
                  />
                  <PromptButton description="More" />
                </HStack>
              </VStack>
            </Center>
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
