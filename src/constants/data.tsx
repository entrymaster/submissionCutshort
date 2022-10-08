import {Dimensions, ImageSourcePropType} from 'react-native'
import Profile1 from '../assets/svg/Profile1.svg';
import Profile2 from '../assets/svg/Profile2.svg';
import Profile3 from '../assets/svg/Profile3.svg';
import Profile4 from '../assets/svg/Profile4.svg';
import Profile5 from '../assets/svg/Profile5.svg';
import Profile6 from '../assets/svg/Profile6.svg';

export const scale = Dimensions.get('window').width / 375;
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const headerHeight = 50;

export const STRINGS = {

    // Welcome Screen
    welcomeHeading: 'Transfer That Is Safe',
    welcomeHeadDesc: `You have nothing to be scared${'\n'}about, we got you covered.`,
    startBanking: 'Start banking',

    // Dashboard
    dashboardHeaderText: 'Hello Sandra,',
    addMoney: 'Add money',
    currentBalance: 'Your current balance is',
    amount: '200,000',
    requestMoney: 'Request money',
    sendMoney: 'Send money',
    allTransactions: 'All Transactions',
    sortBy: 'Sort by:',
    recent: 'Recent',

    // New Request
    headerBack: 'Back',
    newRequestTitle: 'New Request',
    name:'Adeleke Ramon',
    requestText: 'is requesting for',
    cancelSend: "Don't Send",

    // Send Money
    continueText: 'Continue'
}

export type PeopleDataType = {
    id: string,
    name: string,
    xPos: number,
    yPos: number,
    image: JSX.Element,
    number: string
}

export const peopleData = [
    {
        id: '1',
        name: 'Adedoyin Leke',
        xPos: 147,
        yPos: 37,
        image: <Profile1 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    },
    {
        id: '2',
        name: 'Adeleke Adeyanju',
        xPos: 217,
        yPos: 126,
        image: <Profile2 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    },
    {
        id: '3',
        name: 'Adedoyin Leke',
        xPos: 279,
        yPos: 248,
        image: <Profile3 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    },
    {
        id: '4',
        name: 'Aduni Wale',
        xPos: 157,
        yPos: 317,
        image: <Profile4 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    },
    {
        id: '5',
        name: 'Adolph colleague',
        xPos: 61,
        yPos: 217,
        image: <Profile5 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    },
    {
        id: '6',
        name: 'Adelaide Uti (son)',
        xPos: 28,
        yPos: 90,
        image: <Profile6 strokeWidth={3} />,
        number: '(+234) 905 1694 275'
    }
]

export type TransactionDataType = {
    id: string,
    name: string,
    image: ImageSourcePropType,
    status: string,
    amount: number
}

export const transactionData = [
    {
        id: '1',
        name: 'Adeboye Usman',
        image: require('../assets/Adeboye_Usman.png'),
        status: 'Received',
        amount: 200000
    },
    {
        id: '2',
        name: 'Mercy Popoola',
        image: require('../assets/Mercy_Popoola.png'),
        status: 'Failed',
        amount: 110000
    },
    {
        id: '3',
        name: 'Onome Adetayo',
        image: require('../assets/Onome_Adetayo.png'),
        status: 'Sent',
        amount: 10000
    },
    {
        id: '4',
        name: 'Kingsley Abiodun',
        image: require('../assets/Kingsley_Abiodun.png'),
        status: 'Received',
        amount: 200000
    },
]