import { Box, HStack, Text } from "@chakra-ui/react";
import "./responsiveNav.css";
import { Link } from "react-scroll";
import { IoIosHome } from "react-icons/io";

import { IoDocumentTextSharp } from "react-icons/io5";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const ResponsiveNav = () => {
  return (
    <Box className="overlay">
      <Box className="overlay-content">
        <Link to="home" smooth={true} duration={1200}>
          <HStack mb="6">
            <IoIosHome size={20} />

            <Text fontSize="20px"> Home</Text>
          </HStack>
        </Link>
        <Link to="resume" smooth={true} duration={1200}>
          <HStack mb="6">
            <IoDocumentTextSharp size={20} />

            <Text fontSize="20px">Resume</Text>
          </HStack>
        </Link>
        <Link to="portfolio" smooth={true} duration={1200}>
          <HStack mb="6">
            <BsPersonWorkspace size={20} />

            <Text fontSize="20px">Portfolio</Text>
          </HStack>
        </Link>
        <Link to="contact" smooth={true} duration={1200}>
          <HStack mb="6">
            <MdMail size={20} />

            <Text fontSize="20px">Contact</Text>
          </HStack>
        </Link>
      </Box>
    </Box>
  );
};

export default ResponsiveNav;
