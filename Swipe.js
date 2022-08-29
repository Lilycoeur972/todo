import {StyleSheet,SafeAreaView, FlatList} from 'react-native';
import React from "react";
import {ListItem,Icon, Button } from '@rneui/themed';


{/* Detection de la constance Swipe:*/  }
const Swipe = ({tache, id ,suppCallback}) => {  
      
    {/* Réalisation  du Swipeable !*/ }
    
    return(<ListItem.Swipeable
      
      rightContent={() => (
        <Button
          title="Delete"
          onPress={() => suppCallback(id)}
          icon={{ name: 'delete', color: 'white' }}
          buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
        />
      )}
    >
      <Icon name="My Icon" />
      <ListItem.Content>
        <ListItem.Title>{tache}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>)
        
        
}

   

  

export default Swipe
const styles = StyleSheet.create({})