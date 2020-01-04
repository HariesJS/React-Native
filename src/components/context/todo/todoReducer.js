import { ADD_TODO, DELETE_TODO, CHANGE_TODO, FETCH_TODOS, SET_LOADER, SET_ERROR } from "../types";

const handlers = {
    [ADD_TODO]: (state, { title, id }) => ({
        ...state, todo: [ ...state.todo, { id, title } ]
    }),
    [DELETE_TODO]: (state, { id }) => ({
        ...state, todo: state.todo.filter(e => e.id !== id)
    }),
    [CHANGE_TODO]: (state, { id, title }) => ({
        ...state, todo: state.todo.map(e => {
            if (e.id === id) {
                e.title = title;
            }
            return e;
        })
    }),
    [FETCH_TODOS]: (state, { todo }) => ({
        ...state, todo
    }),
    [SET_LOADER]: (state, { load }) => ({
        ...state, isLoad: load
    }),
    [SET_ERROR]: (state, { error }) => ({
        ...state, error
    }),
    DEFAULT: state => state
}

export const todoReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}