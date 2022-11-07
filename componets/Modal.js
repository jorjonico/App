import { Modal as NewModal, Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Modal = (props) => {
    const {isVisible, notVisible, actionDeleteItem} = props
    return (
            <NewModal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            notVisible(!isVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Quieres eliminar este elemento?</Text>
                <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => notVisible(!isVisible)}>
                    <Text style={styles.textStyle}>NO</Text>
                </Pressable>
                <Pressable
                    style={[styles.button, styles.buttonDelete]}
                    onPress={() => actionDeleteItem()}>
                    <Text style={styles.textStyle}>SI, ELIMINAR</Text>
                </Pressable>
            </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
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
})