import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { scale, STRINGS } from "../constants/data";
import { Label } from "./Label";

export const ProfileCard: React.FC = () => {


    return (
        <View style={styles.container}>
            <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                    <Image source={require('../assets/png/profile.png')} style={styles.profileImg} />
                </View>
            </View>
            <Label type="name" content={STRINGS.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        height:'46%',
        justifyContent:'flex-end'
    },
    outerCircle:{
        width:200*scale,
        height:200*scale,
        backgroundColor:"#10194E",
        borderRadius:100*scale,
        alignItems:'center',
        justifyContent:'center',
        margin: 25
    },
    innerCircle:{
        width:150*scale,
        height:150*scale,
        backgroundColor:"#192259",
        borderRadius:150*scale,
        alignItems:'center',
        justifyContent:'center',
    },
    profileImg: {
        height:100*scale,
        width:100*scale
    }
})