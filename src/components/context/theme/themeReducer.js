import { SET_THEME_COLOR } from "../types";

const handlers = {
    [SET_THEME_COLOR]: (state, { color }) => ({
        ...state, color
    }),
    DEFAULT: state => state
}

export const themeReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}