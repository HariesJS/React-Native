import { SET_SCREEN, SET_INDEX } from "../types";

const handlers = {
    [SET_SCREEN]: (state, { todoId }) => ({
        ...state, todoId
    }),
    [SET_INDEX]: (state, { index }) => ({
        ...state, index
    }),
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}