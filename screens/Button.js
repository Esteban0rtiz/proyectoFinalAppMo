import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './screens/Login';
import Registro from './screens/Registro';
import Home from './screens/home';
const Tab = createBottomTabNavigator();

const Screen1 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <Login></Login>
  </View>
);

const Screen2 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Registro</Text>
    <Registro></Registro>
  </View>
);

const Screen3 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Productos</Text>
    <Productos></Productos>
  </View>
);
const Screen4 = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Home</Text>
    <Home></Home>
  </View>
);
const Button = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'ios-home';
            } else if (route.name === 'perfil') {
              iconName = 'ios-list';
            } else if (route.name === 'productos') {
              iconName = 'ios-person';
            }else if (route.name === 'transacciones') {
              iconName = 'ios-person';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#007bff',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Login" component={Screen1} />
        <Tab.Screen name="Registro" component={Screen2} />
        <Tab.Screen name="Productos" component={Screen3} />
        <Tab.Screen name="Home" component={Screen4} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;