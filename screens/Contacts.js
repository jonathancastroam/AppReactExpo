import * as React from 'react';
import { View } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddContactScreen from './AddContact';
import EditContactScreen from './EditContact';

function ContactsScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    const list = [
      {
        name: 'Marcos Andrade',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '81 98855-3424'
      },
      {
        name: 'Patrícia Tavares',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '81 99876-5332'
      }
    ];

    return (
      <View>
        <Stack.Screen name="AddContact" component={AddContactScreen} />       
        <Stack.Screen name="EditContact" component={EditContactScreen} /> 
        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => navigation.navigate('AddContact') }}
        />

        <View>
          {list.map((l, i) => (
              <ListItem 
                key={i} bottomDivider
                onPress={()=>navigation.navigate('EditContact')}>
                <Avatar source={{uri: l.avatar_url}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            ))
          }
        </View>
        


      </View>
    );
  };

export default ContactsScreen;