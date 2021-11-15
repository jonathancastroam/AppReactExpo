import * as React from 'react';
import { useState } from 'react';
import { Button, View, Alert } from 'react-native';
import { Header, Input } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import gerarCpf from '../components/gerarCPF';

import ContactsScreen from './Contacts';

const testeServico = "http://professornilson.com/testeservico/clientes"




  export default function AddContactScreen({ navigation }) {
    
    const Stack = createNativeStackNavigator();

    const [contactNome,setNome] = useState("");
    const [contactEmail,setEmail] = useState("");
    const [contactTelefone,setTelefone] = useState("");

    function operationAlert (text) {
      Alert.alert(
        text,
        "",
        [ { text: "OK", onPress: () => navigation.navigate('Contacts') } ]
      );}

    //funciona
    function insertContact(link){

      const cpf = gerarCpf();

      axios.post(link,{ 
          nome:contactNome,
          telefone:contactTelefone,
          email:contactEmail,
          cpf:cpf
      }).then(function(response){
          operationAlert ("Seu contato foi salvo");
          console.log(response);
      }).catch(function(error){
          operationAlert ("Ocorreu um erro, favor tentar novamente");
          console.log(error);
      })
    }

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
            value={contactNome}
            onChangeText={nome => setNome(nome)}
            />
        <Input
            name='email'
            placeholder='EMAIL'
            value={contactEmail}
            onChangeText={email => setEmail(email)}
            />
        <Input
            name='telefone'
            placeholder='TELEFONE'
            value={contactTelefone}
            onChangeText={telefone => setTelefone(telefone)}
            />
            
        <View style={{marginTop: 50}}>
            <Button title="Salvar" onPress={() => insertContact(testeServico)} />
        </View>

      </View>
    );
  }
