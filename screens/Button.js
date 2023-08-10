import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Productos from '../screens/Productos';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function MyTabs() {

    return(
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Login') {
                iconName = 'ios-enter-outline';
              } else if (route.name === 'Productos') {
                iconName = 'ios-filter-outline';
              }else if (route.name === 'Registro') {
                iconName = 'ios-person-add-outline';
              }
  
  
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#007bff',
            inactiveTintColor: 'gray',
          }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Productos" component={Productos} />
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="Registro" component={Registro}/>
        </Tab.Navigator>
        
    )
}
export default function TabNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}