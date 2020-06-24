import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MaterialIcon from 'material-icons-react';

import '../assets/css/components/service-request-detail.scss';

class ServiceRequestDetail extends Component{
    _isMounted = false;

    constructor(props){
        super(props);
        this.state = {
            selectedItemId : null
        }
    }

    componentDidMount(){
        // Call API FOR DETAILS
        this._isMounted = true; 
    }

    componentDidUpdate(){
        if(this.props.match.params.id !== this.state.selectedItemId && this._isMounted){
            this.setState({
                selectedItemId: this.props.match.params.id
            })
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){   
        const {selectedItemId} = this.state;

        return(
            <Row className="service-details">
                { (selectedItemId === null || selectedItemId === undefined) ? 
                    // Default
                    <Col className="default">
                        <div>
                            <MaterialIcon icon="local_shipping" />
                            <p>Select a service request to view details</p>
                        </div>
                    </Col>

                : <span>has id {selectedItemId}</span>
                }
            </Row>
        )
    }
}

export default ServiceRequestDetail;