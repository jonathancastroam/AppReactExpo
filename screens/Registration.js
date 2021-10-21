import * as React from 'react';
import { Button, View } from 'react-native';
import { Input, Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function RegistrationScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        
        <Stack.Screen name="Save" component={ContactsScreen} />
        
        <Header
          placement="top"
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add', color: '#fff' }}
        />

        <Input
            name='nome'
            placeholder='NOME'
            inputStyle={{marginTop:100}}
            />
        <Input
            name='cpf'
            placeholder='CPF'
            />
        <Input
            name='email'
            placeholder='EMAIL'
            />
        <Input
            name='senha'
            placeholder='SENHA'
            />

        <Button
          title="Salvar"
          onPress={() => navigation.navigate('Save')}
        />

      </View>
    );
  }

  export default RegistrationScreen;