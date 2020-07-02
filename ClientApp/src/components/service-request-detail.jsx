import React, { useState } from "react";
import {
  EmojiTransportation,
  LocalShipping,
  Clear,
  QueryBuilder,
  CheckCircle,
} from "@material-ui/icons";
import { Grid, Button, Typography, makeStyles } from "@material-ui/core";
import { daysDiff, formatDate } from "../helpers/date-formatter";
import { getServiceStatus } from "../helpers/service-status";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const useStyles = makeStyles({
  paddingAll: {
    padding: "1.5625rem",
  },
  iconAsLogo: {
    fontSize: "12.5rem",
  },
  withMinHeight: {
    minHeight: "calc(100vh - 4rem)",
  },
  status: {
    position: "relative",
    marginLeft: "1.5625rem",
    textTransform: "capitalize",

    "&::before": {
      position: "absolute",
      content: '""',
      height: "0.5rem",
      width: "0.5rem",
      top: "0.3125rem",
      left: "-0.9375rem",
      borderRadius: "50%",
    },
  },
  marginBottom: {
    marginBottom: "0.625rem",
  },
  marginRight: {
    marginRight: "0.625rem",
  },
  verticalTimeline: {
    padding: 0,
    marginTop: "2.1875rem",
    "&::before": {
      backgroundColor: "#395881",
      left: "0.5rem",
      width: "0.1875rem",
    },
  },
  verticalTimelineElement: {
    margin: "0.3125rem 0",
  },
  verticalTimelineIcon: {
    height: "1.25rem",
    width: "1.25rem",
    backgroundColor: "white",
    border: "0.125rem #395881 solid",
    color: "#395881",
    boxShadow: "none",
  },
});

const serviceRequest = {
  ServiceReqId: null,
  Origin: null,
  Destination: null,
  StartDate: null,
  EndDate: null,
  ServiceReqStatus: null,
};

const ServiceRequestDetail = () => {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(serviceRequest);

  return (
    <React.Fragment>
      {selectedItem.ServiceReqId === null ||
      selectedItem.ServiceReqId === undefined ? (
        // Default
        <Grid container className={classes.withMinHeight}>
          <Grid item xs={12} className={"center-all"}>
            <div>
              <LocalShipping className={classes.iconAsLogo} color="primary" />
              <Typography variant="h5" color="initial">
                Select a service request to view details
              </Typography>
            </div>
          </Grid>
        </Grid>
      ) : (
        <React.Fragment>
          <Grid item xs={12} className="header">
            <Typography variant="subtitle1" color="initial">
              Service Details
            </Typography>
          </Grid>

          <div className={classes.withMinHeight}>
            <Grid container className={classes.paddingAll}>
              <Grid item xs={12} className={classes.marginBottom}>
                <Typography variant="body1" color="initial">
                  <strong>Status</strong> :
                  <span
                    className={`${classes.status} ${getServiceStatus(
                      selectedItem.ServiceReqStatus
                    )}`}
                  >
                    {getServiceStatus(selectedItem.ServiceReqStatus)}
                  </span>
                </Typography>
              </Grid>
              {selectedItem.ServiceReqStatus !== 4 ? (
                <React.Fragment>
                  <Grid item xs={12} md={6} className={classes.paddingAll}>
                    <Typography
                      variant="body1"
                      color="initial"
                      className={classes.marginBottom}
                    >
                      <EmojiTransportation className={classes.marginRight} />
                      <strong>Origin</strong>
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {selectedItem.Origin}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.paddingAll}>
                    <Typography
                      variant="body1"
                      color="initial"
                      className={classes.marginBottom}
                    >
                      <EmojiTransportation className={classes.marginRight} />
                      <strong>Destination</strong>
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {selectedItem.Destination}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.paddingAll}>
                    <Typography
                      variant="body1"
                      color="initial"
                      className={classes.marginBottom}
                    >
                      <QueryBuilder className={classes.marginRight} />
                      <strong>Duration</strong>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      className={classes.marginBottom}
                    >
                      {daysDiff(selectedItem.StartDate, selectedItem.EndDate)}{" "}
                      Days
                    </Typography>
                    <Typography variant="body1" color="initial">
                      {formatDate(selectedItem.StartDate, "DD MMM YYYY")} -{" "}
                      {formatDate(selectedItem.EndDate, "DD MMM YYYY")}
                    </Typography>
                  </Grid>
                  {selectedItem.ServiceReqStatus !== 1 && (
                    <Grid item xs={12} className={classes.paddingAll}>
                      <Typography variant="body1" color="initial">
                        <LocalShipping className={classes.marginRight} />
                        <strong>Timeline</strong>
                      </Typography>

                      <VerticalTimeline
                        layout={"1-column"}
                        animate={false}
                        className={classes.verticalTimeline}
                      >
                        <VerticalTimelineElement
                          className={classes.verticalTimelineElement}
                          iconClassName={classes.verticalTimelineIcon}
                          contentStyle={{
                            boxShadow: "none",
                            marginLeft: "1.875rem",
                            padding: "0 0.9375rem 0.625rem 0.9375rem",
                          }}
                          icon={<CheckCircle />}
                        >
                          <Typography variant="body1" color="initial">
                            Service Request Accepted
                          </Typography>
                          <Typography variant="body1" color="initial">
                            (date here)
                          </Typography>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className={classes.verticalTimelineElement}
                          iconClassName={classes.verticalTimelineIcon}
                          contentStyle={{
                            boxShadow: "none",
                            marginLeft: "1.875rem",
                            padding: "0 0.9375rem 0.625rem 0.9375rem",
                          }}
                          icon={<CheckCircle />}
                        >
                          <Typography variant="body1" color="initial">
                            On Delivery
                          </Typography>
                          <Typography variant="body1" color="initial">
                            (date here)
                          </Typography>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                          className={classes.verticalTimelineElement}
                          iconClassName={classes.verticalTimelineIcon}
                          contentStyle={{
                            boxShadow: "none",
                            marginLeft: "1.875rem",
                            padding: "0 0.9375rem 0.625rem 0.9375rem",
                          }}
                          icon={<CheckCircle />}
                        >
                          <Typography variant="body1" color="initial">
                            Delivered
                          </Typography>
                          <Typography variant="body1" color="initial">
                            (date here)
                          </Typography>
                        </VerticalTimelineElement>
                      </VerticalTimeline>
                    </Grid>
                  )}
                </React.Fragment>
              ) : (
                <Grid container className={classes.withMinHeight}>
                  <Grid item xs={12}>
                    <div className={"textCenter"}>
                      <Clear className={classes.iconAsLogo} color="primary" />
                      <Typography variant="h5" color="initial">
                        The service order was denied.
                      </Typography>
                    </div>
                    <Typography variant="subtitle1" color="initial">
                      <strong>Remarks</strong>
                    </Typography>
                    <Typography
                      variant="body1"
                      color="initial"
                      className={classes.marginBottom}
                    >
                      Bacon ipsum dolor amet doner hamburger shankle, burgdoggen
                      boudin pig tri-tip sausage. Venison pork chop turducken
                      rump tongue bresaola. Short loin tongue capicola pastrami
                      swine pork loin bresaola. Corned beef chuck tenderloin
                      bresaola. Pig alcatra cupim pancetta jowl ribeye,
                      burgdoggen ham hock corned beef porchetta cow turducken
                      boudin tongue frankfurter. Doner short ribs jowl porchetta
                      shoulder turkey leberkas. Kielbasa fatback flank jerky
                      salami pastrami hamburger tail.
                    </Typography>
                    <div className={"textCenter"}>
                      <Button variant="contained" color="primary">
                        Update Service Details
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ServiceRequestDetail;
