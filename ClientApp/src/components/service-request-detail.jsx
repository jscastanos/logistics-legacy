import React, { Component } from 'react';
import { EmojiTransportation, LocalShipping, Clear, QueryBuilder} from '@material-ui/icons';
import { Grid, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { daysDiff, formatDate } from '../helpers/date-formatter';
import { getServiceStatus } from '../helpers/service-status';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const init = {
    selectedItem : {
        ServiceReqId: null,
        Origin: null,
        Destination: null,
        StartDate: null,
        EndDate: null,
        ServiceReqStatus: null,
    },
}

class ServiceRequestDetail extends Component{
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = init;
    }

    componentDidMount = () => {
        this._isMounted = true; 
    }

    componentDidUpdate = async () => {
        const currentSelectedId = this.props.match.params.id;

        if(this._isMounted){
           if(currentSelectedId !== undefined && this.state.selectedItem.ServiceReqId !== parseInt(currentSelectedId)){
               await this.getServiceRequestDetails(currentSelectedId)

           }else if(currentSelectedId === undefined && this.state.selectedItem.ServiceReqId !== null){
               this.setState(init)
           }
        }
        
    }

    getServiceRequestDetails = async (id) => {
        await axios.get("../dummy-data/service-requests.json")
                    .then(response => {
                        this.setState({
                            selectedItem : response.data[id - 1]
                        })
                    });
    }

    componentWillUnmount = () =>{
        this._isMounted = false;
    }

    render = () =>{   
        const { selectedItem } = this.state;

        return(
            <Grid container>
                { (selectedItem.ServiceReqId === null || selectedItem.ServiceReqId === undefined) ? 
                    // Default
                    <Grid item>
                        <div>
                            <LocalShipping />
                            <p>Select a service request to view details</p>
                        </div>
                    </Grid>

                : 
                    <React.Fragment>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" color="initial">
                                Service Details
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <strong>Status</strong> : 
                                            <span className={"status " + getServiceStatus(selectedItem.ServiceReqStatus)}>
                                                {getServiceStatus(selectedItem.ServiceReqStatus)}
                                            </span>
                                        </Grid>
                                        <Grid item xs={12}  md={6}>
                                            <strong>Reference No</strong> : <span>12312 ("hardcoded data")</span>
                                        </Grid>
                                    </Grid>                               
                                </Grid>
                            </Grid>
                            <Grid container>
                                { selectedItem.ServiceReqStatus !== 4 ? 
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} md={6}>
                                            <p>
                                                <EmojiTransportation />
                                                <strong>Origin</strong>
                                            </p>
                                            <div>
                                                <p>{ selectedItem.Origin }</p>
                                            </div>
                                        
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <p>
                                                <EmojiTransportation />
                                                <strong>Destination</strong>
                                            </p>
                                            <div>
                                                <p>{ selectedItem.Destination }</p>
                                            </div>                                                
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <p>
                                                <QueryBuilder />
                                                <strong>Duration</strong>
                                            </p>
                                            <div>
                                                <p>{ daysDiff(selectedItem.StartDate, selectedItem.EndDate) } Days</p>
                                                <p>{ formatDate(selectedItem.StartDate, "DD MMM YYYY") } - { formatDate(selectedItem.EndDate, "DD MMM YYYY")}</p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        { selectedItem.ServiceReqStatus !== 1 &&
                                            <Grid item>
                                                <p>
                                                    <LocalShipping />
                                                    <strong>Timeline</strong>
                                                </p>
                                                <VerticalTimeline 
                                                    layout={'1-column'}
                                                    animate={false}>
                                                    <VerticalTimelineElement iconClassName={"active"}> 
                                                        <p className="vertical-timeline-element-title">Service Request Accepted</p>
                                                        <p>(date here)</p>
                                                    </VerticalTimelineElement>
                                                    
                                                    <VerticalTimelineElement>
                                                        <p className="vertical-timeline-element-title">On Delivery</p>
                                                        <p>(date here)</p>
                                                    </VerticalTimelineElement>
                                                    
                                                    <VerticalTimelineElement>
                                                        <p className="vertical-timeline-element-title">Delivered</p>
                                                        <p>(date here)</p>
                                                    </VerticalTimelineElement>
                                                </VerticalTimeline>
                                            </Grid>
                                        }
                                    </Grid>
                                </Grid>
                                :
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item>
                                            <div className="title">
                                                <div>
                                                    <Clear/>
                                                    <h1>The service order was denied.</h1>
                                                </div>
                                            </div>
                                            <div className="remarks">
                                                <p><strong>Remarks</strong></p>
                                                <p>
                                                    Bacon ipsum dolor amet doner hamburger shankle, burgdoggen boudin pig tri-tip sausage. Venison pork chop turducken rump tongue bresaola. Short loin tongue capicola pastrami swine pork loin bresaola. Corned beef chuck tenderloin bresaola. Pig alcatra cupim pancetta jowl ribeye, burgdoggen ham hock corned beef porchetta cow turducken boudin tongue frankfurter. Doner short ribs jowl porchetta shoulder turkey leberkas. Kielbasa fatback flank jerky salami pastrami hamburger tail.
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button color="primary">Update Service Details</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                }
                            </Grid>
                            
                        </Grid>
                    </React.Fragment>
                }
            </Grid>
        )
    }
}

export default ServiceRequestDetail;