import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="About Astroid" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
