import React from "react";
import { makeStyles } from "@material-ui/styles";
import { TextField, FormControl, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  SET_USERNAME,
  SET_PASSWORD,
} from "../redux/actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  login: {
    background: `url(https://picsum.photos/1920/1080?blur) no-repeat center fixed`,
    backgroundSize: "cover",
    height: "981px",
    // ["@media (max-width: ) and (min-width: )"]: {},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    boxSizing: "border-box",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "5%",
    width: "25rem",
    padding: "4rem",
    boxShadow: "5px 5px 10px 2px rgba(0,0,0,0.5)",
  },
  warningText: {
    color: "#f00",
    padding: "5px",
  },
});

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);
  const isError = useSelector((state) => state.login.isError);
  const helperText = useSelector((state) => state.login.helperText);

  const handleLogin = (e) => {
    if (username === "demo" && password === "demo") {
      dispatch(LOGIN_SUCCESSFUL());
      history.push("/administration");
    } else {
      dispatch(LOGIN_FAILED());
    }
    document.querySelector("#usr").value = "";
    document.querySelector("#pwd").value = "";
    document.querySelector("#usr").focus();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      handleLogin();
    }
  };

  const handleUsernameChange = (e) => {
    dispatch(SET_USERNAME(e));
  };

  const handlePasswordChange = (e) => {
    dispatch(SET_PASSWORD(e));
  };

  return (
    <div className={classes.login}>
      <FormControl className={classes.formGroup}>
        <TextField
          id="usr"
          label="username"
          onChange={handleUsernameChange}
          onKeyPress={handleKeyPress}
        />
        <br />
        <TextField
          id="pwd"
          label="password"
          type="password"
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
        <br />
        {helperText !== "" && isError ? (
          <div className={classes.warningText}>{helperText}</div>
        ) : (
          ""
        )}
        <br />
        <Button onClick={handleLogin} variant="contained" color="secondary">
          Login
        </Button>
      </FormControl>
    </div>
  );
};

export default Login;
