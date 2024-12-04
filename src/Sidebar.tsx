import {
  AbsoluteCenter,
  Box,
  Circle,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  ExploreGPTIcon,
  NewChatIcon,
  SidebarIcon,
  SmallGPTIcon,
  UpgradeIcon,
} from "./icons/sidebar-icons";
import { Tooltip } from "./components/ui/tooltip";
import { useSidebarContext } from "./sidebar-context";

export function Sidebar() {
  const { sideBarVisible, toggleSidebar } = useSidebarContext();

  return (
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
            <IconButton variant={"ghost"} onClick={toggleSidebar}>
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
            position="relative"
            className="group"
            _hover={{
              layerStyle: "fill.muted",
              textDecor: "none",
            }}
            px={1}
            h={10}
            borderRadius={"lg"}
            w={"100%"}
            whiteSpace="nowrap"
          >
            <Link href="#" variant={"plain"} _hover={{ textDecor: "none" }}>
              <Circle size={6} bg={"bg"} borderWidth={"1px"}>
                <SmallGPTIcon fontSize={"md"} />
              </Circle>
              <Text fontSize={"sm"} fontWeight={"md"}>
                ChatGPT
              </Text>
            </Link>
            <AbsoluteCenter
              axis="vertical"
              right={2}
              display="none"
              _groupHover={{ display: "initial" }}
            >
              <Tooltip showArrow content="New chat">
                <NewChatIcon
                  fontSize="md"
                  color="fg.subtle"
                  _hover={{ color: "fg.muted" }}
                />
              </Tooltip>
            </AbsoluteCenter>
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
            whiteSpace="nowrap"
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
          whiteSpace="nowrap"
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
  );
}