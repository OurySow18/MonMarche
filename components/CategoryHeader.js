import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../screens/Home';
import DetailItems from '../screens/DetailItems'; 

const Tab = createMaterialTopTabNavigator();

function CategoryHeader() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="DetailItems" component={DetailItems} />
    </Tab.Navigator>
  );
}

export default CategoryHeader;