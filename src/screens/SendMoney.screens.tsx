import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
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
    const [searchText, setSearchText] = useState('');
    const [inputFocused, setInputFocused] = useState(false);
    const [searchData, setSearchData] = useState<PeopleDataType[]>(peopleData);
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
        }

    }, [selectedProfile])


    React.useEffect(() => {

        setSearchData(peopleData.filter(i => i.name.toLowerCase().includes(searchText.toLowerCase())))

    }, [searchText])
    

    return (
        <View style={{ flex: 1 }}>
            <BackImg
                style={{ position: 'absolute', zIndex: -1 }}
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
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                style={{
                    height: windowHeight - headerHeight
                }}
            >
                {searchData.map((item: PeopleDataType) => {

                    const newProps = {
                        stroke: selectedProfile?.id === item.id ? '#1DC76B' : '#fff',
                        onPress: ()=> setSelectedProfile(item)
                    };

                    return <View
                        key={item.id}
                        style={{
                            top: item.yPos*scale,
                            left: item.xPos*scale,
                            position: 'absolute',
                            alignItems:'center',
                            // backgroundColor:'blue'
                        }}
                    >  
                            {React.cloneElement(item.image, newProps)}
                            <Label
                                type='tag-small'
                                content={item.name} 
                                style={{color:selectedProfile?.id === item.id ? colors.selectedColor:colors.primaryTextColor,paddingTop:8}} />
                    </View>
                })}
                <View style={{height:'40%',width:'100%', bottom:0, position:'absolute'}}>
                {selectedProfile && <SwipeUpWrapper>
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
    
})
