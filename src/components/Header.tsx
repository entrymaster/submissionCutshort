import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import BackIcon from '../assets/svg/arrow-back.svg';
import { headerHeight, scale, STRINGS } from '../constants/data';
import { Label } from './Label';
import { useNavigation } from '@react-navigation/native';
import { colors, SIZES } from '../constants/theme';

type HeaderProps = {
    withSearchBar?: boolean;
    searchText?: string;
    setSearchText?: React.Dispatch<React.SetStateAction<string>>;
    inputFocused?: boolean;
    setInputFocused?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<HeaderProps> = ({
    withSearchBar,
    searchText,
    setSearchText,
    inputFocused,
    setInputFocused = () => {},
}) => {
    const navigation = useNavigation();

    const onBackHandler = () => {
        navigation.goBack();
    };

    const onInputFocusHandler = () => {
        setInputFocused(true);
    };

    const onInputBlurHandler = () => {
        setInputFocused(false);
    };

    if (withSearchBar) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onBackHandler}
                    style={[styles.backBtn, { paddingRight: 15 }]}
                >
                    <BackIcon />
                    <Label
                        content={STRINGS.headerBack}
                        type="cta-text"
                        style={{ paddingLeft: 5 }}
                    />
                </TouchableOpacity>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: inputFocused ? '#1DC7AC' : '#464E8A' }
                    ]}
                    onChangeText={setSearchText}
                    value={searchText}
                    autoFocus={true}
                    onFocus={onInputFocusHandler}
                    onBlur={onInputBlurHandler}
                />
            </View>
        );
    }

    return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
            <TouchableOpacity
                onPress={onBackHandler}
                style={[styles.backBtn, { position: 'absolute', left: 0 }]}
            >
                <BackIcon />
                <Label
                    content={STRINGS.headerBack}
                    type="cta-text"
                    style={{ paddingLeft: 5 }}
                />
            </TouchableOpacity>
            <Label
                content={STRINGS.newRequestTitle}
                style={styles.headerTitle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: headerHeight,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 18,
        color: colors.ctaTextColor,
        fontFamily: 'Inter-Medium'
    },
    input: {
        backgroundColor: '#10194E',
        color: '#FAFAFA',
        borderWidth: 1,
        height: 50,
        width: 280 * scale,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: SIZES.b1,
        fontFamily: 'Inter-Light'
    }
});
