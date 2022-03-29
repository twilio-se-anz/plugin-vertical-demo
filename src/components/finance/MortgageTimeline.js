import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import WarningIcon from '@material-ui/icons/Warning';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PhoneIcon from '@material-ui/icons/Phone';

class MortgageTimeline extends React.Component {
    render() {
      return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<PhoneCallbackIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">outbound call generated</h6>
                <p>
                Received Inbound call from <b>Fred Jones</b> pertaining to <b>Mortgage refinance</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<PhoneIphoneIcon />}
             >
                <h5 className="vertical-timeline-element-title">Mobile App:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Current interest rates</h6>
                <p>
                Navigated to <b>current interest rates</b> after viewing <b>account statement</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(42,46,66)' }}
                date="Today"
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<ChatIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound Chat:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">entrypoint - IOS App</h6>
                <p>
                Chat session with Bot escalated to human agent Kris Payne
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                
                iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<WarningIcon />}
            >
                <h5 className="vertical-timeline-element-title">Fraud Alert:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Suspicious Activity Detected</h6>
                <p>
                Suspicious credit card charge processed by <b>Ola Cabs</b> outbound SMS notification sent
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<LanguageIcon/>}
            >
                <h5 className="vertical-timeline-element-title">Website Visited:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">Desktop site visit</h6>
                <p>
                Processed <b>Address Change</b> transaction and viewed <b>Credit Card</b> product landing page
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                
                iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<PhoneIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound Call</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Customer service line</h6>
                <p>
                Call to <b>General enquiries</b> and spoke with <b>Eli Kennedy</b> call disposition <b>Legal name change</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
      )
    }
}

export default withTaskContext(MortgageTimeline);
