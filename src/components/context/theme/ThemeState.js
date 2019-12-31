import React, { useReducer } from 'react';
import { themeReducer } from './themeReducer';
import { SET_THEME_COLOR } from '../types';
import { ThemeContext } from './themeContext';

export const ThemeState = ({ children }) => {
    const initialState = {
        color: '#3959ab',
    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const setThemeColor = color => {
        dispatch({ type: SET_THEME_COLOR, color });
    }

    return (
        <ThemeContext.Provider value={{
            color: state.color,
            setThemeColor
        }}>
            {children}
        </ThemeContext.Provider>
    )
}