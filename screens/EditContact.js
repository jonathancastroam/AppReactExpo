import * as React from 'react';
import { Button, View } from 'react-native';
import { Header, Input, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function EditContactScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.navigate('Contacts') }}
          centerComponent={{ text: 'Editar contato', style: { color: '#fff' } }}
        />

        <View style={{marginTop: 50}}>
            <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'lightblue'}}
                onPress={() => console.log("Works!")}
                activeOpacity={1.0}
                containerStyle={{flex: 0, marginBottom: 10}}
            />
        </View>

        <Input
            name='nome'
            placeholder='NOME'
            inputStyle={{marginTop:50}}
            />
        <Input
            name='email'
            placeholder='EMAIL'
            />
        <Input
            name='telefone'
            placeholder='TELEFONE'
            />

        <View style={{marginTop: 50}}>
            <Button title="Salvar" onPress={() => navigation.goBack()} />
        </View>

      </View>
    );
  }

  export default EditContactScreen;