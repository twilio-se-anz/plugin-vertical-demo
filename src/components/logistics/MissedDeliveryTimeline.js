import React from 'react';
import { withTaskContext, } from '@twilio/flex-ui';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import ChatIcon from '@material-ui/icons/Chat';
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

class MissedDeliveryTimeline extends React.Component {
    render() {
      return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<PhoneIphoneIcon />}
            >
                <h5 className="vertical-timeline-element-title">IVR:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Escalation to live agent required</h6>
                <p>
                Received inbound call from <b>Fred Jones</b> pertaining to <b>Missing Package</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                contentStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<LanguageIcon/>}
             >
                <h5 className="vertical-timeline-element-title">Website Vist:</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Track a Package</h6>
                <p>
                Navigated to <b>missing package</b> after viewing <b>track a package</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                 contentStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                 contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                 iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<StarIcon />}
            >
                <h5 className="vertical-timeline-element-title">Delivery Complete</h5>
                <br />
                <h6 className="vertical-timeline-element-subtitle">Tracking number #1232355</h6>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                iconStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                contentStyle={{ background: 'rgb(0, 20, 137)', color: '#fff' }}
                icon={<ChatIcon />}
            >
                <h5 className="vertical-timeline-element-title">Inbound SMS:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">Approval to leave package</h6>
                <p>
                <b>Fred Jones</b> provided authority to leave package at <b>front door</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                iconStyle={{ background: 'rgb(242, 47, 70)', color: '#fff' }}
                icon={<ChatIcon />}
            >
                <h5 className="vertical-timeline-element-title">Outbound SMS:</h5>
                <br/>
                <h6 className="vertical-timeline-element-subtitle">Delivery Notification</h6>
                <p>
                Package <b>#1232355</b> is onboard for delivery. ETA is <b>09:55am</b> 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
      )
    }
}

export default withTaskContext(MissedDeliveryTimeline);
