import { ADD_TODOS, FETCH_TODOS, DELETE_TODOS, PRELOADER, SET_INDEX, CHANGE_TARGET } from "../types";

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODOS: return {
            ...state, todos: [
                ...state.todos,
                {id: Date.now().toString(), title: action.title}
            ]
        };
        case FETCH_TODOS: return { ...state, todos: action.todos };
        case DELETE_TODOS: return {
            ...state,
            todos: state.todos.filter(e => e.id !== action.id)
        };
        case PRELOADER: return { ...state, isLoad: action.load };
        case SET_INDEX: return { ...state, index: action.index };
        case CHANGE_TARGET: return {
            ...state, todos: state.todos.map(e => {
                if (e.id === action.id) {
                    e.title = action.title;
                }
                return e;
            })
        };
        default: return state;
    }
}