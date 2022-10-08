import React from 'react';
import { TouchableOpacity } from 'react-native';
import useTheme from '../hooks/useTheme';
import { Label } from './Label';

type ButtonProps = {
    title: string,
    onPress?:() => void,
    disabled?: boolean,
    type?: "filled" | "transparent",
    height?: number,
    width?: number,
    wrapperStyle?: object,
    textStyle?: object,
}

export const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    disabled = false,
    type,
    height,
    width,
    wrapperStyle,
    textStyle = {},
    ...props
}) => {

    const {buttonStyles} = useTheme();

    const getWrapperStyle = () => {
        switch (type) {
          case 'filled':
            return Object.assign({ ...wrapperStyle, height: height, width: width }, buttonStyles.filledBtn)
          case 'transparent':
            return Object.assign({ ...wrapperStyle, height: height, width: width }, buttonStyles.transparentBtn)
          default:
            return [{ ...wrapperStyle }]
        }
    }

      
    const getTextStyle = () => {
        switch (type) {
          case 'filled':
            return Object.assign(textStyle, buttonStyles.filledBtnText)
          case 'transparent':
            return Object.assign(textStyle, buttonStyles.transparentBtnText)
          default:
            return { ...textStyle }
        }
    }
    
    return (
        <TouchableOpacity
            style={getWrapperStyle()}
            disabled={disabled}
            onPress={onPress}
        >
            <Label content={title} style={getTextStyle()} />
        </TouchableOpacity>
    )
}