import { ScrollView, StyleSheet } from "react-native";
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
        flexDirection: "column",
        backgroundColor: "#1C161E",
        height: "100%",
        width: "100%",
        padding:10,
        
        
    }}
)