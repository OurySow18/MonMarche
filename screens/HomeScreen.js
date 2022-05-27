import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Home from '../screens/Home';
import DetailItems from '../screens/DetailItems';
import { COLORS } from '../assets/consts/colors';  
import AntDesign from "react-native-vector-icons/AntDesign"; 
import Octicons from "react-native-vector-icons/Octicons"; 
  
import SignInScreen from '../screens/authentification/SignInScreen';
import Corbeille from '../components/Corbeille';
import Navigation from '../navigation';
 
const Tab = createBottomTabNavigator();  

function HomeScreen() {

  return (
    <Tab.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#ff6f00'},
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: '#ff6f00'},
      tabBarActiveTintColor:  '#fff'
    }}>       
            <Tab.Screen 
                  name="Home" 
                  component={Home} 
                  options={{
                    title: 'Monmarche',
                    tabBarLabel: 'Acceuil',
                    tabBarIcon: ({color, size}) => (
                      <AntDesign name="home" size={24} color="black" />
                    )
                  }}
                  />
            <Tab.Screen 
                    name="User" 
                    component={Navigation} 
                    options={{
                      title: 'Connection',
                      tabBarLabel: 'User',
                      tabBarIcon: ({color, size}) => (
                        <AntDesign name="user" size={24} color="black" />
                      )
                    }}
                    />
            <Tab.Screen 
                    name="Corbeille" 
                    component={Corbeille} 
                    options={{
                      title: 'Votre corbeille',
                      tabBarLabel: 'Corbeille',
                      tabBarIcon: ({color, size}) => (
                        <AntDesign name="shoppingcart" size={24} color="black" />
                      )
                    }}
                    />
            <Tab.Screen 
                    name="Nos produits" 
                    component={DetailItems} 
                    options={{
                      title: 'Nos produits',
                      tabBarLabel: 'Nos produits',
                      tabBarIcon: ({color, size}) => (
                        <Octicons name="three-bars" size={24} color="black" />
                      )
                    }}
                    />
            
    </Tab.Navigator>
 
  );
}

export default HomeScreen;