/* 
   Filename: ComplexCode.js
   Content: A complex JavaScript code to simulate a weather forecasting system.
*/

// Define a WeatherData class to store weather information
class WeatherData {
  constructor(city, country, temperature, humidity, windSpeed) {
    this.city = city;
    this.country = country;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }

  getSummary() {
    console.log(`Weather in ${this.city}, ${this.country}:`);
    console.log(`Temperature: ${this.temperature}°C`);
    console.log(`Humidity: ${this.humidity}%`);
    console.log(`Wind Speed: ${this.windSpeed} km/h`);
  }

  isStormy() {
    if (this.windSpeed > 50) {
      return true;
    }
    return false;
  }
}

// Create instances of WeatherData class
const londonWeather = new WeatherData("London", "United Kingdom", 20, 75, 30);
const newYorkWeather = new WeatherData("New York", "United States", 25, 60, 40);
const tokyoWeather = new WeatherData("Tokyo", "Japan", 30, 50, 20);

// Display weather summaries
londonWeather.getSummary();
newYorkWeather.getSummary();
tokyoWeather.getSummary();

// Check if it's stormy in each city
console.log(`Is it stormy in London? ${londonWeather.isStormy()}`);
console.log(`Is it stormy in New York? ${newYorkWeather.isStormy()}`);
console.log(`Is it stormy in Tokyo? ${tokyoWeather.isStormy()}`);

// Perform more complex calculations

function calculateAverageTemperature(...weathers) {
  let sum = 0;
  for (const weather of weathers) {
    sum += weather.temperature;
  }
  return sum / weathers.length;
}

function getWindiestCity(...weathers) {
  let maxWindSpeed = -Infinity;
  let windiestCity;

  for (const weather of weathers) {
    if (weather.windSpeed > maxWindSpeed) {
      maxWindSpeed = weather.windSpeed;
      windiestCity = `${weather.city}, ${weather.country}`;
    }
  }
  return windiestCity;
}

// Calculate average temperature
const averageTemperature = calculateAverageTemperature(
  londonWeather,
  newYorkWeather,
  tokyoWeather
);
console.log(`Average Temperature: ${averageTemperature}°C`);

// Find the windiest city
const windiestCity = getWindiestCity(
  londonWeather,
  newYorkWeather,
  tokyoWeather
);
console.log(`Windiest City: ${windiestCity}`);

// Simulate complex weather changes through time
const weatherDataList = [];

function simulateWeatherChanges() {
  const cities = ["London", "New York", "Tokyo"];
  const countries = ["United Kingdom", "United States", "Japan"];

  for (let i = 0; i < 5; i++) {
    const randomCityIndex = Math.floor(Math.random() * cities.length);
    const randomCountryIndex = Math.floor(Math.random() * countries.length);
    const randomTemperature = Math.floor(Math.random() * 40) + 10;
    const randomHumidity = Math.floor(Math.random() * 90) + 10;
    const randomWindSpeed = Math.floor(Math.random() * 100) + 10;

    const weatherData = new WeatherData(
      cities[randomCityIndex],
      countries[randomCountryIndex],
      randomTemperature,
      randomHumidity,
      randomWindSpeed
    );

    weatherDataList.push(weatherData);
  }
}

simulateWeatherChanges();

console.log("Simulated Weather Data:");
for (const weatherData of weatherDataList) {
  weatherData.getSummary();
}