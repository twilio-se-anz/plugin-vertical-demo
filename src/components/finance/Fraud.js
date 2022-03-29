import React from 'react';
import { withTaskContext, Actions } from '@twilio/flex-ui';
import Typography from '@material-ui/core/Typography';

class Fraud extends React.Component {

      render() {

        var screenpop = { 
        "screenPopTitle": "Suspicious Transaction Follow-up Call",
        "screenPopSubtitle": "Customer requested followup via mobile app notification",
        "screenPopFields": [
          {
            "key": "Customer Name",
            "value": "Fred Jones"
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
            "key": "Customer Phone",
            "value": "+61424626630"
          }
        ],
        "screenPopFields2": [
          {
            "key": "Merchant",
            "value": "Shady Cabs - Melbourne, Australia"
          },
          {
            "key": "Device Trust Score",
            "value": "0.3"
          },
          {
            "key": "Method",
            "value": "Online payment Gateway - CVV"
          },
          {
            "key": "Fraud Flag",
            "value": "Transaction processed overseas"
          }
        ],
        "screenPopTable1": {
          "title": "Contact History",
          "columns": [
            "Case ID",
            "Description",
            "Priority",
            "Status",
            "Creation Date"
          ],
          "rows": [
            {
              "values": [
                "CAS1231",
                "Address Change",
                "1",
                "Residential Address updated.",
                "12-Jan-2020"
              ]
            },
            {
              "values": [
                "CAS10078",
                "Billing updated",
                "4",
                "Change of direct debit details",
                "14-Mar-2018"
              ]
            },
            {
              "values": [
                "CAS10456",
                "Name Change",
                "4",
                "Marriage Certificate provided",
                "14-Mar-2008"
              ]
            }
          ]
        },
        "screenPopTable2": {
          "title": "Transaction History",
          "columns": [
            "Date",
            "Merchant",
            "value",
            "Status",
            
            
          ],
          "rows": [
            {
              "values": [
                "03-08-2021",
                "Shady Cabs - Melbourne, Australia",
                "$28",
                "Suspicious",
                
                
              ]
            },
            {
              "values": [
                "12-Jan-2020",
                "Apple - George Street",
                "$1,000",
                "Approved",
                
                
              ]
            },
            {
              "values": [
                "26-Aug-2019",
                "JB Hi-Fi - The Grand Arcade",
                "$1,320",
                "Approved",
                
                
              ]
            },
          ]
        }
      }
        // var screenpop = this.props.task.attributes;

        return (
        <div style={{background: "#f4f4f4", minHeight: "100vh"}}>
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "1150px", marginLeft: "30px",  marginRight: "auto", marginTop: "10px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <Typography variant='h4' gutterBottom >{screenpop.screenPopTitle}</Typography>
                    <Typography variant='p'>{screenpop.screenPopSubtitle}</Typography>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "200px", minWidth: "200px", marginRight: "auto"}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExIVFhUWFxUYFhUWFxcXFhUXFRoWGBUXFhkaHSghGBolHRgWIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtLS0tLy0uLSsvLS03LS0tLS0tLS0tKy8tLS0vLS8tLS0uLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAQL/xAA+EAABAwIBCQYCCgEEAwEAAAABAAIDBBEhBQYHEjFBUZGhEyJhcYGxMmIUIzNCUnKissHRkkNTc4I0Y/Ak/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADkRAAEDAgMEBwYFBAMAAAAAAAEAAgMEEQUhMRJBcaETMlFhgZHBFCIzsdHwFUKC4fEjUnLCQ6Ky/9oADAMBAAIRAxEAPwDcURERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERfF9REREXDPO1gu5zWji4gDqoetzvoYrg1MZI3MOuf03WC4DUqSOKSQ2Y0ngCVPIqFXaT6Zv2UUkh4mzB1x6KArNJtU7COKJg8Wuc7mSB0URnYN6vxYPWSfltxIHLXktcXVqayOMXkkYwcXODfcrG3ZVyrUmzTUG+6Nrw23m0AW9Vz02YFfMQ6QNZfa577nkLnqtenJ6rVY/B44/jzNbw15kHkVpLs8KAG30mP0uRzAspKgyhFM3WikY9vFjgbedtizmPRZLbGpaD4NJCrt58lVltYXaW31b6r2HEg+l/IrBme3NwyW7cNpJ7tppbuA0I15D1st0RcbHggEbCLg+BXIrK4KIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIvhUZWZdpYvtKiJp4a41v8RisEgarZrHPNmi57lKIqbW6RaFl9UvkPytsD6usoGu0pPP2MAHjIS79Lbe6jMzBvV6PCquTRluOXzstQX4e8DEkDzWMT565SnNmOLb7o4/8A49VxjIOVKk9+OYg75SWt5PI6LT2gHqi6uDBHMzmka3x+uyOa1Wtzmo4vjqYr8A4Odybc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REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//Z" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{marginLeft: "30px"}}>
                  <div class="card-image">
                    <img style={{maxWidth: "200px", minWidth: "200px", marginRight: "auto"}} src="https://ca.slack-edge.com/EFUJK1UC8-WJGBSHHDL-9db81c780f9f-512" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <div class="collection" style={{minWidth: "930px", maxWidth: "930px", minHeight:"200px",  marginLeft: "auto",  marginRight: "auto"}}>                    
                  { screenpop.screenPopFields.map((fields) => {
                      if(fields.key == "Customer Phone"){
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
              <div class="col">
                <div class="card" style={{maxWidth: "570px", minWidth: "570px", minHeight:"300",  marginLeft: "30px",  marginRight: "auto"}}>
                    <div class="card-content">
                      <span class="card-title">{ screenpop.screenPopTable1.title }</span>
                      <table class="highlight">
                        <tr>
                          {screenpop.screenPopTable1.columns.map((column) => {
                            return (<th>{column}</th>)
                            })}
                        </tr>
                          {screenpop.screenPopTable1.rows.map((row) => {
                            return (
                              <tr>
                                { row.values.map((col) => {
                                    return <td>{col}</td>
                                      }) }
                                  </tr>
                              )
                            })
                          }
                        </table>
                        </div>
                    </div>
              </div>
              <div class="col">
                <div class="card" style={{maxWidth: "570px", minWidth: "570px", minHeight:"300",  marginLeft: "auto",  marginRight: "auto"}}>
                    <div class="card-content">
                      <span class="card-title">{ screenpop.screenPopTable2.title }</span>
                      <table class="highlight">
                        <tr>
                          {screenpop.screenPopTable2.columns.map((column) => {
                            return (<th>{column}</th>)
                            })}
                        </tr>
                          {screenpop.screenPopTable2.rows.map((row) => {
                            return (
                              <tr>
                                { row.values.map((col) => {
                                    return <td>{col}</td>
                                      }) }
                                  </tr>
                              )
                            })
                          }
                        </table>
                        </div>
                    </div>
              </div>
            </div>
            <div class="row">
            <div class="col">
                <div class="card" style={{minWidth: "730px", maxWidth: "730px", minHeight:"200px",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="collection">                    
                  { screenpop.screenPopFields2.map((fields) => {
                      if(fields.key == "Customer Phone - (click-to-call)"){
                        return (<a href="#!" class="collection-item" onClick={() => {Actions.invokeAction("StartOutboundCall", {destination: fields.value});} }><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)
                      } else {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span><Typography variant='body1'>{fields.key}</Typography></a>)  
                      }
                    })}
                  </div>
                </div>
              </div> 
              <div class="col">
                <div class="card">
                  <div class="card-image">
                    <img style={{maxWidth: "400px", minWidth: "400px", marginRight: "auto"}} src="https://bazaar-falcon-7238.twil.io/assets/generic_credit_card.png" />
                  </div>
                </div>
              </div>
            </div>      
          </div> 
            );
    }
}

export default withTaskContext(Fraud);
