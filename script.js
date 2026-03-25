function getWeather() {
  const city = document.getElementById("city").value.toLowerCase();

  let result = "";

  if (city === "bangalore") {
    result = "Temperature in Bangalore: 28°C ☀️";
  } else if (city === "delhi") {
    result = "Temperature in Delhi: 32°C 🌤️";
  } else if (city === "mumbai") {
    result = "Temperature in Mumbai: 30°C 🌧️";
  }
  else if (city === "chennai") {
  result = "Temperature in Chennai: 34°C 🌞";
} else if (city === "kolkata") {
  result = "Temperature in Kolkata: 31°C ☁️";
} else {
    result = "City not found";
  }

  document.getElementById("result").innerText = result;
}