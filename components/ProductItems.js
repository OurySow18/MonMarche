import React from 'react';
import { Text, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from '@react-navigation/core';
 

export const localProducts = [
    {    id: 1,
         name: "Huile",
         price: "5$",
         poids: "5l",
         reviews: 1244,
         rating: 4.5,
         image: require("../assets/images/1.jpeg"),
        
    },
    {   id: 2,
        name: "Huile",
        price: "2$",
        poids: "1l",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/5.jpeg")
    },
    {   id: 3,
        name: "Huile",
        price: "30$",
        poids: "2l",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/6.jpeg")
    }, 
    {   id: 4,
        name: "Riz",
        price: "15$",
        poids: "25kg",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/6.jpeg")
    },
    {   id: 5,
        name: "Riz", 
        categories: ["Cafe", "Bar"],
        price: "50$",
        poids: "50kg",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/2.jpeg")
    },
    {   id: 6,
        name: "Sucre", 
        categories: ["Cafe", "Bar"],
        price: "60$",
        poids: "50kg",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/3.jpeg")
    },
    {   id: 7,
        name: "Sucre", 
        categories: ["Cafe", "Bar"],
        price: "40$",
        reviews: 1244,
        poids: "25kg",
        rating: 4.5,
        image: require("../assets/images/4.jpeg")
    },
    {   id: 8,
        name: "Farine", 
        categories: ["Cafe", "Bar"],
        price: "6$",
        poids: "50kg",
        reviews: 1244,
        rating: 4.5,
        image: require("../assets/images/5.jpeg")
    }
];
 

const ProductItems = (item) =>{
    const navigation = useNavigation();

    const onDetails = () => {
        navigation.navigate('DetailScreen', {productDetail: item});
    };

    return (
     
     <TouchableOpacity 
            activeOpacity={2} 
            style={{ marginBottom: 30}}
            onPress={onDetails}
            >
        <View style={{        
            flex: 1,     
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 60
        }}
        >
        {item.productData.map((product, index) => (             
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
                    <ProducttImage image={product.image} />
                    <ProductInfo name={product.name} poids={product.poids} price={product.price} />
             </View>
              
        ))}
        </View>
    </TouchableOpacity> 
    )
}

const ProducttImage = (item) => (
    <>                
        <Image 
            source={item.image}
            style={{
                width: "100%",
                height: 180,
                resizeMode: "contain"
            }}
        />         
    </>
);

const ProductInfo = (item) => (
    <View   style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}> {item.name} </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}> {item.poids} </Text>
   
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 15
            }}>
            <Text>{item.price}</Text>
        </View>
    </View>
); 

export default ProductItems;