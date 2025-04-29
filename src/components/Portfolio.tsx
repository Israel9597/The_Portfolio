import {
  Box,
  Card,
  CardBody,
  Container,
  Text,
  Heading,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";

const Portfolio = () => {
  const MotionBox = motion(Box);

  return (
    <Container maxW="100%" className="portfolio" centerContent pt="10">
      <MotionBox
        className="flex items-center justify-center text-white w-[200px] h-[200px] rounded-full bg-black"
        animate={{ y: 20 }}
        transition={{ type: "spring", stiffness: 10 }}
      >
        <Heading
          size="lg"
          fontSize="40px"
          mt="5"
          mb="10"
          bgGradient="linear(to-l, rgb(145, 231, 151),rgb(0, 200, 255))"
          bgClip="text"
        >
          Portfolio
        </Heading>
      </MotionBox>

      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
        width={{ base: "100%", lg: "80%" }}
      >
        {portfolioData.map((portfolio) => (
          <Box
            borderRadius="10px"
            mb={{ base: "10%", md: "2%" }}
            key={portfolio.id}
          >
            <Card
              overflow="hidden"
              maxW="xs"
              bg="gray.900"
              h={{ lg: "530px" }}
              color="whiteAlpha.900"
            >
              {(portfolio.imageName == "The Game Hub" && (
                <Link href="https://the-game-pjct.vercel.app/" isExternal>
                  <Image src={portfolio.cardImage} />
                </Link>
              )) ||
                (portfolio.imageName == "Netflix Clone" && (
                  <Link
                    href="https://netflix-clone-96f00.firebaseapp.com/"
                    isExternal
                  >
                    <Image src={portfolio.cardImage} />
                  </Link>
                )) ||
                (portfolio.imageName == "Apple Front Page Clone" && (
                  <Link
                    href="https://izzy-apple-project.netlify.app/"
                    isExternal
                  >
                    <Image src={portfolio.cardImage} />
                  </Link>
                ))}
              <CardBody key={portfolio.id}>
                {(portfolio.imageName == "The Game Hub" && (
                  <Link href="https://the-game-pjct.vercel.app/" isExternal>
                    <Heading mb="2%" fontSize={{ base: "md", lg: "xl" }}>
                      {portfolio.imageName}
                    </Heading>
                  </Link>
                )) ||
                  (portfolio.imageName == "Netflix Clone" && (
                    <Link
                      href="https://netflix-clone-96f00.firebaseapp.com/"
                      isExternal
                    >
                      {" "}
                      <Heading mb="2%" fontSize={{ base: "md", lg: "xl" }}>
                        {portfolio.imageName}
                      </Heading>
                    </Link>
                  )) ||
                  (portfolio.imageName == "Apple Front Page Clone" && (
                    <Link
                      href="https://izzy-apple-project.netlify.app/"
                      isExternal
                    >
                      {" "}
                      <Heading mb="2%" fontSize={{ base: "md", lg: "xl" }}>
                        {portfolio.imageName}
                      </Heading>
                    </Link>
                  ))}
                <Text fontSize={{ base: "sm", lg: "sm" }}>
                  {portfolio.description}
                </Text>
                <Heading mb="2%" fontSize={{ base: "sm", lg: "md" }} mt="2%">
                  {portfolio.stackUsed}
                </Heading>
                <Text fontSize={{ base: "sm", lg: "sm" }}>
                  {portfolio.techStack}
                </Text>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Portfolio;
