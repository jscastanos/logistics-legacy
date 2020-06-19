import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import ClientLayout from './layout/client-layout';

class App extends Component{
   constructor(props){
    super(props);
    this.state = {
        ur: ""
    }
   }

   componentDidMount(){
    // FOR DEMO PURPOSES
    // use auth to get user details
    // before creating a cookie
    const cookies = new Cookies();
    cookies.set('ur', '10001', { path: '/' });
    this.setState({
        ur: cookies.get('ur')
    }) 
   }
   render(){
       return(
           <div>
               { this.state.ur === '10001' ?  
                <ClientLayout />
               :
                this.state.ur === '50001' ?
                 <div>admin</div>   
                :
                 <div>visitor</div>
               }
           </div>
       );
   }
}

export default App;