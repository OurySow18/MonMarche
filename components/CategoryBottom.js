import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import Home from '../screens/Home';
import DetailItems from '../screens/DetailItems';
 
import CategoryHeader from './CategoryHeader';
 
const Tab = createBottomTabNavigator();  

function CategoryBottom() {
  return (
    <Tab.Navigator>       
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="DetailItems" component={DetailItems} />
    </Tab.Navigator>
 
  );
}

export default CategoryBottom;