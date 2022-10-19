import { makeStyles } from "@mui/styles";
import { theme } from "../../services/muiConfig";

export const useStyles = makeStyles({
    textField: {
        display: "block!important",
        position: "relative!important" as "relative",
        paddingBottom: "30px!important",
        [theme.breakpoints.down("sm")]: {
            paddingBottom: "25px!important",
        },
    },
    helperText: {
        position: "absolute!important" as "absolute",
        bottom: "10px!important",
        color: "#d32f2f!important",
        [theme.breakpoints.down("sm")]: {
            bottom: "5px!important",
        },
    },
});
