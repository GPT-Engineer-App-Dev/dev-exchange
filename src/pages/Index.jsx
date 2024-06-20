import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { FaHome, FaLaptopCode, FaDatabase, FaCloud, FaMobileAlt } from "react-icons/fa";

const Navbar = () => (
  <Flex as="nav" bg="brand.700" color="white" padding="1.5rem" justifyContent="space-between" alignItems="center">
    <Heading size="md">Tech Forum</Heading>
    <HStack spacing={4}>
      <Link href="#" color="white">Home</Link>
      <Link href="#" color="white">Categories</Link>
      <Link href="#" color="white">About</Link>
      <Link href="#" color="white">Contact</Link>
    </HStack>
  </Flex>
);

const Footer = () => (
  <Box as="footer" bg="brand.700" color="white" padding="1rem" textAlign="center">
    <Text>&copy; 2023 Tech Forum. All rights reserved.</Text>
  </Box>
);

const DiscussionThread = ({ title, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4" mb="4">
    <Heading size="md">{title}</Heading>
    <Text mt="2">{description}</Text>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <Box as="main" padding="4">
        <Heading as="h1" size="xl" mb="6">Welcome to the Tech Forum</Heading>
        <Text fontSize="lg" mb="6">Discuss the latest in technology, programming, and more.</Text>
        <Divider mb="6" />
        <VStack spacing={4} align="stretch">
          <DiscussionThread title="Latest in Web Development" description="Discuss the latest trends and technologies in web development." />
          <DiscussionThread title="Database Management" description="Share tips and tricks for managing databases effectively." />
          <DiscussionThread title="Cloud Computing" description="Talk about the latest in cloud technologies and services." />
          <DiscussionThread title="Mobile Development" description="Discuss mobile app development for iOS and Android." />
        </VStack>
      </Box>
      <Footer />
    </Container>
  );
};

export default Index;