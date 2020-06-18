import React, { Component } from 'react'; 
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
import MaterialIcon from 'material-icons-react';
import { Route, Link } from 'react-router-dom';
import ServiceRequest from '../views/client/service-request';
import ServiceRequestApproved from '../views/client/service-request-approved';
import ServiceRequestCompleted from '../views/client/service-request-completed';
import ServiceRequestDenied from '../views/client/service-request-denied';
import ServiceRequestPending from '../views/client/service-request-pending';

import './css/client-layout.scss';

class ClientLayout extends Component{
    render(){
        return(
            <Container fluid>
                <Navbar>
                    <NavbarBrand tag={Link} to="/">Logo here</NavbarBrand>
                    <Nav className="mr-auto">
                        <NavItem>
                            <NavLink tag={Link} to="/service-request">
                                <MaterialIcon icon="dashboard" />
                                 <span>Dashboard</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                <MaterialIcon icon="add_shopping_cart" />
                                <span>New Request</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto">
                        <UncontrolledDropdown className="user" nav inNavbar>
                            <DropdownToggle nav caret>
                                <img className="rounded-circle" alt="user" 
                                    src="https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg" />
                                <span>John Doe</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    option 1
                                </DropdownItem>
                                <DropdownItem>
                                    option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                   Log out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
                <Route path="/service-request" exact component={ServiceRequest} />
                <Route path="/service-request/approved" component={ServiceRequestApproved} />
                <Route path="/service-request/completed" component={ServiceRequestCompleted} />
                <Route path="/service-request/denied" component={ServiceRequestDenied} />
                <Route path="/service-request/pending" component={ServiceRequestPending} />
            </Container>
        );
    }
}

export default ClientLayout;