import React from 'react'
import { View, StyleSheet, FlatList, ListRenderItem, Image } from 'react-native'
import ArrowDownIcon from '../assets/svg/arrow-down.svg';
import NigeriaCurrency from '../assets/svg/nigeria_currency.svg';
import ReceivedIcon from '../assets/svg/ReceivedIcon.svg';
import FailedIcon from '../assets/svg/FailedIcon.svg';
import SentIcon from '../assets/svg/SentIcon.svg';
import { scale, STRINGS, transactionData, TransactionDataType } from '../constants/data'
import { colors, SIZES } from '../constants/theme'
import { Label } from './Label'
import { currencyFormat } from '../helperFunctions';

export const TransactionCard: React.FC = () => {


    const ColorSwitch = (status: string) => {
        switch (status) {
            case 'Received':
                return '#1DC7AC'
            case 'Failed':
                return '#FE4A54'
            case 'Sent':
                return '#FAAD39'
            default: 
                return '#fff'
        }
    }

    const StatusView = (status: string) => {
        switch (status) {
            case 'Received':
                return (
                    <View style={[styles.statusTag, {backgroundColor: ColorSwitch(status),}]}>
                        <ReceivedIcon width={16*scale} height={16*scale} />
                        <Label type='tag-small' content={status} style={styles.tagText} />
                    </View>
                )
            case 'Failed':
                return (
                    <View style={[styles.statusTag, {backgroundColor: ColorSwitch(status),}]}>
                        <FailedIcon width={16*scale} height={16*scale} />
                        <Label type='tag-small' content={status} style={styles.tagText} />
                    </View>
                )
            case 'Sent':
                return (
                    <View style={[styles.statusTag, {backgroundColor: ColorSwitch(status),}]}>
                        <SentIcon width={16*scale} height={16*scale} />
                        <Label type='tag-small' content={status} style={styles.tagText} />
                    </View>
                )
                
        }
    }

    const renderItem: ListRenderItem<TransactionDataType> = ({item, index}) => (
        <View style={[styles.transactionTile, {backgroundColor:index%2 ? '#10194E': '#192259'}]}>
            <View style={{flexDirection:'row'}}>
                <Image style={{height:48*scale, width:48*scale}} source={item.image} />
                <View style={{justifyContent:'space-between',marginLeft:16}}>
                    <Label content={item.name} style={styles.nameLabel} />
                    {StatusView(item.status)}
                </View>
            </View>
            <Label content={currencyFormat(item.amount)} style={[styles.amount,{color: ColorSwitch(item.status)}]} />
        </View>
    )

    return (
        <View>
            <View style={styles.cardHeaderContainer}>
                <Label content={STRINGS.allTransactions} style={styles.transactionLabel} />
                <View style={styles.sortContainer}>
                    <Label content={STRINGS.sortBy} style={styles.sortLabel} />
                    <Label type='tag-big' content={STRINGS.recent} style={styles.recentLabel} />
                    <ArrowDownIcon />
                </View>
            </View>
            <FlatList
                contentContainerStyle={{paddingTop:25}}
                data={transactionData}
                keyExtractor={item => item.id}
                renderItem={renderItem}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeaderContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15
    },
    transactionLabel:{
        fontSize: SIZES.p,
        color: colors.headingTextColor,
        fontFamily: 'Inter-Medium'
    },
    sortContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
    },
    sortLabel:{
        color: '#4E589F',
        fontSize: SIZES.b1,
        fontFamily: 'Inter-Light'
    },
    recentLabel:{
        color: '#DDD9D9',
        paddingHorizontal: 8
    },
    transactionTile:{
        padding: 16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    nameLabel:{
        fontFamily:'Inter-Bold',
        fontSize: 16,
        color:'#858EC5'
    },
    statusTag:{
        paddingVertical:4,
        paddingHorizontal:8,
        alignItems:'center',
        alignSelf:'flex-start',
        borderRadius:20,
        flexDirection:'row'
    },
    tagText:{
        color:'#fff',
        paddingLeft:5
    },
    amount:{
        fontFamily:'Inter-Bold',
        fontSize: 16,
        textAlignVertical:'center',
    }
})