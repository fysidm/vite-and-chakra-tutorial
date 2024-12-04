import { useState } from "react";
import {
  Box,
  Center,
  Circle,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  Link,
  Span,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  ExploreGPTIcon,
  NewChatIcon,
  SidebarIcon,
  SmallGPTIcon,
  UpgradeIcon,
} from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import { ChatGPTMenu } from "./ChatGPTMenu";
import { Avatar } from "./components/ui/avatar";
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
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBarVisible = () => {
    setSideBarVisible(!sideBarVisible);
  };

  return (
    <Flex minH={"100dvh"}>
      <Box
        bg={"bg.muted"}
        w={!sideBarVisible ? "0" : "260px"}
        overflow="hidden"
        transition="width 0.3s"
      >
        <Stack h={"full"} px={3} py={2}>
          <Flex justify={"space-between"}>
            <Tooltip
              showArrow
              content="Close sidebar"
              positioning={{ placement: "right" }}
            >
              <IconButton variant={"ghost"} onClick={toggleSideBarVisible}>
                <SidebarIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
            <Tooltip showArrow content="New chat">
              <IconButton variant={"ghost"}>
                <NewChatIcon fontSize={"2xl"} color={"fg.muted"} />
              </IconButton>
            </Tooltip>
          </Flex>
          <Stack px={2} gap={0} flex={1}>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={1}
              h={10}
              borderRadius={"lg"}
              w={"100%"}
            >
              <Link href="#" variant={"plain"} _hover={{ textDecor: "none" }}>
                <Circle size={6} bg={"bg"} borderWidth={"1px"}>
                  <SmallGPTIcon fontSize={"md"} />
                </Circle>
                <Text fontSize={"sm"} fontWeight={"md"}>
                  ChatGPT
                </Text>
              </Link>
            </HStack>
            <HStack
              _hover={{
                layerStyle: "fill.muted",
                textDecor: "none",
              }}
              px={1}
              h={10}
              borderRadius={"lg"}
              w={"100%"}
            >
              <Link href="#" variant={"plain"} _hover={{ textDecor: "none" }}>
                <ExploreGPTIcon fontSize={"md"} />
                <Text fontSize={"sm"} fontWeight={"md"}>
                  Explore GPTs
                </Text>
              </Link>
            </HStack>
          </Stack>
          <Link
            href="#"
            _hover={{ textDecor: "none", layerStyle: "fill.muted" }}
            borderRadius="lg"
            py={2}
            px={1}
          >
            <HStack>
              <Circle size={8} fontSize="lg" borderWidth="1px">
                <UpgradeIcon />
              </Circle>
              <Stack gap={0} fontWeight="medium">
                <Text fontSize="sm">Upgrade plan</Text>
                <Text fontSize="xs" color="fg.subtle">
                  More access to the best models
                </Text>
              </Stack>
            </HStack>
          </Link>
        </Stack>
      </Box>
      <Box flex={1}>
        <Stack h="full">
          <Flex justify="space-between" align="center" p={2}>
            {!sideBarVisible && (
              <Flex>
                <Tooltip
                  showArrow
                  content="Open sidebar"
                  positioning={{ placement: "right" }}
                >
                  <IconButton variant={"ghost"} onClick={toggleSideBarVisible}>
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
                    <IconButton fontSize="2xl" size="sm" borderRadius="full">
                      <EnterIcon fontSize="2xl" />
                    </IconButton>
                  }
                >
                  <Input
                    placeholder="Message ChatGPT"
                    variant="subtle"
                    size="lg"
                    borderRadius="3xl"
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
  );
}

export default App;
