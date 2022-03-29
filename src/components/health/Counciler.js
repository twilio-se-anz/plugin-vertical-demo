import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import CouncilerTimeline from './CouncilerTimeline';

class Counciler extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Chat Escalation - Known Caller",
        "screenPopSubtitle": "Existing caller data in Dynamics",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Valentine Smith"
          },
          {
            "key": "Contact Number",
            "value": "+61424626630"
          },
          {
            "key": "Street Address",
            "value": "34 Lucas Street"
          },
          {
            "key": "Suburb",
            "value": "Camperdown"
          },
          {
            "key": "City",
            "value": "Sydney"
          }
        ]
      }
        // var screenpop = this.props.task.attributes;

        return (
        <div style={{background: "#f4f4f4"}}>
          <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "550px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <span class="card-title">{screenpop.screenPopTitle}</span>
                    <p>{screenpop.screenPopSubtitle}</p>
                  </div>
                  <div class="card-image">
                    <a href="https://twilioaus.crm6.dynamics.com/main.aspx?app=d365default&forceUCI=1&pagetype=entityrecord&etn=contact&id=38562aba-d864-ea11-a812-000d3ad20571" target="_blank">
                      <img style={{maxWidth: "80px", maxHeight: "80px", marginTop: "20px", marginRight: "30px"}} src="data:image/png;base64,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" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{minWidth: "550px", maxWidth: "550px", minHeight:"150px",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="collection" >                    
                  { screenpop.screenPopFields.map((fields) => {
                      if(fields.key == "Contact Number"){
                        return (<a href="#!" class="collection-item" onClick={() => {Actions.invokeAction("StartOutboundCall", {destination: fields.value});} }><span class="badge">{fields.value}</span>{fields.key}</a>)
                      } else {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)  
                      }
                    })}
                  </div>
                </div>
              </div>
             </div>
             <div class="row">
              <div class="card" style={{minWidth: "550px", maxWidth: "550px", marginLeft: "40px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                <div class="card-image">
                  <img style={{alignSelf: "center", maxWidth: "550px", minWidth: "550px"}} src="https://bazaar-falcon-7238.twil.io/assets/mentalHealthSerivces.png"/>
                </div>
              </div>
             </div>
            </div>
            <div class="col">
              <div style={{maxWidth: "600px", minWidth: "600px", maxHeight: '90vh', overflow: "scroll"}}>
                    <CouncilerTimeline />
              </div>
            </div>
            </div>
          </div> 
            );
    }
}

export default withTaskContext(Counciler);
