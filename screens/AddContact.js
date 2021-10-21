import * as React from 'react';
import { Button, View } from 'react-native';
import { Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function AddContactScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.navigate('Contacts') }}
          centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
        />

        <Button title="Save" onPress={() => navigation.goBack()} />

      </View>
    );
  }

  export default AddContactScreen;