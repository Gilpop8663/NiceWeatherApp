import React from "react";
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import Proptypes from "prop-types";
import { Ionicons  } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Thunderstorm:{
        iconName: "thunderstorm",
        gradient: ["#F1F2B5","#135058"],
        title:"Thunderstorm in the house",
        subTitle:"Actually, outside of the house",
    },
    Drizzle:{
        iconName: "rainy-outline",
        gradient: ["#616161","#9bc5c3"],
        title:"Drizzle",
        subTitle:"Is like rain",
    },
    Rain:{
        iconName: "ios-rainy",
        gradient: ["#1A2980","#26D0CE"],
        title:"Raining like a MF",
        subTitle:"For more info look outside",
    },
    Snow:{
        iconName: "snow",
        gradient: ["#E6DADA","#274046"],
        title:"Cold as balls",
        subTitle:"Do you want to build a snowman? No way.",
    },
    Atmosphere:{
        iconName: "sunny",
        gradient: ["#00d2ff","#3a7bd5"],
        title:"Sunny!",
        subTitle:"Have a nice day.",
    },
    Clear:{
        iconName: "sunny",
        gradient: ["#00d2ff","#3a7bd5"],
        title:"Sunny!",
        subTitle:"Have a nice day.",
    },
    Clouds:{
        iconName: "cloud",
        gradient: ["#334d50","#cbcaa5"],
        title:"Clouds",
        subTitle:"Have a good atmosphere",
    },
    Haze:{
        iconName: "cloud",
        gradient: ["#334d50","#cbcaa5"],
        title:"Mist!",
        subTitle:"It's like you have no glasses on.",
    },
    Mist:{
        iconName: "cloud",
        gradient: ["#334d50","#cbcaa5"],
        title:"Mist!",
        subTitle:"It's like you have no glasses on.",
    },
    Dust:{
        iconName: "cloud",
        gradient: ["#FFA17F","#00223E"],
        title:"Dusty",
        subTitle:"Take your mask.",
    }
}

export default function Weather ({temp,condition}) {
    return (
            <LinearGradient style={styles.container}
        // Button Linear Gradient
        colors={weatherOptions[condition].gradient}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <Ionicons name={weatherOptions[condition].iconName} size={85} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp:Proptypes.number.isRequired,
    condition:Proptypes.oneOf(["Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"space-between",
        textAlign:"center"
    },
    temp:{
        fontSize:35,
        color: "white",
        textAlign:"center"
    },
    textContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        paddingHorizontal:40,

    },
    title:{
        fontSize:44,
        color:"white",
        fontWeight:"300",
        marginBottom:10,
        textAlign:"left"
    },
    subTitle:{
        fontSize:18,
        fontWeight:"600",
        color:"white",
        textAlign:"left"
    }
})