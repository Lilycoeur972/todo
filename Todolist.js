import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native'
import React, { useState } from 'react'
import { Input, Icon, Button } from '@rneui/themed';
import {SpeedDial} from'@rneui/themed'
import Swipe from './Swipe';

import DialogInput from 'react-native-dialog-input';


  {/*Détection de la constance initTask.*/}

  const initTask = [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        tache: "Faire le ménage.",
      },
      {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        tache: "Faire la vaiselle.",
      },
      {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        tache: "Faire les courses.",
      },
    ];


   {/* Création de la constance TodoList.*/}
   const Todolist = () => {

    {/* Création du bouton SpeedDial */}
      
    {/* Détection de la constance getTask.*/}
    const [getTask, setTask]=useState (initTask);


    {/*Détection*/ }

    const [getText, setText ] = useState("") ;


    //Création de la  constance speeddial:

    const [open, setOpen] = React.useState(false);
    setOpen(!open)
     
    // Création d'openDialog:
    const [openDialog, setOpenDialog] = useState(false);
    setOpenDialog (!openDialog)


   {/*Mise à jour de la valeur de mon texte.*/}
      const textChange = (textValue) => { 
          console.log(" text : ",textValue);
          setText(textValue )

              
       }

     {/* Fonction ajouter todo*/ }
    const inputText = (textValue)=> { 
      console.log(textValue)
        setTask([...getTask,

            {id:getTask.length +1,
            tache:textValue
            
            
        }])

    {/* Remise à zéro de mon formulaire.*/}
  
    setText([""])

  
  }

   {/*Fonction supprimer .*/ }
   const supprimer = (id) => { 
    console.log("Le temps n'est pas beau",id)
    

     {/*détection de la constance filterTask.*/  }
  const filterTask =getTask.filter(item=>item.id!=id)
  console.log(filterTask)

  {/*mise à jour du tableau*/ } 
  setTask(filterTask)
  }
    
 return (
       /* Réalisation de la FlatList.*/

    <SafeAreaView style={styles.container}>

  
       { /*  Réalisation de la flatList Swipe */}
      
       <FlatList
        data={getTask}
        renderItem={({item}) =><Swipe tache ={item.tache} id={item.id}   suppCallback={supprimer}/>}
        keyExtractor={(item) => item.id}
        ListHeaderComponent ={<Input
            placeholder='INPUT WITH CUSTOM ICON'
            onChangeText={textChange}
            value ={getText } 
            leftIcon={

              <Icon
                name='chevron-right'
                size={24}
                color='black'
                onPress={ajouter}
                
              />}
          />}

      />

      {/* création du bouton speedDial */}

    <SpeedDial
    isOpen={open}
    icon={{ name: 'edit', color: '#fff' }}
    openIcon={{ name: 'close', color: '#fff' }}
    onOpen={() => setOpen(!open)}
    onClose={() => setOpen(!open)}
  >

    <SpeedDial.Action
      icon={{ name: 'add', color: '#fff' }}
      title="Add"
      onPress={() => setOpenDialog (!openDialog)}
    />

    <SpeedDial.Action
      icon={{ name: 'delete', color: '#fff' }}
      title="Delete"
      onPress={() => console.log('Delete Something')}
    />
    </SpeedDial>

      <DialogInput isDialogVisible={openDialog}
            title={"DialogInput 1"}
            message={"Message for DialogInput #1"}
            hintInput ={"HINT INPUT"}
            submitInput={ (inputText) => {} }
            closeDialog={ () => {}}>
    </DialogInput>
    
    </SafeAreaView>

  );
};


export default Todolist

const styles = StyleSheet.create({})