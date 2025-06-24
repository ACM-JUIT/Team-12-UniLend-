import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { getActiveTags, tag } from '@/src/api/firestore/tags';

const CatScrollText = () => {
    const[categories,setCategories] = useState<tag[]>([]);
    const[selectedId,setSelectedId] = useState<string | null>(null);
    
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tags = await getActiveTags();
        setCategories(tags);
      } catch (err) {
        console.error('Error fetching tags:', err);
      }
    };

    fetchTags();
  }, []);


  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((category) => (
          <TouchableWithoutFeedback
            key={category.id}
            onPress={() => setSelectedId(category.id)}
          >
            <View
              style={
                selectedId === category.id
                  ? styles.boxClicked
                  : styles.boxUnClick
              }
            >
              <Text>{category.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};
export default CatScrollText

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    boxClicked:{
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        borderColor:"#F5F5DC",
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
        backgroundColor: "#F5F5DC"
    },
    boxUnClick:{
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        borderColor:"#F5F5DC",
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
        color:"#F5F5DC"
    },
})