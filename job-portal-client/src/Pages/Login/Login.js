import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useStyles from '../../Styles/Styles';
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';

const theme = createTheme();

const Login = () => {
  const classes = useStyles(); 
  const {signInUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    signInUser(data.get('email'), data.get('password'))
      .then((result) => {
        console.log(result);
        const user = result.user;
        if(user){
          toast('User Logged In Successfully');
        }

        const currentUser = {
          email: user.email
        }

        //get token
        fetch('https://job-portal-weld.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem('job-token', data.token);
                        navigate(from, { replace: true });
                    });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message);
      });
   
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container className={classes.signupTxt}>
              <Grid item>
                <Link to="/signup" variant="body2">
                   <p>Don't have an account? Registration</p> 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
