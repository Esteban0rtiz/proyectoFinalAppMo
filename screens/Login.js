import { View, Text, TextInput, StyleSheet,TouchableOpacity , Alert } from 'react-native'
import React from 'react';
import { useState } from 'react';

import userJSON from '../data/Usuarios.json'

export default function Login() {
    const[usuario, setusuario] = useState("");
    const[contrasenia, setcontrasenia] = useState(""); 
    function verificarUsuario(user, pass){
        for (let item of userJSON.usuarios){
            if(user == item.mail){
                if(pass == item.password){
                    Alert.alert("Mensaje",'acesso correcto')
                }else{
                    Alert.alert("Mensaje", 'credenciales incorrectas')
                }
            }
        }
    }


  return (

    <View style= {styles.container}>
      <Text style= {styles.title}>LOGIN</Text>
      <TextInput 
        placeholder='Ingrese usuario'
        style={styles.input}
        onChangeText={ ( texto ) => setusuario( texto ) } 
      />

      <TextInput
        placeholder='Ingrese contraseña'
        style={styles.input}
        onChangeText={ ( texto ) => setcontrasenia( texto ) }
      />
      <TouchableOpacity style={styles.button} onPress={()=> verificarUsuario( usuario, contrasenia  )}>
        <Text style={styles.buttonText}>Iniciar Sesion</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      backgroundColor:'#fff'
  },
  title:{
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button:{
  backgroundColor: '#691010',
  padding: 10,
  borderRadius: 5,
  width: '80%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});