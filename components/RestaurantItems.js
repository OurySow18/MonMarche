import React from 'react';
import { Text, Image, View, ScrollView, TouchableOpacity, Flatlist, Dimensions } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
 

export const localRestaurants = [
    {    name: "Huile", 
         categories: ["Cafe", "Bar"],
         price: "$$",
         reviews: 1244,
         rating: 4.5,
         image: require("../assets/images/1.jpeg"),
        
    },
    {
        image: require("../assets/images/2.jpeg"),
        text: "Soft drink"
    },
    {
        image: require("../assets/images/3.jpeg"),
        text: "Backary Itemes"
    },
    {
        image: require("../assets/images/4.jpeg"),
        text: "Fast food"
    },
    {
        image: require("../assets/images/5.jpeg"),
        text: "Deals"
    },
    {
        image: require("../assets/images/6.jpeg"),
        text: "Coffee & Tea"
    }, 
    {
        image: require("../assets/images/6.jpeg"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/5.jpeg"),
        text: "Deals"
    }
];

const {width} = Dimensions.get("screen");

const RestaurantItems = props =>{
    return (
     
    <TouchableOpacity activeOpacity={2} style={{ marginBottom: 30}}>
        <View style={{        
            flex: 1,     
            flexDirection: 'row',
            flexWrap: 'wrap',
        }}>
        {props.restaurantData.map((restaurant, index) => (             
             <View key={index} 
                  style={{   
                        display: 'flex',                          
                        backgroundColor: "white",                        
                        justifyContent:"space-between",
                        height: 250,
                        width: 180,             
                        marginTop: 20, 
                        marginLeft: 15, 
                        padding: 15, 
                    }}>
                    <RestaurantImage image={restaurant.image} />
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
             </View>
              
        ))}
        </View>
    </TouchableOpacity> 
    )
}

const RestaurantImage = (props) => (
    <>                
        <Image 
            source={props.image}
            style={{
                width: "100%",
                height: 180,
                resizeMode: "contain"
                    }}
        />         
        <TouchableOpacity style={{ position: "absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="red" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}> {props.name} </Text>
        <Text style={{ fontSize: 13, color: "gray"}}>10l</Text>   
   
    <View
        style={{
            backgroundColor: "#eee",
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15
        }}>
        <Text>{props.rating}</Text>
    </View>
    </View>
); 

export default RestaurantItems;