import { FlatList, StyleSheet } from 'react-native'

import React from 'react'

const IndexFlatList = (props) => {
    const {itemList, renderItem} = props
    return (
        <FlatList 
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    )
}

export default IndexFlatList

const styles = StyleSheet.create({
})