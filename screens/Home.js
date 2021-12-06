import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';

import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories'; 
import RestaurantItems, {localRestaurants} from '../components/RestaurantItems';

const YELP_API_KEY = "cm3vPTLPBbll63DJiO5Z7R46na6z8YQZwAYze0Z2078Re9FbVEEFgLX2vv4eCSdvJ_6sKbtrWqf3jJZhhVecI2QbIjqWTt5xqugv5mrRomko1YetKPgcx2vhlKusYXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  }
  return ( 
     <SafeAreaView>
       <View style={{ backgroundColor:"white", padding: 25}}>
         <HeaderTabs />
         <SearchBar />
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
       <Categories />
       <RestaurantItems restaurantData={restaurantData} />
       </ScrollView>
    </SafeAreaView>
  );   
}