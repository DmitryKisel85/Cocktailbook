// создаем стили для компонентов MUI
import { makeStyles } from "@mui/styles";
import { theme } from "../../services/muiConfig";

export const useStyles = makeStyles({
    container: {
        position: "relative!important" as "relative",
        maxWidth: "800px!important",
        borderRadius: "12px!important",
        display: "flex!important",
        flexDirection: "column!important" as "column",
        padding: "30px 40px!important",
        margin: "50px auto!important",
        backgroundImage:
            "linear-gradient(45deg, #a27639 0%, #ae7f3d 11%, #bd8a42 21%, #c89246 31%, #cd974c 41%, #ce9b50 51%, #cf9e54 60%, #d1a25c 70%, #d4a768 80%, #d8ae74 90%, #dbb580 100%)!important",
    },
    listTitle: {
        textAlign: "center!important" as "center",
        textTransform: "uppercase!important" as "uppercase",
        fontFamily: "Syne!important",
        marginBottom: "30px!important",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "15px!important",
        },
    },

    listItem: {
        padding: "20px 0!important",
        "&:last-child": {
            padding: "20px 0 0 0!important",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "10px 0!important",
            "&:last-child": {
                padding: "10px 0 10px 0!important",
            },
        },
    },
    listImageBox: {
        width: "350px!important",
        height: "350px!important",
        margin: "20px auto 20px auto!important",
        [theme.breakpoints.down("sm")]: {
            width: "300px!important",
            height: "300px!important",
        },
        [theme.breakpoints.down("xs")]: {
            width: "275px!important",
            height: "275px!important",
        },
    },
    listImage: {
        width: "100%!important",
        height: "100%!important",
        objectFit: "cover!important" as "cover",
    },

    backButton: {
        position: "absolute!important" as "absolute",
        left: "20px!important",
        top: "20px!important",
        fontSize: "20px!important",
        color: "#40312a!important",
        transform: "scale(1)",
        transition: "transform 0.3s",
        "&:hover": {
            transform: "scale(1.1)!important",
        },
    },
});
