import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./app/screens/homeScreen";
import WeatherScreen from "./app/screens/weaterScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "./app/bottomTabs/bottomTabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const TabNavigation = () => {
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="weather" component={WeatherScreen} />
    </Tab.Navigator>;
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="weather" component={WeatherScreen} />
        <Stack.Screen name="navigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
