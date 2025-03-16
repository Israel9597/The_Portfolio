import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import "./resume.css";
import { MdCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

const Resume = () => {
  const MotionBox = motion(Box);
  const xValue = useBreakpointValue({ base: 18, md: "80", lg: 100 });
  return (
    <Container
      maxW="100%"
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
          fontSize="60px"
        >
          Resume
        </Text>
      </MotionBox>

      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          width={{ base: "100%", md: "100%", lg: "100%" }}
        >
          <MotionBox
            animate={{ x: xValue }}
            transition={{ type: "spring", stiffness: 20 }}
            className="text-[30px] font-bold capitalize"
            width={{ base: "100%", md: "40%", lg: "50%" }} // Use percentages for responsive width
            pl={{ base: "3%", md: "2%" }} // Adjust padding for mobile
            pr={{ base: "3%" }}
          >
            <Heading size="lg" fontSize="30px" mt="8">
              {" "}
              Summary
            </Heading>

            <Text fontSize="21px" mt="8">
              Motivated and experienced Full-Stack Web Developer with 4 years of
              hands-on experience in designing and developing scalable,
              responsive web applications using React, Node.js, and modern web
              technologies. Proven ability to work in DevOps environments
              utilizing CI/CD pipelines, agile development, test-driven
              development and learn emerging technologies.Skilled at strong
              problem solving, working independently, verbal communication and
              delivering innovative solutions to meet business objectives.
            </Text>
            <Heading size="lg" fontSize="30px" mt="8">
              Professional Experience
            </Heading>

            <Heading size="lg" fontSize="25px" mt="4">
              IT support
            </Heading>

            <Text fontSize="25px">Gihon Tech (2024-present)</Text>

            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Leading, maintaining, and developing a startup company's website
                using modern web application development tools and technologies
                to deliver a seamless, scalable, and user-friendly digital
                experience
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Collaborating with design teams and stakeholders to review UX
                designs, coordinating with backend teams to evaluate API
                documentation, ensuring seamless integration and optimal
                performance, and selecting robust libraries to enhance
                scalability and performance.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Managing the daily routines of the Software Development Life
                Cycle (SDLC) to ensure the timely and high-quality delivery of
                websites, while maintaining a focus on efficiency,
                collaboration, and continuous improvement.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Implemented Continuous Integration and Continuous Deployment
                (CI/CD) pipelines, collaborating closely with the DevOps team to
                ensure timely and efficient delivery of software updates and
                improvements.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Debugging , troubleshooting and improving performance of
                applications for better user experience.
              </ListItem>
            </List>

            <Heading size="lg" fontSize="25px" mt="8">
              IT Analyst
            </Heading>
            <Text fontSize="25px">
              Tata Consultancy Services ( 2022 - 2024 )
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Developed and maintained enterprise-level responsive web
                applications using React.js and TypeScript, improving use
                engagement by 20% and ensuring consistency and highly performing
                application in all devices.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Implemented new libraries React query/ Tanstack for data
                fetching, lazy loading(infinite loading), caching , pagination
                which optimize performance with 30%.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Implemented CI/CD pipelines using GitLab and Azure DevOps,
                reducing deployment time by 25%.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Debugging , troubleshooting and improving performance of
                applications for better user experience.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Applied Data driven form library for creation, validation, and
                submission of forms.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Write quality code with best standards and follow best practices
                on structure and maintainability as per the business standards.
              </ListItem>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Collaborate with the design team, business analyst team, quality
                assurance team,back-end team, product owner to achieve the
                project goal.
              </ListItem>
            </List>
            <Heading size="lg" fontSize="25px" mt="4">
              Assistant Instructor
            </Heading>
            <Text fontSize="25px">
              Evangadi Networks BootCamp ( 2022 - 2024 )
            </Text>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Taught full-stack development courses covering HTML, CSS,
                JavaScript, React, Node.js, Express, and SQL.
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mb="6"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Mentored students and assisted with project implementations and
                code reviews.
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
            <Heading size="lg" fontSize="25px" mt="10%">
              Full-Stack Web Developer (Internship)(2019 - 2022)
            </Heading>
            <Text fontSize="25px">Ashewa Technologies SC</Text>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="8"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Built responsive and dynamic user interfaces with CSS3, Material
                UI, and Bootstrap.
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="4"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Collaborated with cross-functional teams to design, develop, and
                test applications.
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="4"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Integrated MongoDB databases and RESTful APIs for data
                management.
              </ListItem>
            </List>

            <Heading size="lg" fontSize="25px" mt="8">
              {" "}
              Education
            </Heading>

            <Text fontSize={{ base: "18px", md: "19px", lg: "21px" }} mt="8">
              Maharishi International University
            </Text>

            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Master of Science in Software Development
              </ListItem>
            </List>

            <Text fontSize={{ base: "18px", md: "19px", lg: "21px" }} mt="5">
              University of Gondar
            </Text>
            <List spacing={3}>
              <ListItem fontSize={{ base: "18px", md: "19px", lg: "21px" }}>
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Bachelor of Arts in Accounting
              </ListItem>
            </List>

            <Heading size="lg" fontSize="25px" mt="8">
              Technical Projects
            </Heading>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="6"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Self-Service App (UNFI Foods)
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Agent Web Portal (MetLife Insurance)
              </ListItem>
            </List>
            <List spacing={3}>
              <ListItem
                fontSize={{ base: "18px", md: "19px", lg: "21px" }}
                mt="2"
              >
                <ListIcon as={MdCheckCircle} color="purple.500" />
                Customer Web Portal (MetLife Insurance)
              </ListItem>
            </List>
          </MotionBox>
        </Flex>
      </Box>
    </Container>
  );
};

export default Resume;
