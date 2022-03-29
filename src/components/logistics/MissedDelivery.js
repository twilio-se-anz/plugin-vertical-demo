import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import Typography from '@material-ui/core/Typography';
import MissedDeliveryTimeline from './MissedDeliveryTimeline';

class MissedDelivery extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Package Delivery - Missing Package",
        "screenPopSubtitle": "Customer interacted with chatbot and requested human assistance",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Fred Jones"
          },
          {
            "key": "Contact Number",
            "value": "+61405468859"
          },
          {
            "key": "Street Address",
            "value": "34 Hay Street"
          },
          {
            "key": "Suburb",
            "value": "Oriental Bay"
          },
          {
            "key": "City",
            "value": "Wellignton"
          }
        ]
      }
        return (
        <div style={{background: "#f4f4f4"}}>
          <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "550px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <Typography variant='h5' gutterBottom >{screenpop.screenPopTitle}</Typography>
                    <Typography variant='p'>{screenpop.screenPopSubtitle}</Typography>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "100px", minWidth: "100px", marginRight: "20px"}} src="https://www.nzpost.co.nz/sites/nz/files/icons/Find%20an%20address_6.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{minWidth: "550px", maxWidth: "550px", minHeight:"150px",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="collection" >                    
                  { screenpop.screenPopFields.map((fields) => {
                      if(fields.key == "Customer Number)"){
                        return (<a href="#!" class="collection-item" onClick={() => {Actions.invokeAction("StartOutboundCall", {destination: fields.value});} }><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)
                      } else {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)  
                      }
                    })}
                  </div>
                </div>
              </div>
             </div>
             <div class="row">
              <div class="card" style={{minWidth: "550px", maxWidth: "550px", marginLeft: "40px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                <div class="card-image">
                  <img style={{alignSelf: "center", maxWidth: "550px", minWidth: "550px"}} src="https://i.guim.co.uk/img/media/0af099e04ed73c7abe91e02073f2c18c421386e9/0_365_5472_3283/master/5472.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=8f801dc225ac1ea6e56b908b503cd6b0"/>
                </div>
              </div>
             </div>
             <div class="row">
              <div class="card" style={{minWidth: "550px", maxWidth: "550px", marginLeft: "40px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                <div class="card-content">
                    <span class="card-title">Delivery TimeStamp: 10:06am 20-March-2022</span>
                </div>
              </div>
             </div>
            </div>
            <div class="col">
              <div style={{maxWidth: "600px", minWidth: "600px", maxHeight: '90vh', overflow: "scroll"}}>
                    <MissedDeliveryTimeline />
              </div>
            </div>
            </div>
          </div> 
            );
    }
}

export default withTaskContext(MissedDelivery);
