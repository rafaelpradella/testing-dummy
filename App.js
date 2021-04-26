// In App.js in a new project
import * as React from 'react';
import MainNavigation from "./src/routes/MainNavigation";
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;