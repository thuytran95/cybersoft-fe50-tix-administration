import React from "react";

import {
  AppBar,
  ClickAwayListener,
  Grow,
  IconButton,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { useDispatch, useSelector } from "react-redux";

import { CLEAR_TAB, LOGOUT } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    flexGrow: 1,
  },
  appbar__title: {
    flexGrow: 1,
  },
}));

const Appbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);

  const isLogin = useSelector((state) => state.login.isLogin);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (e) => {
    if (anchorRef.current && anchorRef.current.contains(e.target)) return;

    setOpen(false);
  };

  const handleListKeyDown = (e) => {
    if (e.key === "Tab") e.preventDefault();
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open => open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current && !open) anchorRef.current.focus();

    prevOpen.current = open;
  }, [open]);

  // Logout
  const handleLogout = (e) => {
    dispatch(LOGOUT());
    dispatch(CLEAR_TAB());
    history.push("/login");
  };

  return (
    <div className={classes.appbar}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.appbar__title} variant="h6">
            Administration
          </Typography>
          {isLogin && (
            <div>
              <IconButton
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={handleToggle}
              >
                <AccountCircleIcon />
              </IconButton>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
