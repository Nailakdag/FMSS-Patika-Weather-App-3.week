import React, { useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import axios from "axios";
import { Box, Image } from "@chakra-ui/react";
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
    <Box>
      {Object.entries(groupedData).map(([dayName, data]) => (
        <Box key={dayName}>
          <Box>{dayName}</Box>
          {data.map((item, index) => (
            <Box key={index}>
              <Box>{item.dt_txt}</Box>
              <Box>{item.weather[0].description}</Box>
              <Box>{Math.ceil(item.main.temp)} °C</Box>
              <Image
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default DailyInfo;
