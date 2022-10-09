import React from "react";
import { View, StyleSheet } from "react-native";
import { Label } from "../components/Label";
import useTheme from "../hooks/useTheme";
import BackImg from '../assets/svg/splash_one.svg';
import { scale, STRINGS, windowWidth } from "../constants/data";
import { Button } from "../components/Button";
import {useNavigation} from '@react-navigation/native';

export const Welcome: React.FC = () => {

    const {sizes, colors} = useTheme();
    const navigation = useNavigation();

    const startBtnHandler = () => {
        navigation.navigate("Dashboard");
    }
    
    return (
        <View style={{flex:1}}>
            <BackImg style={{position: 'absolute'}}
                preserveAspectRatio="xMidYMax slice"
                width={windowWidth} />
            <View style={styles.container}>
                <Label type="heading" content={STRINGS.welcomeHeading} />
                <Label type="p" content={STRINGS.welcomeHeadDesc} style={{color: colors.defaultWhite}} />
                <Button
                    title={STRINGS.startBanking}
                    wrapperStyle={styles.startBtn}
                    textStyle={styles.startBtnText}
                    onPress={startBtnHandler}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        bottom: 0,
        left: 32,
        position:'absolute'
    },
    startBtn: {
        height: 46*scale,
        width: 145,
        borderRadius: 10,
        backgroundColor:'#fff',
        justifyContent:'center',
        marginVertical: 14
    },
    startBtnText: {
        color: '#17288E',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
    }
})