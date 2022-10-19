// устанавливаем базовые настройки Material UI
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#40312a",
        },
    },

    typography: {
        fontFamily: "Syne",
        fontSize: 16,
    },
    breakpoints: {
        values: {
            xl: 1023,
            lg: 768,
            md: 525,
            sm: 450,
            xs: 360,
        },
    },
});
