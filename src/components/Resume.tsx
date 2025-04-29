import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./resume.css";
import { FaFileDownload } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";
import resume from "../assets/ISRAEL  HAILE_RESUME  FULLSTACK.pdf";

const Resume = () => {
  const MotionBox = motion(Box);
  const xValue = useBreakpointValue({ base: 18, md: "80", lg: 100 });
  const fontSize = { base: "13px", md: "15", lg: "17px" };
  const titleSize = "20px";
  return (
    <Container
      maxW="95%"
      className="resume-container"
      boxShadow="dark-lg"
      centerContent
      height="auto"
    >
      <MotionBox
        animate={{ y: 30 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Text
          bgGradient="linear(to-l,rgb(145, 231, 151),rgb(0, 200, 255))"
          bgClip="text"
          fontWeight={{ base: "200", md: "400", lg: "600" }}
          className="animatedText"
          fontSize="40px"
        >
          Resume
        </Text>
      </MotionBox>
      <Box w="85%">
        <Heading size="lg" fontSize={titleSize} mt="8">
          {" "}
          Summary
        </Heading>
        <Text
          fontSize={{
            base: fontSize.base,
            md: fontSize.md,
            lg: fontSize.lg,
          }}
          mt="8"
        >
          Motivated and experienced Full-Stack Web Developer with 4 years of
          hands-on experience in designing and developing scalable, responsive
          web applications using React, Node.js, and modern web technologies.
          Proven ability to work in DevOps environments utilizing CI/CD
          pipelines, agile development, test-driven development and learn
          emerging technologies.Skilled at strong problem solving, working
          independently, verbal communication and delivering innovative
          solutions to meet business objectives.
        </Text>
      </Box>

      <Box width={{ base: "100%", md: "100%", lg: "100%" }}>
        <Flex direction={{ base: "column", md: "row" }}>
          <MotionBox
            animate={{ x: xValue }}
            transition={{ type: "spring", stiffness: 20 }}
            className="text-[30px] font-bold capitalize"
            width={{ base: "100%", md: "40%", lg: "50%" }} // Use percentages for responsive width
            pl={{ base: "3%", md: "2%" }} // Adjust padding for mobile
            pr={{ base: "3%" }}
          >
            <Heading fontSize={titleSize} mt="8" alignItems="center">
              Professional Experience
            </Heading>
            <Heading
              size="lg"
              fontSize="19px
            "
              mt="10"
            >
              IT Support & Frontend Developer
            </Heading>
            <Text
              fontSize="19px
            "
            >
              Gihon Tech (2024 - present)
            </Text>

            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="4"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Led website development and maintenance for a startup using
                modern tools, achieving a 40% load speed improvement and a 30%
                increase in user engagement through an enhanced digital
                experience.
              </ListItem>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Manage the daily Software Development Life Cycle (SDLC)
                operations, streamlining workflows and improving project
                delivery timelines by 25%, ensuring high-quality releases with
                minimal downtime
              </ListItem>
            </List>
            <Heading
              size="lg"
              fontSize="19px
            "
              mt="8"
            >
              Frontend Developer
            </Heading>
            <Text
              fontSize="19px
            "
            >
              Tata Consultancy Services ( 2022 - 2024 )
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Developed and maintained enterprise-level responsive Agent web
                portal and Customer web portal for end client Metlife Insurance
                LATAM project, improved user engagement by 30%.
              </ListItem>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Developed and maintained enterprise-level responsive
                self-service applications for end client Unfi Foods.
              </ListItem>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Implemented libraries React query/Tanstack for data fetching,
                lazy loading(infinite loading), caching , pagination which
                optimize performance with 25%.
              </ListItem>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Applied Data driven form library for creation, validation, and
                submission of forms.
              </ListItem>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Collaborated with the design team, business analyst team,
                quality assurance team, and back-end team to achieve the project
                goal.
              </ListItem>
            </List>
          </MotionBox>
          <MotionBox
            animate={{ y: xValue }}
            transition={{ type: "spring", stiffness: 20 }}
            className="text-[30px] font-bold capitalize"
            width={{ base: "100%", md: "50%", lg: "50%" }} // Use percentages for responsive width
            pl={{ base: "4%", md: "10%" }} // Adjust padding for mobile
            pr={{ base: "4%", md: "0" }}
            mb={{ base: "5%" }}
          >
            <Heading
              size="lg"
              fontSize="19px
            "
              mt="4"
            >
              Assistant Instructor
            </Heading>
            <Text
              fontSize="19px
            "
            >
              Evangadi Networks BootCamp ( 2022 - 2024 )
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Taught full-stack development courses covering HTML, CSS,
                JavaScript, React, Node.js, Express, and SQL.
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mb="6"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Mentored students and assisted with project implementations and
                code reviews.
              </ListItem>
            </List>
            <Heading
              size="lg"
              fontSize="19px
            "
            >
              Full-Stack Web Developer (Internship)
            </Heading>
            <Text
              fontSize="19px
            "
            >
              Ashewa Technologies SC (2019 - 2022)
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="3"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Built responsive and dynamic user interfaces with CSS3, Material
                UI, and Bootstrap.
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="4"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Collaborated with cross-functional teams to design, develop, and
                test applications.
              </ListItem>
            </List>

            <Heading
              size="lg"
              fontSize="19px
            "
              mt="8"
            >
              {" "}
              Education
            </Heading>

            <Text
              fontSize={{
                base: fontSize.base,
                md: fontSize.md,
                lg: fontSize.lg,
              }}
              mt="8"
            >
              Maharishi International University
            </Text>

            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Master of Science in Software Development
              </ListItem>
            </List>

            <Text
              fontSize={{
                base: fontSize.base,
                md: fontSize.md,
                lg: fontSize.lg,
              }}
              mt="5"
            >
              University of Gondar
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Bachelor of Arts in Accounting
              </ListItem>
            </List>

            <Heading
              size="lg"
              fontSize="19px
            "
              mt="8"
            >
              Technical Projects
            </Heading>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="6"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Self-Service App (UNFI Foods)
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Agent Web Portal (MetLife Insurance)
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{
                  base: fontSize.base,
                  md: fontSize.md,
                  lg: fontSize.lg,
                }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Customer Web Portal (MetLife Insurance)
              </ListItem>
            </List>
            <Box mt="10" color="purple.500">
              <Link href={resume} download={resume} isExternal>
                <Flex>
                  <FaFileDownload />
                  <Box ml="3">Download Resume </Box>
                </Flex>
              </Link>
            </Box>
          </MotionBox>
        </Flex>
      </Box>
    </Container>
  );
};

export default Resume;
