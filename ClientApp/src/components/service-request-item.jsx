import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { formatDate } from "../helpers/date-formatter";
import { Grid, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { getServiceStatus } from "../helpers/service-status";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  serviceItem: {
    display: "block",
    borderRadius: "0.3125rem",
    backgroundColor: "#fff",
    margin: "0.625rem 0",
    padding: "1.25rem",
    border: "0.125rem solid #F3F3FB",
    position: "relative",
    "&::before": {
      content: '""',
      width: "0.4375rem",
      height: "2.5rem",
      position: "absolute",
      top: "15px",
      left: "-0.25rem",
    },
    "&.active, &:hover": {
      backgroundColor: "#F3F3FB",
    },
  },
});



  export default function ServiceRequestItem({serviceRequest}) {
    
  
    const classes = useStyles();

    return (
      <NavLink
        to={`/service-request/${serviceRequest.ServiceReqId}`}
        className={`${classes.serviceItem} ${getServiceStatus(
          serviceRequest.ServiceReqStatus
        )}`}
      >
        <Grid container>
          <Grid item xs={8} md={6}>
            <Typography variant="subtitle2" color="initial">
              {formatDate(serviceRequest.StartDate, "D MMM")} -{" "}
              {formatDate(serviceRequest.EndDate, "D MMM YYYY")}
            </Typography>
          </Grid>
          <Grid item xs={3} md={5} className="grow textRight">
            <Typography
              variant="subtitle2"
              color="initial"
              className="textOverflow"
            >
              {serviceRequest.Origin} - {serviceRequest.Destination}
            </Typography>
          </Grid>
          <Grid item xs={1} className="textRight">
            <KeyboardArrowRightIcon />
          </Grid>
        </Grid>
      </NavLink>
    );
        }

