import React from "react";
import { View, StyleSheet } from "react-native";
import NigeriaCurrency from '../assets/svg/nigeria_currency.svg';
import { scale, STRINGS } from "../constants/data";
import { Button } from "./Button";
import { Label } from "./Label";

type MoneyPanelProps = {
    onRequestHandler: () => void;
    onSendHandler: () => void;
};

export const MoneyPanel: React.FC<MoneyPanelProps> = ({onRequestHandler, onSendHandler}) => {


    return (
        <View style={styles.panelContainer}>
            <Label type="tag-small" content={STRINGS.currentBalance} style={styles.balanceLabel} />
            <View style={styles.amountContainer}>
                <NigeriaCurrency height={32*scale} />
                <Label type="amount" content={STRINGS.amount} style={{paddingLeft:10}} />
            </View>
            <View style={styles.btnContainer}>
                <Button type="transparent" title={STRINGS.requestMoney} onPress={onRequestHandler} />
                <Button type="transparent" title={STRINGS.sendMoney} onPress={onSendHandler} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    panelContainer:{
        paddingHorizontal: 15,
        paddingVertical: 40,
    },
    balanceLabel:{
        color: '#E7E4E4',
        // paddingLeft: 10
    },
    amountContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
})