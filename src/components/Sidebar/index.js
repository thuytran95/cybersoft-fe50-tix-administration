import { makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { CLONE_TAB } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    height: "981px",
    flexGrow: 1,
    boxShadow: "0px 1px 20px 1px rgba(0,0,0,0.5)",

    background: `url(https://picsum.photos/1920/1080?blur) no-repeat center fixed`,
    backgroundSize: "cover",
  },
  tabs: {
    backgroundColor: "#fff",
  },
  emptyTab: {
    background: `url(https://picsum.photos/1920/1080?blur) no-repeat center fixed`,
    backgroundSize: "cover",

    height: "3rem",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0)

  const changeAdminRight = (func) => {
    dispatch(func);
  };

  return (
    <div className={classes.sidebar}>
      <Tabs
        value={value}
        className={classes.tabs}
        variant="fullWidth"
        orientation="vertical"
      >
        <Tab 
          className={classes.emptyTab}
          label= ''
        />
        <Tab
          value={value}
          label="clone tab"
          onClick={() => {
            changeAdminRight(CLONE_TAB());
          }}
        />
      </Tabs>
    </div>
  );
};

export default Sidebar;
