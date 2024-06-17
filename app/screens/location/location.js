import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function WeaterScreen({ navigation }) {
  return (
    <LinearGradient style={styles.container} colors={["#2E335A", "#1C1B33"]}>
      <Text>Location</Text>
      {/*<Button
        title="Pergi ke Progate"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />*/}
      <StatusBar style="auto" />
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
