import * as React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import ContactsScreen from './Contacts';
import RegistrationScreen from './Registration';



function LoginScreen({ navigation }) {
    
    const Stack = createNativeStackNavigator();

    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");
    const [error, setError] = useState(false);


    //login cadastrado para teste:
    //login -> teste@gmail.com
    //senha -> teste123
    
    function loginFirebase(){
        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                setError(false);
                console.log("conectado");
                const user = userCredential.user;
                navigation.navigate('Contacts');
                
            })
            .catch((error) => {
                setError(true);
                console.log("não conectado");
                const errorCode = error.code;
                const errorMessage = error.message;
        });     
    }


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
            value={email}
            onChangeText={email => setEmail(email)}
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
            secureTextEntry={false}
            value={senha}
            onChangeText={senha => setSenha(senha)}
            leftIcon={
                <Icon
                    name='lock'
                    size={20}
                    color='black'
                />
            }/>
        
        <Text style={{color:'red'}}>{error ? "Credenciais incorretas" : ""}</Text>

        <View style={{marginBottom: 15}}>
            <Button
                title="Login"
                onPress={() => loginFirebase()} />  
        </View>

            <Button
                title="Cadastro"
                onPress={() => navigation.navigate('Registration')} />

      </View>
    );
  }

  export default LoginScreen;