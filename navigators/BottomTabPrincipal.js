    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import {NavigationContainer} from '@react-navigation/native';
    import Home from '../screens/Home';
    import Productos from '../screens/Productos';
    import Carrito from '../screens/Carrito';

    const Tab = createBottomTabNavigator();

    function MyTabs() {

        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Productos" component={Productos} />
                <Tab.Screen name="Carrito" component={Carrito}/>
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

