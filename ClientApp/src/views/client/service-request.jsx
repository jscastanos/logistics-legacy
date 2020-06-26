import React, { Component } from 'react';
import { Row, Col, Navbar, NavItem, Nav, NavLink, NavbarText } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import ServiceRequestItem from '../../components/service-request-item';
import '../../assets/css/views/client/service-request.scss';
import ServiceRequestDetail from '../../components/service-request-detail';
import { Route } from 'react-router-dom';
import axios from 'axios';

class ServiceRequest extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            serviceRequests : []
        }
    }
    
    // DUMMY DATA
    componentDidMount = async () =>{
        this._isMounted = true;
        
        await axios.get('../dummy-data/service-requests.json')
                    .then(response => {
                        if(this._isMounted){
                            this.setState({
                                serviceRequests : response.data
                            })
                        }
                    });
    }

    filterData = () => {
        console.log("filter something here")
    }

    componentWillUnmount = () => {
        this._isMounted = false;
    }

    render = () => {
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