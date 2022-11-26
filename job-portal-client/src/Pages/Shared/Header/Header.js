import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../../Assets/logo/logo.png";
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import useStyles from '../../../Styles/Styles';

const Header = () => {
  const classes = useStyles(); 

  return (
    <CssBaseline>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="logo"
              >
                <img style={{ width: "50px" }} src={logo} alt="" />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.title}>
              <Link to="/">Job Portal</Link>
            </Typography>
            <Link to="/login" style={{ color: "white" }} className={classes.loginBtn}>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </CssBaseline>
  );
};

export default Header;
