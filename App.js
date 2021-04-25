// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/screens/Home";
import AccountDetails from "./src/screens/AccountDetails";

const Stack = createStackNavigator();

console.warn(Home, AccountDetails)

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Details" 
          component={AccountDetails} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;