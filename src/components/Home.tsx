import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import MyImage from "../assets/AAF8xuvOsFs_1739493193192.svg";

import SkillSet from "./SkillSet";

import AnimateCube from "./AnimateCube";
import { motion } from "framer-motion";
import "./home.css";
import { skillset } from "../data/skillsData";

const Home = () => {
  const MotionBox = motion(Box);
  const xValue = useBreakpointValue({ base: 5, md: 25, lg: 80 });
  return (
    <>
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <MotionBox
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          w={{ base: "100%", md: "30%", lg: "40%" }}
        >
          <Image src={MyImage} />
        </MotionBox>

        <Box
          color="whiteAlpha.800"
          fontSize={{ base: "25px", md: "30px", lg: "70px" }}
          fontWeight={{ base: "700", md: "400", lg: "700" }}
          placeItems="center"
          w={{ base: "100%", md: "70%", lg: "60%" }}
          alignContent="center"
          textAlign="center"
          sx={{
            margin: 0, // Override margin
            padding: 0, // Override padding
          }}
        >
          <MotionBox
            animate={{ x: xValue }}
            transition={{ type: "spring", stiffness: 20 }}
          >
            <Text>Hi there,</Text>
            <HStack>
              <Text>I'm</Text>
              <Text
                bgGradient="linear(to-l,rgb(145, 231, 151),rgb(0, 200, 255))"
                bgClip="text"
                fontWeight="extrabold"
                className="animatedText"
              >
                Israel Haile
              </Text>
            </HStack>
          </MotionBox>
          <AnimateCube />

          {/* Text Content */}
          <Text
            fontWeight={{ base: "600", md: "300", lg: "600" }}
            fontSize={{ base: "14px", md: "14px", lg: "25px" }}
            textAlign="center"
            width={{ base: "100%", md: "80%", lg: "80%" }}
            className="description"
            mt="6%"
          >
            Experienced Full-Stack Developer with over 4 years of expertise in
            designing and developing dynamic, scalable, and user-centric web
            applications. Let’s collaborate to transform your vision into
            reality! 🚀
          </Text>
        </Box>
      </Flex>
      <SkillSet skills={skillset} />
    </>
  );
};

export default Home;
