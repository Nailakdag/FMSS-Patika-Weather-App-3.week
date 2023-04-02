import { Select } from "@chakra-ui/react";
import React from "react";
import { citiesInfo } from "../../citiesInfo";
import { MainContext } from "../../context/MainContext";

const SearchBox = () => {
  const { city, setCity } = MainContext();
  return (
    <Select value={city} onChange={(e) => setCity(e.target.value)}>
      {citiesInfo.map((city) => (
        <option key={city.id} value={city.name}>
          {city.name}
        </option>
      ))}
    </Select>
  );
};

export default SearchBox;
