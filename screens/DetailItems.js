import React, { useState} from 'react';
import {View, Text, ScrollView} from 'react-native'
import ProductItems, {localProduct} from '../components/ProductItems';

function DetailItems() {
  
  const [productData, setProductData] = React.useState(localProduct);

  return ( 
    
    <ScrollView showsVerticalScrollIndicator={false}>  
      <View>
       <Text>Hier kommt andere Producte</Text>
      </View>
    </ScrollView>
  );
}

export default DetailItems