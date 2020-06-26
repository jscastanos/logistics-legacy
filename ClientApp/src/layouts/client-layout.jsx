import React, { useState } from 'react'; 
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarToggler, Collapse } from "reactstrap";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Route, Link } from 'react-router-dom';
import ServiceRequest from '../views/client/service-request';

import '../assets/css/layouts/client-layout.scss';

const ClientLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Container fluid>
            <Navbar expand="md" className="nb-primary">
                <NavbarBrand tag={Link} to="/">Logo here</NavbarBrand>
                <NavbarToggler onClick={toggle}>
                    <MenuRoundedIcon style={{color: "white"}} />
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/service-request">
                                <DashboardIcon />
                                <span>Dashboard</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/">
                                <AddShoppingCartIcon />
                                <span>New Request</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown className="user" nav inNavbar>
                            <DropdownToggle nav caret>
                                <span className="user-default">
                                    <PermIdentityIcon />
                                </span>
                                {/* <img className="rounded-circle" alt="user" 
                                    src={} /> */}
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
                </Collapse>
            </Navbar>
            <Route path="/service-request" component={ServiceRequest} />
           </Container>
    );
}

export default ClientLayout;