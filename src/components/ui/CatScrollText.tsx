import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const CatScrollText = () => {
    const categories = [
  { id: "1", name: "Books" },
  { id: "2", name: "Calculators" },
  { id: "3", name: "Electronics" },
  { id: "4", name: "Accessories" },
  { id: "5", name: "Lab Equipment" },
  { id: "6", name: "Room Essentials" },
  { id: "7", name: "Stationery" },
  { id: "8", name: "Apparel" },
  { id: "9", name: "Misc" }
];

  return (
    <ScrollView horizontal>
    <View style={styles.container}>
        {categories.map((category)=>{
            return(
                <View style={styles.box}>
                    <Text style={styles.font1}> 
                        HI {category.name}
                    </Text>
                </View>
            )
        })}
    </View>
    </ScrollView>
  )
}

export default CatScrollText

const styles=StyleSheet.create({
    container:{
        flexDirection:"row",
    },
    box:{
        padding:3,
        paddingLeft:10,
        paddingRight:10,
        borderColor:"#F5F5DC",
        borderWidth: 2,
        margin: 5,
        borderRadius: 10,
    },
    font1:{
        fontFamily:"Roboto",
        
    }
})