import React, { useReducer } from 'react';
import { ADD_TODO, DELETE_TODO, CHANGE_TODO, FETCH_TODOS, SET_LOADER, SET_ERROR } from "../types";
import { useContext } from 'react';
import { TodoContext } from "./todoContext";
import { todoReducer } from './todoReducer';
import { Alert } from 'react-native';
import { ScreenContext } from '../screen/screenContext';
import { Http } from '../../http';

export const TodoState = ({ children }) => {
    const initialState = {
        todo: [],
        isLoad: false,
        error: null
    }

    const { setScreen } = useContext(ScreenContext);
    
    const [state, dispatch] = useReducer(todoReducer, initialState);

    async function fetchTodos() {
        setError(null);
        try {
            setLoader(true);
            const data = await Http.get('https://rn-todo-app-63190.firebaseio.com/todos.json');
            if (data) {
                const todo = Object.keys(data).map(e => ({ ...data[e], id: e }));
                console.log(todo);
                dispatch({ type: FETCH_TODOS, todo });
            }
        } catch (e) {
            setError(e);
        } finally {
            setLoader(false);
        }
    }

    const addTodo = async title => {
        try {
            const data = await Http.post('https://rn-todo-app-63190.firebaseio.com/todos.json', {
                title
            });
            dispatch({ type: ADD_TODO, title, id: data.name });
        } catch (e) {
            setError(e);
        }
    }

    const changeTodo = async (id, title) => {
        try {
            await Http.patch(`https://rn-todo-app-63190.firebaseio.com/todos/${id}.json`, {
                title
            });
            dispatch({ type: CHANGE_TODO, id, title });
        } catch (e) {
            setError(e);
        }
    }
    
    const deleteTodo = (id, index) => {
        Alert.alert(
            'Delete target?',
            `Target number ${index} will be deleted.`,
            [
                {text: 'Cancel'},
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        try {
                            await Http.delete(`https://rn-todo-app-63190.firebaseio.com/todos/${id}.json`);
                            setScreen(null);
                            dispatch({ type: DELETE_TODO, id });
                        } catch (e) {
                            setError(e);
                        }
                    }
                }
            ],
            { cancelable: true }
        );
    }

    const setLoader = load => dispatch({ type: SET_LOADER, load });
    
    const setError = error => dispatch({ type: SET_ERROR, error });

    return (
        <TodoContext.Provider value={{
            todo: state.todo,
            isLoad: state.isLoad,
            error: state.error,
            addTodo,
            deleteTodo,
            changeTodo,
            fetchTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}
