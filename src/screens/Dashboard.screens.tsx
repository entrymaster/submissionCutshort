import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Label } from "../components/Label";
import useTheme from "../hooks/useTheme";
import { STRINGS } from "../constants/data";
import { Button } from "../components/Button";

import {useNavigation} from '@react-navigation/native';
import { DashboardHeader } from "../components/DashboardHeader";
import { MoneyPanel } from "../components/MoneyPanel";
import { SwipeUpWrapper } from "../components/SwipeUpWrapper";
import { TransactionCard } from "../components/TransactionCard";

export const Dashboard: React.FC = () => {

    const {sizes, colors} = useTheme();
    const navigation = useNavigation();

    const onRequestHandler = () => {
        navigation.navigate("NewRequest");
    }

    const onSendHandler = () => {
        navigation.navigate("SendMoney");
    }
    
    
    return (
        <View style={{flex:1, backgroundColor: colors.primaryBackground }}>
            <DashboardHeader />
            <MoneyPanel onRequestHandler={onRequestHandler} onSendHandler={onSendHandler} />
            <View style={styles.transactionContainer}>
                <SwipeUpWrapper>

                    <TransactionCard />
                    
                </SwipeUpWrapper>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 35,
        position:'absolute'
    },
    startBtn: {
        height: 45,
        width: 145,
        borderRadius: 10,
        backgroundColor:'#fff',
        justifyContent:'center',
        marginVertical: 12
    },
    startBtnText: {
        color: '#17288E',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
    },
    transactionContainer: {
        height:'58%',
        width:'100%',
        // bottom: 0,
        position:'absolute'
    }
})