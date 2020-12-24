import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Sidebar";
import AdminRight from "../components/AdminRight";

const useStyles = makeStyles((theme) => ({
  admin: {
    flexGrow: "1",
  },
  sidebar: {zIndex: 999},
  adminRight: {zIndex: 1},
}));

const Admin = () => {
  const classes = useStyles();

  return (
    <Grid container alignItems="stretch" className={classes.admin}>
      <Grid className={classes.sidebar} item xs={2}>
        <Sidebar />
      </Grid>
      <Grid className={classes.adminRight} item xs={10}>
        <AdminRight />
      </Grid>
    </Grid>
  );
};

export default Admin;
