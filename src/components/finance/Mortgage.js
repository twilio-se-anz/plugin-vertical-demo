import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import MortgageTimeline from './MortgageTimeline';
import Typography from '@material-ui/core/Typography';

class Mortgage extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Mortgage - Refinance",
        "screenPopSubtitle": "Customer interacted with chatbot and requested mortgage changes",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Fred Jones"
          },
          {
            "key": "Account Number",
            "value": "062-225 1027 7411"
          },
          {
            "key": "Date of Birth",
            "value": "02-08-1984"
          },
          {
            "key": "Home Address",
            "value": "1 George Street, Sydney"
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
                <div class="card" style={{minWidth: "550px", marginLeft: "10px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <Typography variant='h4' gutterBottom >{screenpop.screenPopTitle}</Typography>
                    <Typography variant='p'>{screenpop.screenPopSubtitle}</Typography>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "100px", minWidth: "100px", marginRight: "auto"}} src="https://bazaar-falcon-7238.twil.io/assets/westpachouse.png" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{marginLeft: "10px"}}>
                  <div class="card-image">
                    <img style={{maxWidth: "170px", minWidth: "170px", marginRight: "auto"}} src="https://ca.slack-edge.com/EFUJK1UC8-WJGBSHHDL-9db81c780f9f-512" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="collection" style={{minWidth: "370px", maxWidth: "370px", minHeight:"150px",  marginLeft: "10",  marginRight: "auto"}}>                    
                  { screenpop.screenPopFields.map((fields) => {
                      if(fields.key == "Customer Phone - (click-to-call)"){
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
              <div class="card" style={{minWidth: "550px", marginLeft: "10px", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                <div class="card-image">
                  <img style={{maxWidth: "550px", minWidth: "550px"}} src="https://bazaar-falcon-7238.twil.io/assets/Screen%20Shot%202022-02-01%20at%2011.53.08%20AM.png" />
                </div>
              </div>
             </div>
            </div>
            <div class="col">
              <div style={{maxWidth: "600px", minWidth: "600px", marginRight: "10px"}}>
                    <MortgageTimeline />
              </div>
            </div>
            </div>
          </div> 
            );
    }
}

export default withTaskContext(Mortgage);
