import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: { backgroundColor: "red" },
            headerTintColor: "white",
            drawerStyle: { backgroundColor: "#ccc" },
            drawerActiveBackgroundColor: "red",
            drawerActiveTintColor: "white",
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              drawerLabel: "Home",
              drawerIcon: ({ color, size }) => {
                return <AntDesign name="home" size={size} color={color} />;
              },
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerLabel: "New user",
              drawerIcon: ({ color, size }) => {
                return <AntDesign name="adduser" size={size} color={color} />;
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
