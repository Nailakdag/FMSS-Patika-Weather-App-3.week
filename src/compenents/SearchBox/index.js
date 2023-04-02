import React from "react";

// citiesInfodan şehir datalarını alıyoruz.
import { citiesInfo } from "../../citiesInfo";

// MainContext
import { MainContext } from "../../context/MainContext";

// Chakra Compenents
import { Box, Select } from "@chakra-ui/react";

const SearchBox = () => {
  // MainContext'ten City ve setCity çekiyoruz.
  const { city, setCity } = MainContext();
  return (
    <Box textAlign="center">
      <Select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        size={{ base: "sm", md: "md" }}
        margin={{ base: "1rem 0", md: "0 1rem" }}
        variant="filled"
        pr="0"
        icon="none"
        bgColor="transparent"
        textAlign="center"
        fontSize="18px"
      >
        {citiesInfo.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SearchBox;
