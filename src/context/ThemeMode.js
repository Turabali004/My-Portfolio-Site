import { useContext, createContext } from "react";

export const ThemeMode = createContext({
    themeMode : 'light',
    lightMode : () => {},
    darkMode : () => {},
})

export const ThemeProvider = ThemeMode.Provider;


export default function useTheme(){
    return useContext(ThemeMode)
}

