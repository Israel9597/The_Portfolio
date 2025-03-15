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
import * as anime from "motion/react-client";

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
          fontSize="70px"
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
            <anime.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Card
                overflow="hidden"
                maxW="sm"
                bg="blackAlpha.900"
                sx={{
                  boxShadow: "1px 1px 15px 5px rgba(65, 29, 157, 0.84)",
                }}
                h={{ lg: "630px" }}
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
                      <Heading mb="2%" fontSize={{ base: "xl", lg: "2xl" }}>
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
                        <Heading mb="2%" fontSize={{ base: "xl", lg: "2xl" }}>
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
                        <Heading mb="2%" fontSize={{ base: "xl", lg: "2xl" }}>
                          {portfolio.imageName}
                        </Heading>
                      </Link>
                    ))}
                  <Text fontSize={{ base: "sm", lg: "md" }}>
                    {portfolio.description}
                  </Text>
                  <Heading mb="2%" fontSize={{ base: "md", lg: "xl" }} mt="2%">
                    {portfolio.stackUsed}
                  </Heading>
                  <Text fontSize={{ base: "sm", lg: "md" }}>
                    {portfolio.techStack}
                  </Text>
                </CardBody>
              </Card>
            </anime.div>
          </Box>
        ))}
      </Flex>
    </Container>
  );
};

export default Portfolio;
