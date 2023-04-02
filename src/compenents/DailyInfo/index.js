import React, { useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import { Box, Image, HStack, Text } from "@chakra-ui/react";
import getDayName from "../GetTime";

const DailyInfo = () => {
  const { city, weatherData, setWeatherData } = MainContext();
  const groupedData = {};

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=tr&appid=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setWeatherData(res?.data?.list));
  }, [city]);

  // Verileri gün adına göre kümele
  weatherData.forEach((data) => {
    const dayName = getDayName(data.dt_txt);
    if (!groupedData[dayName]) {
      groupedData[dayName] = [];
    }
    groupedData[dayName].push(data);
  });

  return (
    <Box width={{ base: "90%", md: "80%", lg: "60%" }}>
      {Object.entries(groupedData).map(([dayName, data], index) => (
        <Box
          key={index}
          my={2}
          py={3}
          bg="transparent"
          borderRadius="md"
          boxShadow="md"
          textAlign="center"
          overflow="auto"
          flexShrink={0}
        >
          <Text fontWeight="bold" fontSize="lg" mb={{ base: 2, sm: 3 }}>
            {dayName}
          </Text>
          <HStack
            align="flex-start"
            whiteSpace="nowrap"
            spacing={{ base: 4, sm: 6 }}
            justifyContent="flex-start"
          >
            {data.map((item, index) => (
              <Box key={index} mx={{ base: 1, sm: 2 }}>
                <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="semibold">
                  {item.dt_txt.split(" ")[1]}
                </Text>
                <Image
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  boxSize={{ base: "30px", sm: "50px" }}
                  mx="auto"
                  mb={2}
                />
                <Text fontSize={{ base: "xs", sm: "sm" }} fontWeight="semibold">
                  {item.weather[0].description}
                </Text>
                <Text fontSize={{ base: "xs", sm: "sm" }}>
                  {Math.ceil(item.main.temp)} °C
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>
      ))}
    </Box>
  );
};

export default DailyInfo;
