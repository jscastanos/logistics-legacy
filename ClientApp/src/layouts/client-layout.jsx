import React, { useState } from "react";
import { AddShoppingCart, AccountCircle, Dashboard } from "@material-ui/icons";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import { Route, Link } from "react-router-dom";
import ServiceRequest from "../views/client/service-request";

const useStyles = makeStyles({
  grow: {
    flexGrow: 1,
  },
  brand: {
    marginRight: "1.25rem",
  },
  root: {
    "& a": {
      textDecoration: "none",
    },
  },
  appBar: {
    "& svg, a": {
      color: "#fff",
    },
  },
});

export default function ClientLayout() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.brand}>
            Logo here
          </Typography>
          <Button startIcon={<Dashboard />}>
            <Link to={"/service-request"}>Dashboard</Link>
          </Button>
          <Button startIcon={<AddShoppingCart />}>
            <Link to={"/"}>New Request</Link>
          </Button>
          <div className={classes.grow} />
          <Typography variant="subtitle1">Name sa user</Typography>
          <IconButton onClick={handleMenu}>
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Account</MenuItem>
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Grid>
        <Route path="/service-request" component={ServiceRequest} />
      </Grid>
    </div>
  );
}
