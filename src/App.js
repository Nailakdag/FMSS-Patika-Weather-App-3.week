import React from "react";

// Chakra Compenents
import { Box } from "@chakra-ui/react";

// Compenents
import Header from "./compenents/Header";
import SearchBox from "./compenents/SearchBox";
import DailyInfo from "./compenents/DailyInfo";

const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="2rem"
      alignItems="center"
      justifyContent="center"
      paddingX={{ base: "1rem", sm: "2rem", lg: "3rem" }}
      paddingY={{ base: "2rem", sm: "3rem", lg: "4rem" }}
    >
      <Header />
      <SearchBox />
      <DailyInfo />
    </Box>
  );
};

export default App;
