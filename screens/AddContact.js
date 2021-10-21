import * as React from 'react';
import { Button, View } from 'react-native';
import { Header, Input } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function AddContactScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.navigate('Contacts') }}
          centerComponent={{ text: 'Adicionar contato', style: { color: '#fff' } }}
        />
        <Input
            name='nome'
            placeholder='NOME'
            inputStyle={{marginTop:100}}
            />
        <Input
            name='email'
            placeholder='EMAIL'
            />
        <Input
            name='telefone'
            placeholder='TELEFONE'
            />
        <Button title="Salvar" onPress={() => navigation.goBack()} />

      </View>
    );
  }

  export default AddContactScreen;