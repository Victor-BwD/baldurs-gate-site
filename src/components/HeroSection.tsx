import { Box, Flex, Heading, Text, HStack, Button, Link } from "@chakra-ui/react"
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsDiscord } from 'react-icons/bs'
import "../"


function HeroSection() {
  return (
    <Box height="100vh"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      backgroundImage="url(../../assets/images/bg3.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat">
      <Flex flexDirection="column" marginLeft="10%">
        <Text color="#df204d"
          fontSize="1.15rem"
          fontWeight="600"
          fontStyle="normal"
          textTransform="uppercase"
          mb="2"
        >Discover the epic journey
        </Text>
        <Heading color="white" fontWeight="900" fontSize={{base: '3rem', md: "4rem", lg: "5rem"}} mb="2">WE FALL. <br /> THEN WE RISE.</Heading>
        <HStack>
          <Box backgroundColor="white" h={{base: '50px', md: '40px'}} w="2px"></Box>
          <Text color="white" backgroundColor="blackAlpha.200" >Embark on an adventure of
          magic, intrigue, and danger in the highly anticipated Baldur's Gate 3!
          </Text>
        </HStack>
        <Box>
          <Flex mt={6} justifyContent="space-between" alignItems="flex-start">
            <HStack>
              <Button
                bg="#DF204D"
                color="white"
                borderRadius='0'
                paddingX={{base: '1rem', md: '2rem'}}
                paddingY='1rem'
                fontSize='15px'
                textTransform='uppercase'
                borderColor="#DF204D"
                boxSizing="border-box"
                _hover={{
                  backgroundColor: "#ef063d"
                }}
                style={{ marginRight: '10px' }}
              >
                Buy Now
              </Button>
              <Button
                bg="#ffffff"
                color="#DF204D"
                borderRadius='0'
                paddingX={{base: '1rem', md: '2rem'}}
                paddingY='1rem'
                fontSize='15px'
                textTransform='uppercase'
                borderColor="#DF204D"
                boxSizing="border-box"
                _hover={{
                  backgroundColor: "#ef063d",
                  color: '#ffffff'
                }}
              >
                Discover More
              </Button>
            </HStack>
            <HStack position="absolute"
              mr="24px"
              gap={4}
              right="0"
              left="auto"
              width="auto" 
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              zIndex={1} 
              mt={{base: "3.5rem", md: "0"}}
            >
              <Link border="1px solid" borderRadius="50%" padding="0.75em" color="#9f9c94" _hover={{color: "#ffffff"}}>
                <BsFacebook size="24px"/>
              </Link>
              <Link border="1px solid" borderRadius="50%" padding="0.75em" color="#9f9c94" _hover={{color: "#ffffff"}}>
                <BsTwitter size="24px"/>
              </Link>
              <Link border="1px solid" borderRadius="50%" padding="0.75em" color="#9f9c94" _hover={{color: "#ffffff"}}>
                <BsInstagram size="24px"/>
              </Link>
              <Link border="1px solid" borderRadius="50%" padding="0.75em" color="#9f9c94" _hover={{color: "#ffffff"}}>
                <BsYoutube size="24px"/>
              </Link>
            </HStack>
          </Flex>

          <Flex position="absolute"
            gap={4}
            right="0"
            left="auto"
            width="100vw"
            flexDirection="row"
            justifyContent="flex-end"
            mt={{base: "5rem", md: "1.5rem"}}>
            <Box as='button' bgColor="#6757D6" _hover={{ transform: "scale(1.05)" }}>
              <Flex flexDirection="row" textAlign="left" justifyContent="space-between" alignContent="center" gap={4} mr="2rem" p="1rem" >
                <BsDiscord size="48px" color="white" /> <Text color="white" fontWeight="600" textTransform="uppercase">Join our <br></br> discord server</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>

  )
}

export default HeroSection