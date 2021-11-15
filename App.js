import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from "firebase/app";
  

import LoginScreen from './screens/Login';
import ContactsScreen from './screens/Contacts';
import RegistrationScreen from './screens/Registration';
import AddContactScreen from './screens/AddContact';
import EditContactScreen from './screens/EditContact';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }}/>
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Save" component={ContactsScreen} />
      <Stack.Screen name="AddContact" component={AddContactScreen} />
      <Stack.Screen name="EditContact" component={EditContactScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAE6-HMLydOkWNnD4wk34Oao6Z26PIu-QE",
    authDomain: "appreactexpo.firebaseapp.com",
    projectId: "appreactexpo",
    storageBucket: "appreactexpo.appspot.com",
    messagingSenderId: "485630770280",
    appId: "1:485630770280:web:2b7de1bf6030d9a69b4fdd",
    measurementId: "G-QP6BELLE26"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
