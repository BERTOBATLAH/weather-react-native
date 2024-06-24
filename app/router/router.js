import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, WeatherScreen, LocationScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabs from "./../bottomTabs/bottomTabs";
import { useEffect } from "react";
import SwipeUp from "../components/BottomSheet/BottomSheet";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <BottomTabs {...props} />}
    >
      {/*<Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />*/}
      <Tab.Screen name="Weather" component={WeatherScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const Navigation = ({ navigation }) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace("MainApp");
      }, 1000);
    }, []);
  };
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Navigation" component={Navigation} />
      {/*<Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />*/}
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Router;
