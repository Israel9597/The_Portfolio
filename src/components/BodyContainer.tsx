import { useState } from "react";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import { Box, Hide, Show } from "@chakra-ui/react";
import Home from "./Home";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import NavBar from "./NavBar";
import ResponsiveNav from "./ResponsiveNav";

import Contact from "./Contact";
import React from "react";

const BodyContainer = () => {
  const [showNav, setShowNav] = useState<boolean>();

  return (
    <>
      <Show below="md">
        <Box
          position="sticky" // Make the navbar sticky
          top="1" // Stick to the top of the viewport
          zIndex="1"
          onClick={() => setShowNav(!showNav)}
          sx={{ backgroundColor: showNav && "blackAlpha.700" }}
        >
          {showNav ? (
            <IoClose
              size={40}
              style={{
                color: "gray",
              }}
            />
          ) : (
            <IoReorderThreeOutline
              size={40}
              style={{ color: "gray" }}
              onClick={() => setShowNav(true)}
            />
          )}
        </Box>
      </Show>

      <Hide below="md">
        <Box
          position="sticky" // Make the navbar sticky
          top="1" // Stick to the top of the viewport
          zIndex="1"
          h="80px"
          opacity="0.9"
          bg="gray.700"
        >
          <NavBar />
        </Box>
      </Hide>
      <Show below="md">{showNav && <ResponsiveNav />}</Show>
      <div id="home">
        <Home />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default BodyContainer;
