import * as React from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ContactsScreen from './Contacts';
import RegistrationScreen from './Registration';

function LoginScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        
        <Avatar
            rounded
            size="large"
            icon={{name: 'user', type: 'font-awesome'}}
            overlayContainerStyle={{backgroundColor: 'lightblue'}}
            onPress={() => console.log("Works!")}
            activeOpacity={1.0}
            containerStyle={{flex: 0, marginBottom: 10}}
        />

        <Input
            name='login'
            placeholder=' LOGIN'
            leftIcon={
                <Icon
                    name='user'
                    size={20}
                    color='black'
                />
            }/>
        
        <Input
            name='senha'
            placeholder=' SENHA'
            leftIcon={
                <Icon
                    name='lock'
                    size={20}
                    color='black'
                />
            }/>
        

        <View style={{marginBottom: 15}}>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Contacts')} />
        </View>

            <Button
                title="Cadastro"
                onPress={() => navigation.navigate('Registration')} />

      </View>
    );
  }

  export default LoginScreen;