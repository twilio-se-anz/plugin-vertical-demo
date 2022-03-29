import React from 'react';
import { VERSION, Tab } from '@twilio/flex-ui';
import { FlexPlugin, loadCSS } from '@twilio/flex-plugin';
import CustomTheme from './components/CustomTheme'
import PanelSwitcher from './components/PanelSwitcher';
import PayTab from './components/TaskCanvasTabs/PayTab';
import AuthyTab from './components/TaskCanvasTabs/AuthyTab';
import PhotoTab from './components/TaskCanvasTabs/PhotoTab';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import WarningIcon from '@material-ui/icons/Warning';


const PLUGIN_NAME = 'VerticalDemoPlugin';

export default class VerticalDemoPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {

    const configuration = {
      colorTheme: CustomTheme
    };
    manager.updateConfig(configuration);
    flex.Actions.addListener('beforeLogout', (payload) => alert('beforeLogout'));

    flex.RootContainer.Content.remove("project-switcher")
    
    manager.strings.NoTasks = "Twilio Financial Services";

    // flex.MainHeader.defaultProps.logoUrl = "https://bazaar-falcon-7238.twil.io/assets/babyOwl.jpeg"
    
    flex.AgentDesktopView.defaultProps.splitterOptions = { initialFirstPanelSize: "400px", minimumFirstPanelSize: "400px" }
 
    // flex.TaskCanvasTabs.Content.add(
    //   <Tab icon={<CreditCardIcon/>} iconActive={<CreditCardIcon/>} uniqueName="pay-tab" key="pay-tab">
    //     <PayTab key="pay-tab"/>
    //   </Tab>     
    // );
    // flex.TaskCanvasTabs.Content.add(
    //   <Tab icon={<CameraAltIcon/>} iconActive={<CameraAltIcon/>} uniqueName="photo-tab" key="photo-tab">
    //     <PhotoTab key="photo-tab"/>
    //   </Tab>      
    // );
    flex.TaskCanvasTabs.Content.add(
      <Tab icon={<WarningIcon/>} iconActive={<WarningIcon/>} uniqueName="authy-tab" key="authy-tab">
        <AuthyTab key="authy-tab"/>
      </Tab>     
    );

    loadCSS("https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css");
    
    const options = { sortOrder: -1 };
    flex.AgentDesktopView
    .Panel2
    .Content
    .replace(<PanelSwitcher key="panel-switcher" />, options);



  }
}
