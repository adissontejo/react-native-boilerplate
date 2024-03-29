import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '~/pages';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default Routes;
