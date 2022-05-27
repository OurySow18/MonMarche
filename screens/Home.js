import React from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
 
import SearchCmp from '../components/SearchCmp'; 
import SearchBar from '../components/SearchBar'; 
import Categories from '../components/Categories'; 
import CategoryList from '../components/CategoryList'; 
import ProductsItems from '../components/Products/ProductsItems'; 
import ProductItems, {localProducts} from '../components/ProductItems';

export default function Home() {
  const [productData, setProductData] = React.useState(localProducts);

  return ( 
    <View>
     <SafeAreaView>        
       <ScrollView showsVerticalScrollIndicator={false}>       
        <View>
          <ProductsItems productData={productData} />
        </View>
       </ScrollView>
     </SafeAreaView>
    </View>
  );   
}