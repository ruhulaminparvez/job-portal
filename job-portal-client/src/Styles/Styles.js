import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        "& a": {
            color: "white",
            textDecoration: "none",
        },
    },
    loginBtn: {
        color: "white",
        textDecoration: "none",
    },
}));

export default useStyles;