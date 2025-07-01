// import React, { useEffect, useState } from 'react';
// import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
// import { getActiveTags, tag } from '@/src/api/firestore/tags';

// const CatScrollText = () => {
//     const[categories,setCategories] = useState<tag[]>([]);
//     const[selectedId,setSelectedId] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchTags = async () => {
//       try {
//         const tags = await getActiveTags();
//         setCategories(tags);
//       } catch (err) {
//         console.error('Error fetching tags:', err);
//       }
//     };

//     fetchTags();
//   }, []);

//   return (
//     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//       <View style={styles.container}>
//         {categories.map((category) => (
//           <TouchableWithoutFeedback
//             key={category.id}
//             onPress={() => setSelectedId(category.id)}
//           >
//             <View
//               style={
//                 selectedId === category.id
//                   ? styles.boxClicked
//                   : styles.boxUnClick
//               }
//             >
//               <Text>{category.name}</Text>
//             </View>
//           </TouchableWithoutFeedback>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };
// export default CatScrollText

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CatScrollText = ({ setSelection }: { setSelection: any }) => {
  const categories = [
    { id: 1, name: "Books" },
    { id: 2, name: "Calculators" },
    { id: 3, name: "Electronics" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Apparel" },
    { id: 6, name: "Misc" },
  ];
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        {categories.map((category) => {
          const [Clicked, setClicked] = useState(false);
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                setClicked(!Clicked);
                setSelection(category);
              }}
              key={category.id}
            >
              <Text
                key={category.id}
                style={Clicked ? styles.boxClicked : styles.boxUnClick}
              >
                {category.name}
              </Text>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default CatScrollText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  boxClicked: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderColor: "#F5F5DC",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#F5F5DC",
    fontFamily: "Rosarivo",
  },
  boxUnClick: {
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    borderColor: "#F5F5DC",
    borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    color: "#F5F5DC",
    fontFamily: "Rosarivo",
  },
});
