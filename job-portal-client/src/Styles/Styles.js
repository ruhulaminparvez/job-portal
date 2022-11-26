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
    imgLogo: {
        width: "50px",
        height: "50px",
    },
    footer: {
        height: "fit-content",
        backgroundColor: "#1976D2",
        color: "white",
        textAlign: "center",
        padding: "30px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.40)",
        "& img": {
            width: "50px",
            height: "50px",
        },
        "& a": {
            color: "white",
            textDecoration: "none",
        },
    },
    navLogo: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    rights: {
        marginTop: "5px",
        fontSize: "14px !important" ,
    },
    signupTxt: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& a": {
            color: "#1976D2",
            textDecoration: "none",
        }
    },
    error: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    errorImg: {
        width: "40%",
        padding: "10px",
    }
}));

export default useStyles;