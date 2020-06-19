import React, { Component } from 'react';
import { Row, Col, Navbar, NavItem, Nav, NavLink, NavbarText } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import Moment from 'moment';

import './css/service-request.scss';

class ServiceRequest extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : ""
        }
    }
    
    // DUMMY DATA
    componentDidMount(){
        const serviceRequestData = [
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
            data: serviceRequestData
        })
    }

    filterData(){
        console.log("filter something here")
    }
    render(){
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
                                { this.state.data.length > 0 ? 
                                    this.state.data.map( d =>
                                    <div key={d.ServiceReqId} className={
                                        "service-item " +
                                        (
                                            d.ServiceReqStatus === 4 ? "denied" :
                                            d.ServiceReqStatus === 3 ? "completed" :
                                            d.ServiceReqStatus === 2 ? "approved" : ""
                                        )
                                    }>
                                        <Row>
                                            <Col>
                                                <p>
                                                    { Moment(d.StartDate).format('D MMM') } - { Moment(d.EndDate).format('D MMM YYYY')}
                                                </p>
                                           </Col>
                                            <Col className="d-sm-block d-none">
                                                <p>
                                                    {d.Origin} - {d.Destination}
                                                </p>
                                            </Col>
                                            <Col md="1" xs="2">
                                                <MaterialIcon icon="keyboard_arrow_right" />
                                            </Col>
                                        </Row>
                                    </div>
                                )
                                :
                                <span>No data found!</span>
                                }
                        </Col>
                    </Row>
                </Col>

                {/* right panel */}
                <Col md="6">
                </Col>
            </Row>
        );
    }
}

export default ServiceRequest;