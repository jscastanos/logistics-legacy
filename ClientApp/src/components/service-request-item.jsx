import React, { Component } from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { formatDate } from '../helpers/date-formatter';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { getServiceStatus } from '../helpers/service-status';

class ServiceRequestItem extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            serviceRequest : props.serviceRequest,
        }
    }

    render(){
        const { serviceRequest } = this.state;
        return(
                <NavLink to={`/service-request/${serviceRequest.ServiceReqId}`}
                        className={`service-item ${getServiceStatus(serviceRequest.ServiceReqStatus)}`}>
                    <Grid container>
                        <Grid item>
                            <p>
                                {formatDate(serviceRequest.StartDate, 'D MMM') } - { formatDate(serviceRequest.EndDate, 'D MMM YYYY')}
                            </p>
                        </Grid>
                        <Grid item>
                            <p>
                                {serviceRequest.Origin} - {serviceRequest.Destination}
                            </p>
                        </Grid>
                        <Grid item md={1} xs={2}>
                            <KeyboardArrowRightIcon className="primary-font" />
                        </Grid>
                    </Grid>
                </NavLink>
        )
    }
}

export default ServiceRequestItem;