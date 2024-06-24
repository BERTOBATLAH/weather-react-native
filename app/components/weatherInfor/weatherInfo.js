import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const {
    main: { temp },
    weather,
    visibility,
    wind: { speed },
    name,
  } = weatherData;

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{name}</Text>
      <Text style={styles.temperature}>{temp} °C</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/w/${weather[0].icon}.png`,
        }}
        style={styles.weatherIcon}
      />
      <Text style={styles.weather}>{weather[0].main}</Text>
      <Text style={styles.description}>{weather[0].description}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Visibility</Text>
          <Text style={styles.detailValue}>{visibility} km</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailLabel}>Wind Speed</Text>
          <Text style={styles.detailValue}>{speed} m/s</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  temperature: {
    fontSize: 80,
    fontWeight: "bold",
    textAlign: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  weather: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  detail: {
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detailValue: {
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WeatherInfo;
