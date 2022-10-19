import { makeStyles } from "@mui/styles";
import { theme } from "../../services/muiConfig";

// создаем стили для компонентов MUI
export const useStyles = makeStyles({
    container: {
        position: "relative!important" as "relative",
    },
    formLabel: {
        display: "block!important",
        textAlign: "center!important" as "center",
    },
    radioGroup: {
        display: "flex!important",
        flexDirection: "row!important" as "row",
        justifyContent: "center!important",
        textAlign: "center!important" as "center",
        [theme.breakpoints.down("sm")]: {
            display: "grid!important",
        },
    },
    buttonGroup: {
        margin: "20px 0 0 0!important",
        [theme.breakpoints.down("sm")]: {
            margin: "10px 0 0 0!important",
        },
    },
    button: {
        fontWeight: "bold!important",
        fontSize: [16, "!important"] as any,
    },
    closeButton: {
        position: "absolute!important" as "absolute",
        right: "-45px!important",
        top: "-35px!important",
        fontSize: [32, "!important"] as any,
        [theme.breakpoints.down("md")]: {
            right: "-25px!important",
            top: "-45px!important",
        },
        [theme.breakpoints.down("md")]: {
            right: "-35px!important",
            top: "-35px!important",
        },
    },
    helperText: {
        position: "absolute!important" as "absolute",
        bottom: "10px!important",
        color: "#d32f2f!important",
    },

    title: {
        textTransform: "uppercase",
        [theme.breakpoints.down("lg")]: {
            fontSize: [28, "!important"],
        },
        [theme.breakpoints.down("md")]: {
            fontSize: [26, "!important"],
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: [20, "!important"],
        },
    },
});
