import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import { GlobalColors } from '../assets/consts/colors';


const categories = ['HOME', 'DEJEUNER', 'CEREMONIE', 'ENFANT'];

  const CategoryList = () => {
      
  const [catergoryIndex, setCategoryIndex] = React.useState(0);
    return (
      <View style={style.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                style.categoryText,
                catergoryIndex === index && style.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const style = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      marginTop: 30,
      marginBottom: 10,
      justifyContent: 'space-between',
    },
    categoryText: {fontSize: 16, color: 'grey', fontWeight: 'bold'},
    categoryTextSelected: {
        color: '#00B761',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#00B761'
    }
})

  export default CategoryList;