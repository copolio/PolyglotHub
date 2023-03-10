import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Flex,
  Stack,
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  useColorMode,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function GlobalHeader() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w="100%" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>copolio</Box>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={"https://avatars.dicebear.com/api/male/username.svg"}
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
