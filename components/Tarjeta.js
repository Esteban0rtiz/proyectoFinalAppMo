import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'


export default function tarjeta(props) {
    function mensaje (description){
        Alert.alert("Descripcion Producto",description)
    }
    return (
        <View style={styles.contenedor}>
            <TouchableOpacity onPress={()=>mensaje(props.datos.description)}>
                <Text style={styles.titulolista}>{props.datos.name}</Text>
                <View style={styles.fila}>
                    <Image
                        source={{ uri: props.datos.image }}
                        style={styles.imglista}
                    />
                    <Text style={styles.descripcion}>{props.datos.precio}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#000',
    },
    titulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    descripcion: {
        backgroundColor: '#000',
        color: 'white',
        fontSize: 30,
        width:"100%"
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '100%',
    },
    imglista: {
        width: 90,
        height: 90
    },
    contenedorimagenes: {
        flexDirection: 'row'
    },
    contenedor: {
        borderWidth: 1,
        width: "50   %"
    },
    fila: {
        flexDirection: 'row'

    },
    titulolista:{
        color: 'white',
        fontSize: 20,
        width:"100%" 
    },

});