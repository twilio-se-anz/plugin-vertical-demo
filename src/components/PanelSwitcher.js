import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';
import Ecommerce from './ecommerce/Ecommerce';
import CarLoan from './finance/CarLoan';
import Mortgage from './finance/Mortgage';
import EnrouteDelivery from './logistics/EnrouteDelivery';
import PersonalLoan from './finance/PersonalLoan';
import Fraud from './finance/Fraud';
import Counciler from './health/Counciler';
import Pickup from './logistics/Pickup';
import MissedDelivery from './logistics/MissedDelivery';



class PanelSwitcher extends React.Component {
      

      render() {
        console.log(this.props.task); 
        if(this.props.task?.taskChannelUniqueName === 'voice' && this.props.task.attributes.direction === 'outbound' || this.props.task?.taskChannelUniqueName === 'callback') {
          return (     
            <Fraud/>
          );
        }

        else if(this.props.task?.taskChannelUniqueName === 'voice' && this.props.task.attributes.direction === 'inbound') {
          return (
            <Mortgage/>         
          );
        }

        else {
          return (

            // <div style={{display: "flex", background: "#ffffff", minHeight: "100vh", paddingLeft: "20px", alignItems: "center", justifyContent: "center"}}>
            //   <img style={{ maxWidth: "37vw", minWidth: "37vw", maxHeight: "60vh"}} src="https://www.twilio.com/assets/icons/twilio-icon-512_maskable.png"></img>
            // </div>
            <EnrouteDelivery/>
          );
        }
    }
}

export default withTaskContext(PanelSwitcher);
