import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';

import AddContactScreen from './AddContact';
import EditContactScreen from './EditContact';
//------------------------------------------------------------------------------

const testeServico = "http://professornilson.com/testeservico/clientes"


export default function ContactsScreen({ navigation, props }) {
  
  const Stack = createNativeStackNavigator();
  const [data,setData] = useState([]);  

  function getContacts(link){
    axios.get(link).
            then(function(response){
                setData(response.data);
                ToastAndroid.show('Atualizado', ToastAndroid.SHORT);
            }).catch(function(error){
                console.log(error);
            })
  }

  useEffect(() => {
    getContacts(testeServico);
  }, []);
  

  function openContact(l){
    navigation.navigate('EditContact',
                        {id: l.id, 
                        nome:l.nome, 
                        cpf:l.cpf, 
                        email:l.email, 
                        telefone:l.telefone, 
                        id:l.id_usuario, 
                        data:l.datacadastro})
  }

    return (
      <View style={{flex:1}}>
        <Stack.Screen name="AddContact" component={AddContactScreen} />       
        <Stack.Screen name="EditContact" component={EditContactScreen} /> 
        
        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' }}}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => navigation.navigate('AddContact') }}
        />

          <ScrollView style={{flex:1}} >
            {data.map((l, i) => (
                <ListItem 
                  key={i} bottomDivider
                  onPress={()=>openContact(l)}>
                  <Avatar source={{uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png'}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.nome}</ListItem.Title>
                    <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron/>
                </ListItem>
              ))
            }
          </ScrollView>


      </View>
    );
  };


