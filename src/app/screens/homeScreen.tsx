import CatScrollImage from "@/src/components/ui/mainpage/CatScrollImages";
import CatScrollText from "@/src/components/ui/mainpage/CatScrollText";
import { ScrollView, StyleSheet } from "react-native";
import NavBar from "../../components/ui/mainpage/Navbar";

export default function HomePage(){
    return(
    <ScrollView style={styles.container}>
        <NavBar/>
        <CatScrollText/>
        <CatScrollImage/>
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
    }
}
)