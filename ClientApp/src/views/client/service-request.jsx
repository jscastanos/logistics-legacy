import React, { Component } from 'react';
import { Row, Col, Navbar, NavItem, Nav, NavLink, NavbarText } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import ServiceRequestItem from '../../components/service-request-item';
import '../../assets/css/views/client/service-request.scss';
import ServiceRequestDetail from '../../components/service-request-detail';
import { Route } from 'react-router-dom';

class ServiceRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            serviceRequests : ""
        }
    }
    
    // DUMMY DATA
    componentDidMount(){
        const serviceRequests = [
            {
                "ServiceReqId": 1,
                "Origin": "Matina, Davao City",
                "Destination": "Magugpo East, Tagum City",
                "StartDate": "6/10/2020",
                "EndDate": "6/19/2020",
                "ServiceReqStatus": 1,
            },
            {
                "ServiceReqId": 2,
                "Origin": "Matina, Davao City",
                "Destination": "Cebu City",
                "StartDate": "6/10/2020",
                "EndDate": "6/19/2020",
                "ServiceReqStatus": 2,
            },
            {
                "ServiceReqId": 3,
                "Origin": "General Santos City",
                "Destination": "Mankilam, Tagum City",
                "StartDate": "6/10/2020",
                "EndDate": "6/19/2020",
                "ServiceReqStatus": 3,
            },
            {
                "ServiceReqId": 4,
                "Origin": "Pantukan, Davao de Oro",
                "Destination": "Magugpo North, Tagum City",
                "StartDate": "6/10/2020",
                "EndDate": "6/19/2020",
                "ServiceReqStatus": 4,
            }
        ];

        this.setState({
            serviceRequests
        })
    }

    filterData(){
        console.log("filter something here")
    }

    render(){
        const { serviceRequests } = this.state;
        return(
            <Row>
                {/* left panel */}
                <Col md="6">
                    <Row>
                        <Col md="12" className="br-2 bb-2">
                            <Navbar className="nb-light">
                                <NavbarText className="heading">service request</NavbarText>
                                <Nav className="ml-auto">
                                    <NavItem>
                                        <NavLink href="#" onClick={() => this.filterData()}>
                                            <MaterialIcon icon="filter_list" />
                                            <span>Filter</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col md="12" className="service-list br-2">
                                {   serviceRequests.length > 0 ? 
                                    serviceRequests.map(item => <ServiceRequestItem key={item.ServiceReqId} 
                                                                                    serviceRequest={item}/> )
                                    : <span>No data found!</span>
                                }
                        </Col>
                    </Row>
                </Col>
                {/* right panel */}
                <Col md="6">
                    <Route path="/service-request/:id?" component={ServiceRequestDetail}/>
                </Col>
            </Row>
        );
    }
}

export default ServiceRequest;