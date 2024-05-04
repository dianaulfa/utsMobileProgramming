import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import About from './screens/About';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'black'}}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({size, color,}) => (
            <MaterialCommunityIcons name="emoticon" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App