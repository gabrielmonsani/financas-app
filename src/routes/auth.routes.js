import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { Platform } from 'react-native';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: '#3b3dbf',
            borderbottomWidth: 1,
            borderBottomColor: '#00b94a',
          },
          headerTintColor: '#fff',
          headerBackVisible: Platform.OS === 'ios' ? false : true,
          title: 'Voltar',
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;