import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
 
import SearchBar from '../components/SearchBar'; 
import Categories from '../components/Categories'; 
import CategoryList from '../components/CategoryList'; 
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems';

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  return ( 
    <View>
     <SafeAreaView>
       <View style={{ backgroundColor:"transparent", padding: 15}}>          
         <SearchBar />
         <CategoryList/>
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>       
        <View>
          <RestaurantItems restaurantData={restaurantData} />
        </View>
       </ScrollView>
     </SafeAreaView>
    </View>
  );   
}