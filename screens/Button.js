import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home';
import Productos from '../screens/Productos';
import Login from '../screens/Login';
import Registro from '../screens/Registro';
import Prueba from './Prueba';
const Tab = createBottomTabNavigator();

function MyTabs() {

    return(
        <Tab.Navigator
        initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Productos" component={Productos} />
            <Tab.Screen name="Login" component={Login}/>
            <Tab.Screen name="Registro" component={Registro}/>
            <Tab.Screen name="Prueba" component={Prueba}/>
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