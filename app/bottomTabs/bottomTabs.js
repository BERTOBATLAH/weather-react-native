import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ButtonTab, ListButton, LocationButton } from "./../../assets"; // Pastikan path menuju gambar sudah benar

function MyTabBar({ state, descriptors, navigation }) {
  const Icon = ({ label }) => {
    switch (label) {
      case "Location":
        return <Image source={LocationButton} style={styles.icon} />;
      case "Home":
        return (
          <Image
            source={ButtonTab}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        );
      case "Weather":
        return <Image source={ListButton} style={styles.icon} />;
      default:
        return "Home";
    }
  };

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}
          >
            <Icon label={label} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "grey",
    border: 2,
    radius: 3,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    x: 0,
    y: 0,
    marginVertical: 0,
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 25,
    //flexDirection: "row",
    //backgroundColor: "grey",
    //shadowOpacity: 0.3,
    //paddingVertical: 10,
    //paddingHorizontal: 25,
    //x: 0,
    //y: 0,
    //justifyContent: "space-between",
    ////alignItems: "center",
    //marginVertical: 5,
    //borderRadius: 15,
    //marginHorizontal: 20,
    //position: "absolute",
    //bottom: 0,
    //height: 70,
    //width: "100%",
    //elevation: 1,
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default MyTabBar;
