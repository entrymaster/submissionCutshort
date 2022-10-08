import React from 'react'
import {View, StyleSheet} from 'react-native'
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { scale, windowHeight } from '../constants/data';
import { useRoute } from '@react-navigation/native';

type SwipeUpWrapperProps = {
    children?: React.ReactNode;
}

const MAX_TRANSLATE_Y = -(0.58*windowHeight-50);
const MIN_TRANSLATE_Y = (0.01*windowHeight)

export const SwipeUpWrapper: React.FC<SwipeUpWrapperProps> = ({children}) => {
    
    const route = useRoute();

    const translateY = useSharedValue(0);

    const context = useSharedValue({ y: 0 });


    const getTopValue = (screen: string) => {
        switch (screen) {
            case 'Dashboard':
                return windowHeight-50
            case 'SendMoney':
                return windowHeight*0.50
        }
    } 

    React.useEffect(() => {
        translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 })
    }, [])
    

    const gesture = Gesture.Pan()
        .onStart(()=>{
            context.value = {y: translateY.value}
        }).onUpdate((event) => {
            translateY.value = event.translationY + context.value.y
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
            translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y)
        }).onEnd(() => {
            translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 })
        })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value}]
        }
    })
    
    return (
        <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.wrapperContainer, animatedStyle, {top: getTopValue(route.name)}]}>
            <View style={styles.tapBar} />
            {children}
        </Animated.View>
        </GestureDetector>
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