import React, { Component } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import ServiceRequestItem from "../../components/service-request-item";
import ServiceRequestDetail from "../../components/service-request-detail";
import { Grid, Button, Typography, withStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import axios from "axios";

const styles = () => ({
  root: {
    borderRight: "0.125rem #F3F3FB solid",
    backgroundColor: "#FAFBFC",
  },
  body: {
    padding: "1rem",
  },
});

class ServiceRequest extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      serviceRequests: [],
    };
  }

  // DUMMY DATA
  componentDidMount = async () => {
    this._isMounted = true;

    await axios.get("../dummy-data/service-requests.json").then((response) => {
      if (this._isMounted) {
        this.setState({
          serviceRequests: response.data,
        });
      }
    });
  };

  filterData = () => {
    console.log("filter something here");
  };

  componentWillUnmount = () => {
    this._isMounted = false;
  };

  render = () => {
    const { serviceRequests } = this.state;
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item md={6} className={classes.root}>
          <Grid container>
            <Grid item xs={12} className="header">
              <Typography variant="subtitle1" color="initial">
                Service orders
                <Button
                  startIcon={<FilterListIcon />}
                  onClick={() => this.filterData()}
                >
                  Filter
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.body}>
              {serviceRequests.length > 0 ? (
                serviceRequests.map((item) => (
                  <ServiceRequestItem
                    key={item.ServiceReqId}
                    serviceRequest={item}
                  />
                ))
              ) : (
                <span>No data found!</span>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6}>
          <Route
            path="/service-request/:id?"
            component={ServiceRequestDetail}
          />
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(ServiceRequest);
