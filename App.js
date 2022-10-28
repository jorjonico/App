import { Button, StyleSheet, TextInput, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <TextInput placeholder='Agregar item a la lista' style={styles.inputItem}/>
        <Button title='Agregar' color= 'cornflowerblue'/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 30, 
    marginTop: 50,
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
    marginRight: 20
  },
});
