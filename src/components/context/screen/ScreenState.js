import React, { useReducer } from 'react';
import { screenReducer } from './screenReducer';
import { ScreenContext } from './screenContext';
import { SET_SCREEN } from '../types';

export const ScreenState = ({ children }) => {
    const initialState = {
        todoId: null
    }

    const [state, dispatch] = useReducer(screenReducer, initialState);

    const setScreen = todoId => {
        dispatch({ type: SET_SCREEN, todoId });
    }

    return (
        <ScreenContext.Provider value={{
            todoId: state.todoId,
            setScreen
        }}>
            {children}
        </ScreenContext.Provider>
    )
}