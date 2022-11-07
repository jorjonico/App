import { Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Quieres eliminar este elemento?</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>NO</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonDelete]}
                onPress={() => deleteItem()}>
                <Text style={styles.textStyle}>SI, ELIMINAR</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "royalblue",
    marginBottom: 15,
  },
  buttonDelete: {
    backgroundColor: "lightslategrey",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    padding: 3,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
});
