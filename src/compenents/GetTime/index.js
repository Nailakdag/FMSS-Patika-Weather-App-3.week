// Datadan dönen tarihin hangi güne denk geldiğini gösteren fonksiyon
const getDayName = (dayData) => {
  const now = new Date(dayData);
  const days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];
  let day = days[now.getDay()];
  return day;
};

export default getDayName;
