import React from 'react';
import { View, StyleSheet } from 'react-native';
import { STRINGS } from '../constants/data';
import { Button } from './Button';
import { Label } from './Label';

type InfoCardProps = {
    profileImg: JSX.Element;
    name: string;
    phoneNumber: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
    profileImg,
    name,
    phoneNumber
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                {React.cloneElement(profileImg, {width:72, height:72})}
                <Label type="title" content={name} />
                <Label
                    type="tag-big"
                    content={phoneNumber}
                    style={{ color: '#FFFFFF' }}
                />
            </View>
            <View style={styles.btnContainer}>
                <Button type="filled" title={STRINGS.continueText} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        height: '80%',
        justifyContent: 'space-between'
    },
    itemContainer: {
        height: '62%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnContainer: {
        width: '80%',
        alignItems: 'center'
    }
});
