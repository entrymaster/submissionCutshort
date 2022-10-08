import React from 'react';
import appTheme, {CutshortTheme} from '../constants/theme'



type CutshortThemeHook = {
  children?: React.ReactNode;
  theme?: CutshortTheme;
};

export const ThemeContext = React.createContext({
  theme: appTheme,
});

export const ThemeProvider = ({children, theme = appTheme}: CutshortThemeHook) => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useTheme (): CutshortTheme {
    const { theme } = React.useContext(ThemeContext);
    return theme;
}
