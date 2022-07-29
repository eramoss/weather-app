const KEY = '0af90c46b5b14a2298a201121222907';

const fetchData = async (city) => {
  const URL = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(URL);
  const data = await fetchResponse.json();
  return data;
};

export default fetchData;
