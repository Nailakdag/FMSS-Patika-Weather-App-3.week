import { createContext, useContext, useState } from "react";

const Context = createContext();

export const MainContext = () => useContext(Context);

export const MainProvider = ({ children }) => {
  const [city, setCity] = useState("İstanbul");
  const [weatherData, setWeatherData] = useState([]);
  const data = {
    city,
    setCity,
    weatherData,
    setWeatherData,
  };
  return <Context.Provider value={data}>{children}</Context.Provider>;
};
