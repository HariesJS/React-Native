import React, { useReducer } from 'react'
import { SET_SCREEN, SET_INDEX } from "../types";
import { screenReducer } from "./screenReducer";
import { ScreenContext } from "./screenContext";

export const ScreenState = ({ children }) => {
    const initialState = {
        todoId: null,
        index: null
    }

    const [state, dispatch] = useReducer(screenReducer, initialState);

    const setScreen = todoId => dispatch({ type: SET_SCREEN, todoId });
    
    const setIndex = index => dispatch({ type: SET_INDEX, index });

    return (
        <ScreenContext.Provider value={{
            todoId: state.todoId,
            index: state.index,
            setScreen,
            setIndex,
        }}>
            {children}
        </ScreenContext.Provider>
    )
}