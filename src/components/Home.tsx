import {
  Box,
  Container,
  HStack,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

import MyImage from "../assets/ppImage.jpg";

import SkillSet from "./SkillSet";

import AnimateCube from "./AnimateCube";
import { motion } from "framer-motion";
import "./home.css";
import { skillset } from "../data/skillsData";

const Home = () => {
  const MotionBox = motion(Box);
  const xValue = useBreakpointValue({ base: 5, md: 25, lg: 30 });
  return (
    <>
      <Container maxW="100%" centerContent>
        <MotionBox
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          w={{ base: "100%", md: "30%", lg: "20%" }}
          borderRadius="100%"
          overflow="hidden"
          boxShadow="1px 1px 25px 5px rgba(76, 29, 157, 0.84)"
          mt="4"
          pt="8"
        >
          <Image src={MyImage} />
        </MotionBox>

        <Box
          color="whiteAlpha.800"
          fontSize={{ base: "25px", md: "30px", lg: "50px" }}
          fontWeight={{ base: "700", md: "400", lg: "600" }}
          placeItems="center"
          w={{ base: "100%", md: "70%", lg: "60%" }}
          textAlign="center"
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

          <AnimateCube />

          {/* Text Content */}
          <Text
            fontWeight={{ base: "400", md: "300", lg: "400" }}
            fontSize={{ base: "14px", md: "14px", lg: "25px" }}
            textAlign="center"
            width={{ base: "100%", md: "80%", lg: "80%" }}
            className="description"
          >
            Experienced Full-Stack Developer with over 4 years of expertise in
            designing and developing dynamic, scalable, and user-centric web
            applications. Let’s collaborate to transform your vision into
            reality! 🚀
          </Text>
        </Box>
      </Container>
      <SkillSet skills={skillset} />
    </>
  );
};

export default Home;
