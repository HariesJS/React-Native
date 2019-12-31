import { SET_SCREEN } from "../types";

const handlers = {
    [SET_SCREEN]: (state, { todoId }) => ({ ...state, todoId }),
    DEFAULT: state => state
}

export const screenReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}