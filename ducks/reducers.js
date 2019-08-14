import { APP_CHANGE_THEME } from "./types";
import { light as lightTheme, dark as darkTheme } from "./themes";

const initialState = {
  theme: darkTheme
};

export default function rootReducer(state = initialState, action) {
  if (action.type === APP_CHANGE_THEME) {
    // we need to toggle the theme
    const darkMode = action.payload;
    return { ...state, theme: darkMode ? darkTheme : lightTheme };
  }
  return state;
}
