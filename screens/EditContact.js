import * as React from 'react';
import { useState, useEffect } from 'react';
import { Button, View, Alert } from 'react-native';
import { Header, Input, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';
import axios from 'axios';

const testeServico = "http://professornilson.com/testeservico/clientes"

function EditContactScreen({route, navigation }) {
    const Stack = createNativeStackNavigator();
    //dados do contato
    const {id, nome, cpf, email, telefone, id_usuario, data} = route.params;

    //dados da tela
    const [contactId,setContactId]= useState(id);
    const [contactNome,setContactNome]= useState(nome);
    const [contactCpf,setContactCpf]= useState(cpf);
    const [contactEmail,setContactEmail]= useState(email);
    const [contactTelefone,setContactTelefone]= useState(telefone);
    const [contactIdUsuario,setContactIdUsuario]= useState(id_usuario);
    const [contactDataCadastro,setContactDataCadastro]= useState(data);

    //fazer link para o axios
    function makeLink(thisid){
      return (testeServico + "/" + thisid)
    }

    //mensagem de confirmação
    function operationAlert (text) {
      Alert.alert(
        text,
        "",
        [ { text: "OK", onPress: () => navigation.navigate('Contacts')} ]
      );
    }

    function editContact(editid){

      var link = makeLink(editid);

      axios.put(link,{
          nome:contactNome,
          cpf:contactCpf,
          email:contactEmail,
          telefone:contactTelefone,
          id_usuario:contactIdUsuario,
          datacadastro:contactDataCadastro 
      }).then(function(response){
          operationAlert ("Seu contato foi salvo");
          console.log(response);
      }).catch(function(error){
          operationAlert ("Ocorreu um erro, favor tentar novamente");
          console.log(error);
      })
    }
    
    //funciona
    function deleteContact(deleteid){

        var link = makeLink(deleteid);

        axios.delete(link)
        .then(function(response){
          operationAlert ("Seu contato foi excluído");
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
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Editar contato', style: { color: '#fff' } }}
        />

        <View style={{marginTop: 50}}>
            <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'lightblue'}}
                onPress={() => getContact(contactId)}
                activeOpacity={1.0}
                containerStyle={{flex: 0, marginBottom: 10}}
            />
        </View>

        <Input
            name='nome'
            placeholder={contactNome}
            inputStyle={{marginTop:50}}
            value={contactNome}
            onChangeText={nome => setContactNome(nome)}
            />
        <Input
            name='email'
            placeholder={contactEmail}
            value={contactEmail}
            onChangeText={email => setContactEmail(email)}
            />
        <Input
            name='telefone'
            placeholder={contactTelefone}
            value={contactTelefone}
            onChangeText={telefone => setContactTelefone(telefone)}
            />

        <View style={{marginTop: 50}}>
            <Button title="Salvar" onPress={() => editContact(contactId)} />
        </View>
        <View style={{marginTop: 50}}>
            <Button title="Deletar contato" onPress={() => deleteContact(contactId)} />
        </View>

      </View>
    );
  }

  export default EditContactScreen;