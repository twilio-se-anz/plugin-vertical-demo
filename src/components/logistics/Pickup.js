import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import OrderForm from './OrderForm'

class Pickup extends React.Component {

      render() {
        
        var screenpop = { 
        "screenPopTitle": "Business Account - International Pickup",
        "screenPopSubtitle": "Merchant requested international pickup via IVR",
        "screenPopFields": [
          {
            "key": "Merchant Name",
            "value": "Twilio New Zealand"
          },
          {
            "key": "Account Number",
            "value": "062-225 1027 7411"
          },
          {
            "key": "Business Address",
            "value": "151 The Terrace, Wellington"
          },
          {
            "key": "Phone Number",
            "value": "+61405468859"
          },
          {
            "key": "GST Number",
            "value": "123456"
          },
          {
            "key": "Authorised Persons",
            "value": "Michael Johnson"
          },
          
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
        return (
        <div style={{background: "#f4f4f4", minHeight: "100vh"}}>
            <div class="row">
              <div class="col">
                <div class="card" style={{minWidth: "1150px", marginLeft: "30px",  marginRight: "auto", marginTop: "30px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <span class="card-title">{screenpop.screenPopTitle}</span>
                    <p>{screenpop.screenPopSubtitle}</p>
                  </div>
                  <div class="card-image">
                    <img style={{maxWidth: "100px", minWidth: "100px", marginRight: "auto"}} src="https://www.nzpost.co.nz/sites/nz/files/icons/Send%20it.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row"> 
              <div class="col">
                <div class="card" style={{maxWidth: "550px", minWidth: "550px", minHeight:"280px",  marginLeft: "30px"}}>
                  <div class="collection">                    
                    { screenpop.screenPopFields.map((fields) => {
                        return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                    })}
                  </div>
                </div>  
              </div>
              <div class="col">
                <div class="card" style={{maxWidth: "550px", minWidth: "550px", marginLeft: "30px",  marginRight: "auto"}}>
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
            </div>
            <div class="row">
              <div class="col">
                <div class="card" style={{maxWidth: "1150px", minWidth: "1150px", minHeight:"200px",  marginLeft: "30px", padding: '10px'}}>
                  <OrderForm />
                </div>
              </div>
            </div>     
          </div> 
            );
    }
}

export default withTaskContext(Pickup);
