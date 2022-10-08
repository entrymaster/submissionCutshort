import React from 'react'
import {View, StyleSheet} from 'react-native'
import { scale } from '../constants/data';

type SwipeUpWrapperProps = {
    children?: React.ReactNode;
}

export const SwipeUpWrapper: React.FC<SwipeUpWrapperProps> = ({children}) => {
    return (
        <View style={styles.wrapperContainer}>
            <View style={styles.tapBar} />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperContainer:{
        backgroundColor: '#10194E',
        flex:1,
        borderTopLeftRadius:40,
        borderTopRightRadius:40
    },
    tapBar:{
        width:65*scale,
        height:8,
        borderRadius: 10,
        backgroundColor:'#4E589F',
        alignSelf:'center',
        marginTop: 15,
        marginBottom: 10
    }
})