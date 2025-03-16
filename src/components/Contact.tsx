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
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
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
        .catch(() => {
          toast({
            title: "Failed to send message.",
            description: "Please try again.",
            status: "error",
            position: "top-right",
            isClosable: true,
          });
        });
  };

  return (
    <Container maxW="100%" centerContent>
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
        h={{ base: "140vh", md: "110vh", lg: "80vh" }}
        alignItems="center"
        mb="5%"
        color="white"
      >
        <form className="form-size" ref={form} onSubmit={handleSubmit}>
          <Text mb="8" mt="7%" fontSize={{ base: "20px", lg: "40px" }}>
            Message me
          </Text>
          <FormControl>
            <FormLabel fontSize="20px">Name</FormLabel>
            <Input
              border="1px solid gray"
              h={{ base: "40px", lg: "50px" }}
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
              border="1px solid gray"
              h={{ base: "40px", lg: "50px" }}
              type="email"
              name="user_email"
              required
              bg="gray.700"
              fontSize="2xl"
            />
            <FormLabel fontSize="40px" mt="4">
              Message
            </FormLabel>
            <Textarea
              border="1px solid gray"
              name="message"
              required
              h={{ base: "100px", lg: "180px" }}
              bg="gray.700"
              fontSize="2xl"
            />
            <Wrap mt="4">
              <WrapItem w="100%" justifyContent="flex-end">
                <Button
                  color="white"
                  bg="blue.500"
                  type="submit"
                  size="md"
                  w="20%"
                >
                  Send
                </Button>
              </WrapItem>
            </Wrap>
          </FormControl>
        </form>
        <Box ml="10%" w="50%">
          <Text mb="8" fontSize={{ base: "25px", lg: "35px" }}>
            Contact me
          </Text>
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
          <HStack mb="10">
            <IoLogoGithub size={30} />
            <Link href="https://github.com/Israel9597" isExternal>
              <Text fontSize={{ base: "10px", lg: "18px" }}>My Github</Text>
            </Link>
          </HStack>
          <HStack mb="10">
            <MdEmail size={30} />

            <Text fontSize={{ base: "10px", lg: "18px" }}>
              israelbelete@gmail.com
            </Text>
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
