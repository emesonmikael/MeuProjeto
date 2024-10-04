import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage'; // Página de Login
import PrincipalPage from './PrincipalPage'; // Página Principal
import SubscriberSystem from './SubscriberSystem'; // Sistema de Assinantes

const Stack = createStackNavigator();
registerRootComponent(App);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Principal"
          component={PrincipalPage}
          options={{ title: 'Página Principal' }}
        />
        <Stack.Screen
          name="SubscriberSystem"
          component={SubscriberSystem}
          options={{ title: 'Sistema de Assinantes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;