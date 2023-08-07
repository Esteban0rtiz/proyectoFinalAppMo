import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Login from './screens/Login';
import Button from './screens/Button';
export default function App() {
  return (
    <View>
      <Login></Login>
      <Button></Button>
    </View>
  )
}