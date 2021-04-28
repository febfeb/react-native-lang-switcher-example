import * as types from "./constants"

export function registerComponent(payload) {
    return { type: types.REGISTER_COMPONENT, payload };
};

export function setLanguage(payload) {
    return { type: types.SET_LANGUAGE, payload };
};