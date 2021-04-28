import * as types from "./constants"

const initialState = {
    language: 'en',

    listComponents: []
};

export function appReducer(state = initialState, action) {
    if (state == null) state = initialState;

    if (action.type == types.REGISTER_COMPONENT) {
        state.listComponents.push(action.payload);
        return state;
    }

    if (action.type == types.SET_LANGUAGE) {
        return { ...state, language: action.payload };
    }

    return state;
}