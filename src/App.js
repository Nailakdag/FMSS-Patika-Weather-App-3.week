import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./compenents/Header";
import SearchBox from "./compenents/SearchBox";
import DailyInfo from "./compenents/DailyInfo";

const App = () => {
  return (
    <Box
      bgImage="url(/arkaplan.jpg)"
      bgPosition="center"
      w="100%"
      h="100vh"
      bgRepeat={"no-repeat"}
      bgSize="cover"
    >
      <Header />
      <SearchBox />
      <DailyInfo />
    </Box>
  );
};

export default App;
