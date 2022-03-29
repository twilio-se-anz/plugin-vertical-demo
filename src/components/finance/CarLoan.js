import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';

class CarLoan extends React.Component {

    render() {
      
      var screenpop = { 
      "screenPopTitle": "Existing Car Loan",
      "screenPopSubtitle": "Payments up to date",
      "screenPopFields": [
        {
          "key": "Customer Name",
          "value": "Fred Jones"
        },
        {
          "key": "Customer Reference Number",
          "value": "SN634682WR56657"
        },
        {
          "key": "Credit Status",
          "value": "Up to date"
        },
        {
          "key": "Current Loan Value",
          "value": "$18,500 AUD"
        }
      ],
      "screenPopFields2": [
        {
          "key": "Manufacturer",
          "value": "Mazda"
        },
        {
          "key": "Model",
          "value": "121"
        },
        {
          "key": "Year",
          "value": "1995"
        },
        {
          "key": "Assed value",
          "value": "$0 AUD"
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
        "title": "Payment History",
        "columns": [
          "txn number",
          "Description",
          "Status",
          "value",
          "Lodgement Date"
        ],
        "rows": [
          {
            "values": [
              "199867",
              "Direct Debit",
              "Approved",
              "$3,600",
              "19-Dec-2020"
            ]
          },
          {
            "values": [
              "244567",
              "Internet Banking",
              "Approved",
              "$111,000",
              "12-Jan-2020"
            ]
          },
          {
            "values": [
              "387921",
              "Direct Debit",
              "Approved",
              "$1,320",
              "26-Aug-2019"
            ]
          },
        ]
      }
    }
      // var screenpop = this.props.task.attributes;

      return (
      <div>
          <div class="row">
          <div class="col">
                <div class="card" style={{minWidth: "1150px", marginLeft: "30px",  marginRight: "auto", marginTop: "0px", display: "flex", justifyContent: "space-between"}}>
                  <div class="card-content">
                    <span class="card-title">{screenpop.screenPopTitle}</span>
                    <b>{screenpop.screenPopSubtitle}</b>
                  </div>
                  <div class="card-image">
                    <img style={{background:"midnightblue", maxWidth: "110px", minWidth: "110px", marginRight: "auto"}} src="https://bazaar-falcon-7238.twil.io/assets/westpaccar.png" />
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
                      return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                  })}
                </div>
              </div>
            </div>
          </div>
          <div class="row"> 
            <div class="col">
              <div class="card" style={{maxWidth: "565px", minWidth: "565px", minHeight:"300",  marginLeft: "30px",  marginRight: "auto"}}>
                  <div class="card-content">
                    <span class="card-title">{ screenpop.screenPopTable1.title }</span>
                    <table>
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
                    <table>
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
                      return (<a href="#!" class="collection-item"><span class="badge">{fields.value}</span>{fields.key}</a>)
                  })}
                </div>
              </div>
            </div> 
            <div class="col">
              <div class="card">
                <div class="card-image">
                  <img style={{maxWidth: "400px", minWidth: "400px", marginRight: "auto"}} src="https://s1.cdn.autoevolution.com/images/gallery/MAZDA121-Mk-2--917_6.jpg" />
                </div>
              </div>
            </div>
          </div>      
        </div> 
          );
  }
}

export default withTaskContext(CarLoan);
