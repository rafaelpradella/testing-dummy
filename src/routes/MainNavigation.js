import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import AccountDetails from "../screens/AccountDetails";

export default function MainNavigation(){
    const Stack = createStackNavigator();

    return (
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
    )
}