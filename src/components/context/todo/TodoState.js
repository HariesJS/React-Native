import React, { useReducer, useContext } from 'react';
import { TodoContext } from './todoContext';
import { todoReducer } from './todoReducer';
import { ADD_TODOS, FETCH_TODOS, DELETE_TODOS, PRELOADER, SET_INDEX, CHANGE_TARGET } from '../types';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';

export const TodoState = ({ children }) => {
    const initialState = {
        todos: [],
        isLoad: false,
        index: null
    }

    const { setScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const fetchTodos = async () => {
        setLoader(true);
        const response = await fetch('https://rn-todo-app-63190.firebaseio.com/todos.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        const todos = Object.keys(data).map(e => ({ ...data[e], id: e }));
        dispatch({ type: FETCH_TODOS, todos });
        setLoader(false);
    }

    const addTodo = async title => {
        await fetch('https://rn-todo-app-63190.firebaseio.com/todos.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        dispatch({ type: ADD_TODOS, title });
    }

    const deleteTarget = (id, index) => {
        Alert.alert(
            `Delete ${index} element?`,
            'This target will be not saved!',
            [
                { text: 'Cancel' },
                {
                    text: 'Delete', style: 'destructive', onPress: async () => {
                        await fetch(`https://rn-todo-app-63190.firebaseio.com/todos/${id}.json`, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        setScreen(null);
                        dispatch({ type: DELETE_TODOS, id });
                    }
                }
            ]
        );
    }

    const setLoader = load => {
        dispatch({ type: PRELOADER, load });
    }

    const setIndex = index => {
        dispatch({ type: SET_INDEX, index });
    }

    const changeTarget = async (id, title) => {
        await fetch(`https://rn-todo-app-63190.firebaseio.com/todos/${id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        dispatch({ type: CHANGE_TARGET, id, title });
    }

    return (
        <TodoContext.Provider value={{
            todos: state.todos,
            isLoad: state.isLoad,
            index: state.index,
            addTodo,
            fetchTodos,
            deleteTarget,
            setIndex,
            changeTarget
        }}>
            {children}
        </TodoContext.Provider>
    )
}