import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/Home/Home";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./Components/i18n/i18n.jsx";
import AppLayout from "./AppLayout/AppLayout";
import NotFound from "./Pages/404/NotFound";
import Reserva from "./Pages/Reserva/Reserva";

export const DEFAULT_THEME = "light";

const getDesignPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === DEFAULT_THEME
      ? {
          // palette values for light mode
          primary: {
            main: "#0A95FF",
          },
          secondary: {
            main: "#ffffff",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#0a95ff",
          },
          secondary: {
            main: "#000000",
          },
        }),
  },
});

export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  changeTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const changeTheme = () => {
    setTheme(theme === DEFAULT_THEME ? "dark" : DEFAULT_THEME);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <Reserva />,
        path: "reserva",
      },
    ],
  },
  {
    element: <NotFound />,
    path: "*",
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
