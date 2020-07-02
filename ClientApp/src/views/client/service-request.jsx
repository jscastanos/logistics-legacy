import React, { useState, useEffect } from "react";
import FilterListIcon from "@material-ui/icons/FilterList";
import ServiceRequestItem from "../../components/service-request-item";
import ServiceRequestDetail from "../../components/service-request-detail";
import { Grid, Button, Typography, makeStyles } from "@material-ui/core";
import { Route } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    borderRight: "0.125rem #F3F3FB solid",
    backgroundColor: "#FAFBFC",
  },
  body: {
    padding: "1rem",
  },
});

const ServiceRequest = () => {
  const classes = useStyles();

  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    axios.get("../dummy-data/service-requests.json").then((response) => {
      setServiceRequests(response.data);
    });
  }, []);

  const filterData = () => {
    console.log("filter something here");
  };

  return (
    <Grid container>
      <Grid item md={6} className={classes.root}>
        <Grid container>
          <Grid item xs={12} className="header">
            <Typography variant="subtitle1" color="initial">
              Service orders
              <Button startIcon={<FilterListIcon />} onClick={filterData}>
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
        <Route path="/service-request/:id?" component={ServiceRequestDetail} />
      </Grid>
    </Grid>
  );
};

export default ServiceRequest;
