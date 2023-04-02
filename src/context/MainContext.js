import { createContext, useContext, useState } from "react";
// Context yapısı oluşturuyoruz.
const Context = createContext();

// Contexti compenentlerde çekmeyi sağlayan hook
export const MainContext = () => useContext(Context);

export const MainProvider = ({ children }) => {
  // Contextte tutulan stateler
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
