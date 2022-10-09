import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, TouchableOpacity } from 'react-native';
import BackImg from '../assets/svg/search_recipient.svg';
import Profile2 from '../assets/svg/Profile2.svg';
import { Header } from '../components/Header';
import {
    headerHeight,
    peopleData,
    PeopleDataType,
    scale,
    windowHeight,
    windowWidth
} from '../constants/data';
import { Label } from '../components/Label';
import useTheme from '../hooks/useTheme';
import { SwipeUpWrapper } from '../components/SwipeUpWrapper';
import { InfoCard } from '../components/InfoCard';

export const SendMoney: React.FC = () => {

    const {colors} = useTheme();
    const [searchText, setSearchText] = useState<string>('');
    const [inputFocused, setInputFocused] = useState<boolean>(false);
    const [searchData, setSearchData] = useState<PeopleDataType[]>(peopleData);
    const [bottomSheet, setBottomSheet] = useState<boolean>(false);
    const [selectedProfile, setSelectedProfile] = useState<PeopleDataType | null>(null);

    React.useEffect(() => {

        const keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow', () => setSelectedProfile(null)
        );
    
        return keyboardDidShowListener.remove

      }, []);
      

    React.useEffect(() => {

        if(selectedProfile != null){
            Keyboard.dismiss()
            setBottomSheet(true);
        }

    }, [selectedProfile])


    React.useEffect(() => {

        setSearchData(peopleData.filter(i => i.name.toLowerCase().includes(searchText.toLowerCase())))

    }, [searchText])


    const touchEmptyAreaHandler = () => {
        Keyboard.dismiss();
        setBottomSheet(false);

        setTimeout(() => {
            setSelectedProfile(null)
        }, 300);

    }
    

    return (
        <View style={{ flex: 1 }}>
            <BackImg
                style={styles.background}
                preserveAspectRatio="xMidYMid slice"
                width={windowWidth}
            />

            <Header
                withSearchBar
                searchText={searchText}
                inputFocused={inputFocused}
                setSearchText={setSearchText}
                setInputFocused={setInputFocused}
            />
            <TouchableWithoutFeedback onPress={touchEmptyAreaHandler}>
            <View style={styles.peopleContainer}>
                {searchData.map((item: PeopleDataType) => {

                    const selectStyle = {
                        backgroundColor: selectedProfile?.id === item.id ? colors.selectedProfileColor : colors.defaultWhite,
                        padding:(item.id === '2' ? 4 : 2),
                        borderRadius: 50
                    };

                    return <View
                        key={item.id}
                        style={{
                            top: item.yPos*scale,
                            left: item.xPos*scale,
                            position: 'absolute',
                            alignItems:'center',
                        }}
                    >  
                            {/* {React.cloneElement(item.image, newProps)} */}
                            <TouchableOpacity activeOpacity={0.9} style={selectStyle} onPress={()=> setSelectedProfile(item)}>
                                <Image
                                    style={{
                                        height: (item.id === '2' ? 72 : 36)*scale, 
                                        width: (item.id === '2' ? 72 : 36)*scale, 
                                    }} 
                                    source={item.image} 
                                />
                            </TouchableOpacity>

                            <Label
                                type='tag-small'
                                content={item.name} 
                                style={{color:selectedProfile?.id === item.id ? colors.selectedProfileColor : colors.primaryTextColor, paddingTop:8}} />
                    </View>
                })}
                <View style={styles.infoContainer}>
                {selectedProfile && <SwipeUpWrapper bottomSheet={bottomSheet}>
                    <InfoCard
                        profileImg={selectedProfile?.image}
                        name={selectedProfile?.name}
                        phoneNumber={selectedProfile?.number}
                    />
                </SwipeUpWrapper>}
                </View>
            </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{ 
        position: 'absolute',
        zIndex: -1 
    },
    peopleContainer:{
        height: windowHeight - headerHeight
    },
    infoContainer:{
        height:'40%',
        width:'100%',
        bottom:0,
        position:'absolute'
    }
})
