import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileDate: boolean;
}

export default function Profile({ showProfileDate }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileDate && (
        <Box mr="4" textAlign="right">
          <Text>Jonathan Darlan</Text>
          <Text color="gray.300" fontSize="small">
            jdarlan@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Jonathan Darlan"
        src="https://github.com/jdarlancm.png"
      />
    </Flex>
  );
}
