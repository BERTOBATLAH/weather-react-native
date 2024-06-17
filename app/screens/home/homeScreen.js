import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import { Background, HouseImage } from "../../../assets";
import SwipeUp from "../../components/BottomSheet/BottomSheet";

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={Background} style={styles.image}>
      <View style={styles.houseContainer}>
        <ImageBackground source={HouseImage} style={styles.houseImage}>
          <Text style={styles.text}>HomeScreen</Text>
          <Button
            title="Pergi ke Progate"
            onPress={() => {
              navigation.navigate("Weather");
            }}
          />
        </ImageBackground>
      </View>
      <SwipeUp></SwipeUp>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  houseContainer: {
    position: "absolute",
    top: 304,
    justifyContent: "center",
    alignItems: "center",
  },
  houseImage: {
    width: 390,
    height: 390,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
