import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../components/constant/constant";
import WeatherSearch from "../../components/weatherSearch/weatherSearch";
import WeatherInfo from "../../components/weatherInfor/weatherInfo";

export default function WeaterScreen({ navigation }) {
  // Definisikan state "weatherData" dan "setWeatherData"
  const [weatherData, setWeatherData] = useState();
  const [status, setStatus] = useState("");

  const searchWeather = (location) => {
    setStatus("loading");
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        // Tambahkan code di bawah
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
      });
  };

  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  return (
    <LinearGradient style={styles.container} colors={["#2E335A", "#1C1B33"]}>
      <WeatherSearch searchWeather={searchWeather} />

      <View style={styles.margintTop20}>{renderComponent()}</View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#48319D",
    alignItems: "center",
    justifyContent: "center",
  },
  weather: {},
});
