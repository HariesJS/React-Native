import { THEME_SET_COLOR } from "../types"

const handlers = {
    [THEME_SET_COLOR]: (state, { color }) => ({
        ...state, color
    }),
    DEFAULT: state => state
}

export const themeReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}