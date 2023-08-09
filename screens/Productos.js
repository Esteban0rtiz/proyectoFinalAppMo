import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native'
import ProductosJSON from "../data/Productos 2.json"
import Tarjeta from '../components/Tarjeta'

export default function Productos() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Listado de productos</Text>
            <View style={{ witdh: "100%" }}>
                <FlatList 
                    data={ProductosJSON.productos}
                    renderItem={({ item }) => (
                        <Tarjeta datos={item}/>
                        
                    )}
                    
                    numColumns={2}

                />
            </View>
            <View style={styles.separator} lightColor="#fff" darkColor="rgba(255,255,255,0.3)" />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#000',
    },
    titulo: {
        backgroundColor: '#000',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    descripcion: {
        backgroundColor: '#000',
        color: 'white',
        fontSize: 30,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
    img1: {
        width: 200,
        height: 150
    },
    contenedorimagenes: {
        flexDirection: 'row'
    },
});