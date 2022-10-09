import React from "react";
import { StyleSheet, View } from "react-native";
import NigeriaCurrency from '../assets/svg/nigeria_currency.svg';
import BackImg from '../assets/svg/money_requests.svg';
import { Header } from "../components/Header";
import { Label } from "../components/Label";
import { ProfileCard } from "../components/ProfileCard";
import { scale, STRINGS, windowHeight, windowWidth } from "../constants/data";
import { Button } from "../components/Button";

export const NewRequest: React.FC = () => {


    return (
        <View style={{flex:1, backgroundColor: '#010A43'}}>
            <BackImg
                style={{position: 'absolute'}}
                preserveAspectRatio="xMinYMax slice"
                width={(windowWidth)*scale}
            />
            
                <Header />
            <View style={{height: windowHeight-50}}>
                <ProfileCard />
                <Label type='tag-big' content={STRINGS.requestText} style={styles.request} />
                <View style={styles.amountContainer}>
                    <NigeriaCurrency height={32*scale} />
                    <Label type="amount" content={STRINGS.amount} style={{paddingLeft:10}} />
                </View>
                <Button type='filled' title={STRINGS.sendMoney} wrapperStyle={styles.request} />
                <Button type='transparent' title={STRINGS.cancelSend} wrapperStyle={{alignSelf:'center'}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    request:{
        alignSelf:'center',
        marginVertical:25
    },
    amountContainer:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginBottom: 20
    },
})