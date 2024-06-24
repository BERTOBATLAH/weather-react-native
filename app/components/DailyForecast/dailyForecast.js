import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DailyForecast = ({ forecastData }) => {
  return (
    <View style={styles.container}>
      {forecastData.map((day, index) => (
        <View key={index} style={styles.day}>
          <Text style={styles.date}>{day.date}</Text>
          <Text style={styles.temp}>{day.temp}°C</Text>
          <Text style={styles.condition}>{day.condition}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  day: {
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  temp: {
    fontSize: 14,
  },
  condition: {
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default DailyForecast;
