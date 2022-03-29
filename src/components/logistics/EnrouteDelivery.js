import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import Typography from '@material-ui/core/Typography';

class EnrouteDelivery extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Live Chat - Delivery Enroute",
        "screenPopSubtitle": "Delivery Partner - Mark Hannan",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Valentine Smith"
          },
          {
            "key": "Courier Phone - (click-to-call)",
            "value": "+61424626630"
          },
          {
            "key": "Delivery Address",
            "value": "127 Railway Pde"
          },
          {
            "key": "Suburb",
            "value": "Erskineville"
          },
          {
            "key": "City",
            "value": "Sydney"
          }
        ]
      }
        // var screenpop = this.props.task.attributes;

        return (
        <div style={{background: "#ffffff", minHeight: "100vh"}}>
        <div style={{background: "#f4f4f4", margin: '20px', minHeight: "90vh"}}>
          <div class="row">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "550px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <Typography variant='h4' gutterBottom >{screenpop.screenPopTitle}</Typography>
                    <Typography variant='p'>{screenpop.screenPopSubtitle}</Typography>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "80px", maxHeight: "80px", marginTop: "20px", marginRight: "30px", borderRadius: '50%'}} src="https://ca.slack-edge.com/EFUJK1UC8-WR6US3DQD-4d17dd35c157-512" /> 
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{minWidth: "550px", maxWidth: "550px", minHeight:"150px",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="collection" >                    
                  { screenpop.screenPopFields.map((fields) => {
                      if(fields.key == "Courier Phone - (click-to-call)"){
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
                  <img style={{alignSelf: "center", maxWidth: "550px", minWidth: "550px"}} src="https://bazaar-falcon-7238.twil.io/assets/milrunmap.png"/>
                </div>
              </div>
             </div>
            </div>
            </div>
          </div>
          </div> 
            );
    }
}

export default withTaskContext(EnrouteDelivery);
