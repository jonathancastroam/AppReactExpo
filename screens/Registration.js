import * as React from 'react';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { Input, Header } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import ContactsScreen from './Contacts';

function RegistrationScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    const [nome, setNome]=useState("");
    const [cpf, setCpf]=useState("");
    const [email, setEmail]=useState("");
    const [senha, setSenha]=useState("");
    

    function registerToFirebase(){
      
      const auth = getAuth();
      
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(email)
          navigation.navigate("Contacts");
        })
        .catch((error) => {
          console.log("erro")
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
    }

    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        
        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Criar conta', style: { color: '#fff' } }}
        />

        <Input
            name='nome'
            placeholder='NOME'
            inputStyle={{marginTop:100}}
            value={nome}
            onChangeText={nome => setNome(nome)}
            />
        <Input
            name='cpf'
            placeholder='CPF'
            value={cpf}
            onChangeText={cpf => setCpf(cpf)}
            />
        <Input
            name='email'
            placeholder='EMAIL'
            value={email}
            onChangeText={email => setEmail(email)}
            />
        <Input
            name='senha'
            placeholder='SENHA'
            secureTextEntry={true}
            value={senha}
            onChangeText={senha => setSenha(senha)}
            />

        <Button
          title="Salvar"
          onPress={() => registerToFirebase()}
        />

      </View>
    );
  }

  export default RegistrationScreen;