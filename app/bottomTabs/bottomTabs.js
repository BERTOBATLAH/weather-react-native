import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Image } from "react-native";

function MyTabBar({ state, descriptors, navigation }) {
  const Icon = ({ label, focus }) => {
    switch (label) {
      case "Home":
        return (
          <Image
            source={require("./assets/Icon/List.png")}
            style={{ width: 50, height: 50 }}
          />
        );
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#11111",
        paddingVertical: 30,
        paddingHorizontal: 50,
        justifyContent: "space-between",
        borderRadius: 15,
        left: 20,
        right: 20,
        bottom: 25,
        elevation: 0,
        height: 90,
        position: "absolute",
      }}
    >
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
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;
