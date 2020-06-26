import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';
import { formatDate } from '../helpers/date-formatter';
import '../assets/css/components/service-request-item.scss';
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
            <div className={`service-item ${getServiceStatus(serviceRequest.ServiceReqStatus)}`}>
                <NavLink to={`/service-request/${serviceRequest.ServiceReqId}`}>
                    <Row>
                        <Col>
                            <p>
                                {formatDate(serviceRequest.StartDate, 'D MMM') } - { formatDate(serviceRequest.EndDate, 'D MMM YYYY')}
                            </p>
                        </Col>
                        <Col className="d-sm-block d-none">
                            <p>
                                {serviceRequest.Origin} - {serviceRequest.Destination}
                            </p>
                        </Col>
                        <Col md="1" xs="2">
                            <MaterialIcon icon="keyboard_arrow_right" />
                        </Col>
                    </Row>
                </NavLink>
            </div>
        )
    }
}

export default ServiceRequestItem;