import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import AddItem from './componets/AddItem';
import IndexFlatList from './componets/Lista';
import Modal from './componets/Modal';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {
  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});

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
    <TouchableOpacity onPress={() => selectedItem(item.id)} style={styles.itemstyle}>
    <Text>✔ {item.value}</Text>
    </TouchableOpacity> );

  const selectedItem = (id) =>{
        setItemSelected (itemList.filter(item => item.id === id)[0]);
        setModalVisible(true);
    };
  
  const deleteItem = () =>{
    setItemList( currentState => currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }


  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.titulo}>Lista del Super 🛒</Text>
            <AddItem onChange={onHandleChangeItem} onAddItem={addItem} value={textItem}/>
        </View>
      <View>
        <IndexFlatList itemList={itemList} renderItem={renderItem}/>
      </View>
      <Modal isVisible={modalVisible} notVisible={setModalVisible} actionDeleteItem={deleteItem}/>
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
    fontSize: 32,
    marginLeft: 15,
    paddingBottom: 20,
    color: "royalblue",
  },
  itemstyle:{
    marginLeft: 20,
    paddingTop: 20,
},
});