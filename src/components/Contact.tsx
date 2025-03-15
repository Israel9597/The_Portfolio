import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
  Wrap,
  WrapItem,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const MotionBox = motion(Box);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_USER_ID;

    if (form.current)
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey: publicKey,
        })
        .then(() => {
          toast({
            title: "Your email is submitted successfully.",
            description: "Israel will reply shortly 😉",
            status: "success",
            position: "top-right",
            isClosable: true,
          });
        })
        .catch((e) => {
          toast({
            title: "Failed to send message.",
            description: "Please try again.",
            status: "error",
            position: "top-right",
            isClosable: true,
          });
          console.log(e.text);
        });
  };

  return (
    <Container
      maxW="100%"
      bgGradient="linear(to-l, rgb(0, 0, 0), rgb(30, 3, 63))"
      centerContent
    >
      <MotionBox
        className="flex items-center justify-center text-white w-[200px] h-[200px] rounded-full bg-black"
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Heading
          fontSize={{ base: "40px", lg: "60px" }}
          bgGradient="linear(to-l, rgb(145, 231, 151),rgb(0, 200, 255))"
          bgClip="text"
        >
          Get in touch
        </Heading>
      </MotionBox>
      <Flex
        direction={{ base: "column", lg: "row" }}
        w="100%"
        h={{ base: "110vh", md: "90vh", lg: "60vh" }}
        alignItems="center"
        mb="5%"
      >
        <form className="form-size" ref={form} onSubmit={handleSubmit}>
          <Heading mb="8" mt="7%" fontSize={{ base: "20px", lg: "50px" }}>
            Message me
          </Heading>
          <FormControl>
            <FormLabel fontSize="20px">Name</FormLabel>
            <Input
              border="2px solid gray"
              h="50px"
              type="text"
              name="user_name"
              required
              bg="gray.700"
              fontSize="2xl"
            />
            <FormLabel fontSize="20px" mt="4">
              Email
            </FormLabel>
            <Input
              border="2px solid gray"
              h="50px"
              type="email"
              name="user_email"
              required
              bg="gray.700"
              fontSize="2xl"
            />
            <FormLabel fontSize="20px" mt="4">
              Message
            </FormLabel>
            <Textarea
              border="2px solid gray"
              name="message"
              required
              h="180px"
              bg="gray.700"
              fontSize="2xl"
            />
            <Wrap mt="4">
              <WrapItem w="100%" justifyContent="flex-end">
                <Button bg="blue.500" type="submit" size="md" w="20%">
                  Send
                </Button>
              </WrapItem>
            </Wrap>
          </FormControl>
        </form>
        <Box ml="10%" w="50%">
          <Heading mb="8" fontSize={{ base: "25px", lg: "35px" }}>
            Contact me
          </Heading>
          <HStack mb="10">
            <MdPermPhoneMsg size={30} />
            <Text fontSize={{ base: "10px", lg: "18px" }}>+1(240)476-1905</Text>
          </HStack>
          <HStack mb="10">
            <FaLinkedin size={30} />
            <Link
              href="https://www.linkedin.com/in/israel-haile-81580595/"
              isExternal
            >
              <Text fontSize={{ base: "10px", lg: "18px" }}>Israel Haile</Text>
            </Link>
          </HStack>
          <HStack>
            <ImLocation size={30} />

            <Text fontSize={{ base: "10px", lg: "18px" }}>
              Silver Spring, MD
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
