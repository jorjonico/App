import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

import React from 'react'

const AddItem = (props) => {
    const {onChange, onAddItem, value} = props;
    
    return (
        <View style={styles.itemContainer}>
            <TextInput value={value} placeholder='Agregar item a la lista' style={styles.inputItem} onChangeText={onChange}/>
            <Button title='Agregar' color= 'cornflowerblue' onPress={onAddItem}/>
        </View>
        
    )
}

export default AddItem

const styles = StyleSheet.create({
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
})