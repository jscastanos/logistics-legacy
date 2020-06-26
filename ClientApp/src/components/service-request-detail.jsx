import React, { Component } from 'react';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Button } from 'reactstrap';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ClearIcon from '@material-ui/icons/Clear';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import axios from 'axios';
import { daysDiff, formatDate } from '../helpers/date-formatter';
import '../assets/css/components/service-request-detail.scss';
import { getServiceStatus } from '../helpers/service-status';

const init = {
    selectedItem : {
        ServiceReqId: null,
        Origin: null,
        Destination: null,
        StartDate: null,
        EndDate: null,
        ServiceReqStatus: null,
    },
    activeTab : "1"
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

    onToggleTab = (tabId) => {
        if(this._isMounted){
            this.setState({activeTab : tabId});
        }
    }

    componentWillUnmount = () =>{
        this._isMounted = false;
    }

    render = () =>{   
        const { selectedItem, activeTab } = this.state;

        return(
            <Row className="service-details">
                { (selectedItem.ServiceReqId === null || selectedItem.ServiceReqId === undefined) ? 
                    // Default
                    <Col className="default">
                        <div>
                            <LocalShippingIcon />
                            <p>Select a service request to view details</p>
                        </div>
                    </Col>

                : 
                    <Col className="withStatus">
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={(activeTab === "1" ? "active" : "")}
                                         onClick={() => this.onToggleTab("1")}>Service Details</NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col xs="12" className="header">
                                        <Row>
                                            <Col xs="12"  md="6">
                                                <strong>Status</strong> : 
                                                <span className={"status " + getServiceStatus(selectedItem.ServiceReqStatus)}>
                                                    {getServiceStatus(selectedItem.ServiceReqStatus)}
                                                </span>
                                            </Col>
                                            <Col xs="12"  md="6">
                                                <strong>Reference No</strong> : <span>12312 ("hardcoded data")</span>
                                            </Col>
                                        </Row>                               
                                    </Col>
                                </Row>
                                <Row>
                                    { selectedItem.ServiceReqStatus !== 4 ? 
                                    <Col xs="12" className="details">
                                        <Row>
                                            <Col xs="12" md="6" className="details-card">
                                                <p>
                                                    <EmojiTransportationIcon />
                                                    <strong>Origin</strong>
                                                </p>
                                                <div>
                                                    <p>{ selectedItem.Origin }</p>
                                                </div>
                                            
                                            </Col>
                                            <Col xs="12" md="6" className="details-card">
                                                <p>
                                                    <EmojiTransportationIcon />
                                                    <strong>Destination</strong>
                                                </p>
                                                <div>
                                                    <p>{ selectedItem.Destination }</p>
                                                </div>                                                
                                            </Col>
                                            <Col xs="12" md="6" className="details-card">
                                                <p>
                                                    <QueryBuilderIcon />
                                                    <strong>Duration</strong>
                                                </p>
                                                <div>
                                                    <p>{ daysDiff(selectedItem.StartDate, selectedItem.EndDate) } Days</p>
                                                    <p>{ formatDate(selectedItem.StartDate, "DD MMM YYYY") } - { formatDate(selectedItem.EndDate, "DD MMM YYYY")}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" className="details-card">

                                            </Col>
                                        </Row>
                                    </Col>
                                    :
                                    <Col xs="12" className="details denied">
                                        <Row>
                                            <Col xs="12">
                                                <div className="title">
                                                    <div>
                                                        <ClearIcon />
                                                        <h1>The service order was denied.</h1>
                                                    </div>
                                                </div>
                                                <div className="remarks">
                                                    <p><strong>Remarks</strong></p>
                                                    <p>
                                                        Bacon ipsum dolor amet doner hamburger shankle, burgdoggen boudin pig tri-tip sausage. Venison pork chop turducken rump tongue bresaola. Short loin tongue capicola pastrami swine pork loin bresaola. Corned beef chuck tenderloin bresaola. Pig alcatra cupim pancetta jowl ribeye, burgdoggen ham hock corned beef porchetta cow turducken boudin tongue frankfurter. Doner short ribs jowl porchetta shoulder turkey leberkas. Kielbasa fatback flank jerky salami pastrami hamburger tail.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col xs="12" className="text-center">
                                                <Button color="primary">Update Service Details</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                    }
                                </Row>
                            </TabPane>
                        </TabContent>
                    </Col>
                }
            </Row>
        )
    }
}

export default ServiceRequestDetail;