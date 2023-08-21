import { Box, Flex, Link, HStack } from "@chakra-ui/react";

function NavBar() {
  return (
    <Box bg="gray.800" px={4} py={8} fontFamily="Roboto, sans-serif" fontSize="1.3rem" paddingLeft="4%">
      <Box bg="#23222a" w="150px" h="95px" position="absolute" right="0" top="0" zIndex="1" _hover={{ backgroundColor: "red.600" }} style={{
        clipPath: "polygon(calc(0% + 40px) 0%, 100% 0%, calc(100% - 0px) 100%, 0% 100%)"
      }}></Box>
      <Flex justifyContent="space-between" alignItems="center">
        <HStack gap={8}>
          <Link href="#" fontSize="xl" fontWeight="bold" color="white">
            Logo
          </Link>
          <Box display={{ base: "none", md: "block" }}>
            <Link href="#" color="white" mr={6} _hover={{ color: "red.600" }}>
              Home
            </Link>
            <Link href="#" color="white" mr={6} _hover={{ color: "red.600" }}>
              Community
            </Link>
            <Link href="#" color="white" mr={6} _hover={{ color: "red.600" }}>
              Gamification
            </Link>
            <Link href="#" color="white" mr={6} _hover={{ color: "red.600" }}>
              News
            </Link>
            <Link href="#" color="white" _hover={{ color: "red.600" }}>
              Events
            </Link>
          </Box>
        </HStack>
        <HStack>
          <Link href="#" color="white" mr={6} _hover={{ color: "red.600" }}>
            Login
          </Link>

          <Link href="#" color="white" mr={6} zIndex="1" _hover={{ color: "red.600" }}>
            Register
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

export default NavBar;