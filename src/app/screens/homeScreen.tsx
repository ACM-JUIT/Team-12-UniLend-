import { ScrollView, StyleSheet, Text,Image } from "react-native";
import NavBar from "../../components/ui/Navbar";
export default function HomePage(){
    return(
    <ScrollView style={styles.container}>
    <NavBar/>
    </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        backgroundColor: "#1C161E",
        height: "auto",
        width: "auto",

    }}
)