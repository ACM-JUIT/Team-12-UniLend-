import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const CatScrollImage = () => {
    const categories = [
  { id: 1, img: "../../../assets/images/cat-electronics.png" },
  { id: 2, img: "../../../assets/images/cat-electronics.png" },
  { id: 3, img: "../../../assets/images/cat-electronics.png" },
  { id: 4, img: "../../../assets/images/cat-electronics.png" },
  { id: 5, img: "../../../assets/images/cat-electronics.png" },
  { id: 6, img: "../../../assets/images/cat-electronics.png" },
  { id: 7, img: "../../../assets/images/cat-electronics.png" },
  { id: 8, img: "../../../assets/images/cat-electronics.png" },
  { id: 9, img: "../../../assets/images/cat-electronics.png" }
];

  return (
    <ScrollView horizontal>
    <View style={styles.container}>
        {categories.map((category)=>{
            const [Clicked, setClicked] = useState(false)
            return(
            <TouchableWithoutFeedback onPress={()=>setClicked(!Clicked)} key={category.id} style={styles.container}>
                <Image source={require("../../../assets/images/cat-electronic.png")} style={styles.box}/>
            </TouchableWithoutFeedback>
            )
        })}
    </View>
    </ScrollView>
  )
}

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