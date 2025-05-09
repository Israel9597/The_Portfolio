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
      <HStack justifyContent="flex-end" spacing="80px" p={5} color="white">
        <Link to="home" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <IoIosHome size={20} />
            <Text fontWeight="200" fontSize="md">
              Home
            </Text>
          </HStack>
        </Link>
        <Link to="resume" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <IoDocumentTextSharp size={20} />
            <Text fontWeight="200" fontSize="md">
              Resume
            </Text>
          </HStack>
        </Link>
        <Link to="portfolio" smooth={true} duration={1200}>
          <HStack cursor="pointer">
            <BsPersonWorkspace size={20} />
            <Text fontWeight="200" fontSize="md">
              Portfolio
            </Text>
          </HStack>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <HStack cursor="pointer">
            <MdMail size={20} />
            <Text fontWeight="200" fontSize="md">
              Contact
            </Text>
          </HStack>
        </Link>
      </HStack>
    </MotionBox>
  );
};

export default NavBar;
