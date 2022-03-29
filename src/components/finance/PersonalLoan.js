import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import PersonalLoanTimeline from './PersonalLoanTimeline';

class Mortgage extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "New Business - Personal Loan",
        "screenPopSubtitle": "Customer requested a callback regardong a Personal Loan of $12,000",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Mark Hannan"
          },
          {
            "key": "Customer Account Number",
            "value": "062-225 1027 7411"
          },
          {
            "key": "Date of Birth",
            "value": "02-08-1984"
          },
          {
            "key": "HomeAddress",
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
                <div class="card" style={{minWidth: "600px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <span class="card-title">{screenpop.screenPopTitle}</span>
                    <p>{screenpop.screenPopSubtitle}</p>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "100px", minWidth: "100px", marginRight: "auto"}} src="https://www.macquarie.com.au/home-loans/campaign/home-loans/_jcr_content/parsys/container_thirds/left-text/image.coreimg.svg/1629686258225/real-estate-80-dark.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{marginLeft: "30px"}}>
                  <div class="card-image">
                    <img style={{maxWidth: "170px", minWidth: "170px", marginRight: "auto"}} src="https://ca.slack-edge.com/EFUJK1UC8-WR6US3DQD-4d17dd35c157-512" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="collection" style={{minWidth: "410px", maxWidth: "410px", minHeight:"150px",  marginLeft: "auto",  marginRight: "auto"}}>                    
                    { screenpop.screenPopFields.map((fields) => {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                    })}
                  </div>
                </div>
              </div>
             </div>
             <div class="row">
              
                  <img style={{maxWidth: "605px", minWidth: "605px", marginLeft: "40px", marginRight: "0px"}} src="https://bazaar-falcon-7238.twil.io/assets/money3apply.png" />
                
              
             </div>
            </div>
            <div class="col">
              <div style={{maxWidth: "750px", minWidth: "750px", marginRight: "auto"}}>
                    <PersonalLoanTimeline />
              </div>
            </div>
            </div>
          </div> 
            );
    }
}

export default withTaskContext(Mortgage);
