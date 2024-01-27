import { createSlice } from "@reduxjs/toolkit";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: () => {
      console.log("Login");
    },
    logoutUser: () => {
      console.log("Logout");
    },
    toggleTheme: (state) => {
      const { winter, dracula } = themes;
      const changeTheme = state.theme === dracula ? winter : dracula;
      state.theme = changeTheme;
      document.documentElement.setAttribute("data-theme", changeTheme);
      localStorage.setItem("theme", changeTheme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
