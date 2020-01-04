import React, { useReducer } from 'react';
import { themeReducer } from "./themeReducer";
import { ThemeContext } from "./themeContext";
import { THEME_SET_COLOR } from '../types';

export const ThemeState = ({ children }) => {
    const initialState = {
        color: '#3959ab'
    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const setThemeColor = color => dispatch({ type: THEME_SET_COLOR, color });

    return (
        <ThemeContext.Provider value={{
            color: state.color,
            setThemeColor
        }}>
            {children}
        </ThemeContext.Provider>
    );
}