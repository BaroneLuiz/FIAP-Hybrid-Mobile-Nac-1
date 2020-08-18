import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{}}>
        <Screen name='Login' component={Login} />
        <Screen name='Register' component={Register} />
        <Screen name='Home' component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
