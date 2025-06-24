import React, { useEffect,useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View,Image } from 'react-native';
import { getActiveTags,tag } from '@/src/api/firestore/tags';

const CatScrollImage = () => {
  const [categories, setCategories] = useState<tag[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
              style={styles.box}
            >
              {category.imageUrl ? (
                <Image
                  source={{ uri: category.imageUrl }}
                />
              ) : null}
              <Text>{category.name}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
};

export default CatScrollImage

const styles=StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
        width: 309,
        height: 150,
    },
    box:{
        borderColor:"#F5F5DC",
        borderWidth: 1,
        margin: 5,
        borderRadius: 10,
        color:"#F5F5DC",
        width:"100%",
        height:"100%"
    },
})