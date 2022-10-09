import React from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Burger from '../assets/svg/burger.svg';
import { scale, STRINGS } from "../constants/data";
import { Button } from "./Button";
import { Label } from "./Label";

export const DashboardHeader: React.FC = () => {
    
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <TouchableOpacity style={{paddingRight:16}}>
                    <Burger width={48*scale} />
                </TouchableOpacity>
                <Label type="title" content={STRINGS.dashboardHeaderText} />
            </View>
            <Button
                title={STRINGS.addMoney}
                wrapperStyle={styles.addMoneyBtn}
                textStyle={styles.addMoneyText}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 15,
        paddingTop: 25,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
    },
    addMoneyBtn:{
        width:90*scale,
        height:32*scale,
        backgroundColor: '#212A6B',
        borderRadius:8,
        justifyContent:'center',
    },
    addMoneyText:{
        color:'#426DDC',
        textAlign:'center',
        fontFamily: 'Inter-Medium',
        fontSize:14
    }
})