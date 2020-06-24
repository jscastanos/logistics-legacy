import React, { Component } from 'react';

class ServiceRequestDetail extends Component{
    componentDidMount(){
        // Call API FOR DETAILS
    }

    componentDidUpdate(){
        console.log(`current id is ${this.props.match.params.id}`)
    }

    render(){

        return(
            <div>
                Call api to fetch details {this.props.match.params.id}
            </div>
        )
    }
}

export default ServiceRequestDetail;