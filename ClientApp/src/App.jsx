import React, { Component } from "react";
import Cookies from "universal-cookie";
import ClientLayout from "./layouts/client-layout";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  root: {
    margin: "-0.5rem",
  },
  "@global": {
    ".denied::before": {
      backgroundColor: "#dc3545",
    },
    ".completed::before": {
      backgroundColor: "#28a745",
    },
    ".pending::before": {
      backgroundColor: "#ffc107",
    },
    ".approved::before": {
      backgroundColor: "#007bff",
    },
    ".grow": {
      flexGrow: 1,
    },
    ".textOverflow": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    ".textCenter": {
      textAlign: "center",
    },
    ".textUpper": {
      textTransform: "Uppercase",
    },
    ".textRight": {
      textAlign: "right",
    },
    ".header": {
      padding: "0.75rem",
      borderBottom: "0.125rem #F3F3FB solid",
      backgroundColor: "#fff",
      "& h6": {
        textTransform: "uppercase",
        fontWeight: "700",
        color: "#395881",
        verticalAlign: "middle",
        lineHeight: "2.125rem",
      },
      "& button": {
        float: "right",
        color: "#395881",
      },
    },
    ".center-all": {
      display: "flex",
      justifyContent: "center",
      alignSelf: "center",
      textAlign: "center",
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ur: "",
    };
  }

  componentDidMount() {
    // FOR DEMO PURPOSES
    // use auth to get user details
    // before creating a cookie
    const cookies = new Cookies();
    cookies.set("ur", "10001", { path: "/" });
    this.setState({
      ur: cookies.get("ur"),
    });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.state.ur === "10001" ? (
          <ClientLayout />
        ) : this.state.ur === "50001" ? (
          <div>admin</div>
        ) : (
          <div>visitor</div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(App);
