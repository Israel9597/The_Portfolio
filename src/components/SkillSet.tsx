import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "./skills.css";
import React from "react";
interface skills {
  id: number;
  skill: string;
  name: string;
}

interface Props {
  skills: skills[];
}
const SkillSet = ({ skills }: Props) => {
  const leftSkills = skills.filter(
    (left) => left.id >= 1 && left.id <= skills.length
  );

  return (
    <Box
      className="logo-container"
      width="100%"
      overflow="hidden"
      bg="blackAlpha.600"
      opacity="0.85"
      mb="-1%"
      height="150px"
      color="white"
    >
      <Box className="parent" position="relative" width="200%">
        <Flex className="logo-slider-right" w="200%" p="1%">
          {/* First set of logos */}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}

          {leftSkills.map((skill) => (
            <React.Fragment key={skill.id}>
              <Image
                boxSize="60px"
                objectFit="cover"
                src={skill.skill}
                opacity="1"
              />
              <Text
                fontWeight="800"
                fontSize="2xl"
                mr="0.2%"
                ml="0.2%"
                whiteSpace="nowrap"
              >
                {skill.name}
              </Text>
            </React.Fragment>
          ))}
        </Flex>
        {/* Duplicate the logos for seamless looping */}
      </Box>
    </Box>
  );
};

export default SkillSet;
