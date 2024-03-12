import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, Link, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaMusic, FaTicketAlt, FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={bg} minH="100vh">
        <Flex align="center" justify="center" direction="column" p={10}>
          <Heading as="h1" size="2xl" mb={4}>
            The Rockers
          </Heading>
          <Text fontSize="lg" mb={6}>
            Join us on our World Tour 2023!
          </Text>
          <Image src="https://images.unsplash.com/photo-1516057747705-0609711c1b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTAyNTEzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" alt="The Rockers Band on Stage" mb={8} />
          <Stack direction={["column", "row"]} spacing={4}>
            <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
              Get Tickets
            </Button>
            <Button leftIcon={<FaMusic />} colorScheme="gray" variant="outline">
              Listen Now
            </Button>
          </Stack>
        </Flex>

        <VStack bg={useColorModeValue("teal.500", "teal.200")} p={10} spacing={3} align="center">
          <Heading as="h2" size="lg" color={useColorModeValue("white", "gray.800")}>
            Follow Us
          </Heading>
          <Flex>
            <Link href="https://instagram.com" isExternal mx={2}>
              <FaInstagram size="28px" color={useColorModeValue("white", "gray.800")} />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="28px" color={useColorModeValue("white", "gray.800")} />
            </Link>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="28px" color={useColorModeValue("white", "gray.800")} />
            </Link>
            <Link href="https://youtube.com" isExternal mx={2}>
              <FaYoutube size="28px" color={useColorModeValue("white", "gray.800")} />
            </Link>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
