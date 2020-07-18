import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
/* screens */
import IndexScreen from '../screens/IndexScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateScreen from '../screens/CreateScreen';

const Stack = createStackNavigator();

const IndexStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const DetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
};

const CreateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create" component={CreateScreen} />
    </Stack.Navigator>
  );
};

const headerStyle = {
  headerStyle: {
    backgroundColor: '#ff9800',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default AppNavigaotor = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{title: 'ライブ一覧', ...headerStyle}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'ライブ詳細', ...headerStyle}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'ライブを作る', ...headerStyle}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
