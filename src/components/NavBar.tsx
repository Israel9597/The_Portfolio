import { Box, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { IoIosHome } from "react-icons/io";
import { IoDocumentTextSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { motion } from "framer-motion";

const NavBar = () => {
  const MotionBox = motion(Box);
  return (
    <MotionBox
      animate={{ y: 10 }}
      transition={{ type: "spring", stiffness: 10 }}
    >
      <HStack
        justifyContent="flex-end"
        spacing="80px"
        p={5}
        mr="150px"
        color="whiteAlpha.800"
      >
        <Link to="home" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <IoIosHome size={30} />
            <Text fontWeight="40" fontSize="xl">
              Home
            </Text>
          </HStack>
        </Link>
        <Link to="resume" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <IoDocumentTextSharp size={30} />
            <Text fontWeight="40" fontSize="xl">
              Resume
            </Text>
          </HStack>
        </Link>
        <Link to="portfolio" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <BsPersonWorkspace size={30} />
            <Text fontWeight="40" fontSize="xl">
              Portfolio
            </Text>
          </HStack>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <HStack cursor="pointer">
            <MdMail size={30} />
            <Text fontWeight="40" fontSize="xl">
              Contact
            </Text>
          </HStack>
        </Link>
      </HStack>
    </MotionBox>
  );
};

export default NavBar;
