import { scale } from "./data";

export type CutshortTheme = {
  sizes: any,
  colors: any,
  textStyles: any,
  buttonStyles: any
}

export const SIZES = {
    
  base: 8,
  text: 14,
  padding: 20,

  heading: 18,
  h1: 40,
  h2: 25,
  h3: 20,
  h4: 38,
  
  b1: 15,
  b2: 13,

  p: 16,

  buttonHeight: 48,
  buttonRadius: 4,
  buttonBorder: 0,
};

export const colors = {
  primaryBackground: '#010A43',
  primaryTextColor: '#FAFAFA',
  primaryBtnTextColor: '#fff',

  selectedColor: '#1DC76B',

  headingTextColor: '#fff',
  amountTextColor: '#EEEEEE',
  ctaTextColor: '#D7C9C9',
  nameColor: '#EEEEEE',

  welcomeBtnWrapper: '#fff',
  welcomeBtnText: '#17288E'
}

const textStyles = {
  heading:{
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.heading,
    color: colors.headingTextColor,
    paddingVertical:8,
    letterSpacing: 0.5
  },
  headingDesc:{
    fontFamily: 'Inter-Light',
    fontSize: SIZES.p,
    lineHeight: 23,
    color:colors.primaryTextColor,
    letterSpacing: 0.4
  },
  titleText:{
    color: colors.primaryTextColor,
    fontFamily: 'Inter-Medium',
    fontSize: SIZES.h3
  },
  tagSmall:{
    fontSize: SIZES.b2,
    fontFamily: 'Inter-Light',
    letterSpacing: 0.1
  },
  tagBig:{
    fontSize: SIZES.b1,
    fontFamily: 'Inter-Light',
  },
  amount:{
    fontSize: SIZES.h1,
    fontFamily: 'Inter-Bold',
    color: colors.amountTextColor,
  },
  ctaText:{
    fontSize: SIZES.b1,
    color: colors.ctaTextColor,
    fontFamily:'Inter-Light'
  },
  nameLabel:{
    fontSize: SIZES.h2,
    color: colors.nameColor,
    fontFamily: 'Inter-Medium',
  }
}

const buttonStyles = {
  filledBtn:{
    backgroundColor: '#FF2E63',
    borderRadius: 10,
    justifyContent:'center',
    height: 60,
    width: '46%',
  },
  transparentBtn:{
    backgroundColor: '#010A43',
    borderRadius: 10,
    borderColor: '#464E8A',
    borderWidth: 1,
    justifyContent:'center',
    height: 60,
    width: '46%',
  },
  filledBtnText:{
    color: colors.primaryBtnTextColor,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
  transparentBtnText:{
    color: '#464E8A',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
}

export const THEME = {
  sizes: SIZES,
  colors: colors,
  textStyles: textStyles,
  buttonStyles: buttonStyles,
};

export default THEME;
