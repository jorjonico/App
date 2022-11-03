import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onHandleChangeItem = (t) => {
    setTextItem(t);
  };

  const addItem = () =>{
    setItemList (currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value:textItem}
    ])
    setTextItem('')
  };
  
  const renderItem = ({item}) => (
    <View style={styles.itemstyle}>
    <Text>{item.value}</Text>
    </View> );


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista del Super 🛒</Text>
      <View style={styles.itemContainer}>
        <TextInput value={textItem} placeholder='Agregar item a la lista' style={styles.inputItem} onChangeText={onHandleChangeItem}/>
        <Button title='Agregar' color= 'cornflowerblue' onPress={addItem}/>
      </View>
      <View>
        <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 30, 
    marginTop: 50,
    marginBottom: 150,
  },
  titulo:{
    fontSize: 20,
    marginLeft: 15,
    paddingBottom: 20,
  },
  itemContainer:{
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputItem:{
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    width: 200, 
    marginRight: 20,
  },
  itemstyle:{
    marginLeft: 20,
    paddingTop: 10,
  },
});

{/*       <View>
        {itemList.map((item) => (
          <View style={styles.itemstyle}>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View> */}
